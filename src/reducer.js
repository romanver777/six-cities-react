import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";
import app from "./fb";
import { getDatabase, ref, child, get, update } from "firebase/database";

const initialState = {
  city: ``,
  hotels: [],
  currentOffer: {},
  favoriteList: [],
  isAuthorizationRequired: true,
  currentUser: {},
  reviews: [],
  sortingType: `Popular`,
};

const getFavoriteIndexFromList = (offer, favoriteList) => {
  if (!favoriteList || !favoriteList.length) return -1;

  return favoriteList.findIndex((item) => item.hotelId === offer.hotelId);
};

const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_HOTELS: `SET_HOTELS`,
  SET_CURRENT_OFFER: `SET_CURRENT_OFFER`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  SET_CURRENT_USER: `SET_CURRENT_USER`,
  RELOAD_ALL: `RELOAD_ALL`,
  TOGGLE_FAVORITE: `TOGGLE_FAVORITE`,
  ADD_FAVORITE: `ADD_FAVORITE`,
  REMOVE_FAVORITE: `REMOVE_FAVORITE`,
  SET_FAVORITES: `SET_FAVORITES`,
  SET_FAVORITE_LIST: `SET_FAVORITE_LIST`,
  SET_REVIEWS: `SET_REVIEWS`,
  SET_SORTING_TYPE: `SET_SORTING_TYPE`,
};

const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),

  setHotels: (hotels) => ({
    type: ActionType.SET_HOTELS,
    payload: hotels,
  }),

  setCurrentOffer: (currentOffer) => ({
    type: ActionType.SET_CURRENT_OFFER,
    payload: currentOffer,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),

  setCurrentUser: (dataUser) => ({
    type: ActionType.SET_CURRENT_USER,
    payload: dataUser,
  }),

  toggleFavorite: (offer, favoriteList) => {
    const offerInd = getFavoriteIndexFromList(offer, favoriteList);

    if (offerInd < 0) {
      return {
        type: `ADD_FAVORITE`,
        payload: offer,
      };
    }
    return {
      type: `REMOVE_FAVORITE`,
      payload: offerInd,
    };
  },

  setFavorites: (favoriteList) => ({
    type: `SET_FAVORITES`,
    payload: favoriteList,
  }),

  setFavoriteList: (list) => ({
    type: `SET_FAVORITE_LIST`,
    payload: list,
  }),

  setReviews: (reviews) => ({
    type: `SET_REVIEWS`,
    payload: reviews,
  }),

  setSortingType: (type) => ({
    type: `SET_SORTING_TYPE`,
    payload: type,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return Object.assign({}, state, {
        city: action.payload,
      });

    case ActionType.SET_HOTELS:
      return Object.assign({}, state, {
        hotels: action.payload,
      });

    case ActionType.SET_CURRENT_OFFER:
      return Object.assign({}, state, {
        currentOffer: action.payload,
      });

    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload,
      });

    case ActionType.SET_CURRENT_USER:
      return Object.assign({}, state, {
        currentUser: action.payload,
      });

    case ActionType.ADD_FAVORITE:
      if (state.currentUser.favoriteList) {
        return Object.assign({}, state, {
          currentUser: {
            ...Object.assign({}, state.currentUser, {
              favoriteList: [...state.currentUser.favoriteList, action.payload],
            }),
          },
        });
      }
      return Object.assign({}, state, {
        currentUser: {
          ...Object.assign({}, state.currentUser, {
            favoriteList: [ action.payload],
          }),
        },
      });

    case ActionType.REMOVE_FAVORITE:
      let list = [...state.favoriteList];
      list.splice(action.payload, 1);

      return Object.assign({}, state, {
        favoriteList: list,
      });

    case ActionType.SET_FAVORITES:
      return Object.assign({}, state, {
        favoriteList: action.payload,
      });

    case ActionType.SET_FAVORITE_LIST:
      return Object.assign({}, state, {
        favoriteList: action.payload,
      });

    case ActionType.SET_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.payload,
      });

    case ActionType.SET_SORTING_TYPE:
      return Object.assign({}, state, {
        sortingType: action.payload,
      });

    default:
      return state;
  }
};

const Operation = {
  loadHotels: () => (dispatch, getState) => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `hotels/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          dispatch(ActionCreator.setHotels(snapshot.val()));
        }
      })
      .then(() => {
        const city = getState().hotels[0].city;
        
        if (city) dispatch(ActionCreator.setCity(city));
      })
      .catch((error) => {
        console.log(error);
      });
  },

  checkAuth: () => (dispatch, getState) => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      if (user) {
		    dispatch(Operation.downloadCurrentUserData(user.uid));
      }
    });    
  },

  login: (authData) => (dispatch, getState) => {
    const auth = getAuth(app);
    setPersistence(auth, browserSessionPersistence)
      .then(() =>
        signInWithEmailAndPassword(auth, authData.email, authData.password)
      )
      .then((userCredential) =>
        dispatch(Operation.downloadCurrentUserData(userCredential.user.uid))
      )
      .catch((error) => {
        console.log(error);
      });
  },

  downloadCurrentUserData: (uid) => (dispatch, getState) => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `users/${uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          dispatch(ActionCreator.setCurrentUser(snapshot.val()));
          dispatch(ActionCreator.requireAuthorization(false));
        }
      })
      .then(() => {
        if (getState().currentUser.favoriteList) {
          dispatch(
            ActionCreator.setFavoriteList(getState().currentUser.favoriteList)
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },

  uploadToFavoriteList: (list) => (dispatch, getState) => {
    const db = getDatabase();
    const uid = getAuth().currentUser.uid;

    update(ref(db, `users/` + uid), { favoriteList: list })
      .then(() => {
        dispatch(Operation.downloadCurrentUserData(uid));
      })
      .catch((error) => {
        console.log(error);
      });
  },

  toggleFavoriteList: (offer) => (dispatch, getState) => {
    let list = getState().currentUser.favoriteList;
    const index = getFavoriteIndexFromList(offer, list);

    if(index > -1) {
      list.splice(index, 1);
      dispatch(Operation.uploadToFavoriteList(list));
      return;
    }
    if(list) {
      list.push(offer);
      dispatch(Operation.uploadToFavoriteList(list));
      return;
    }
    dispatch(Operation.uploadToFavoriteList([offer]));
  },
};
export { ActionCreator, reducer, Operation };
