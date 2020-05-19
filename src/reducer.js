import api from './api';

const initialState = {
	city: `Paris`,
	hotels: [],
};

const ActionType = {
	SET_CITY: `SET_CITY`,
	LOAD_HOTELS: `LOAD_HOTELS`,
};

const ActionCreator = {

	setCity: (city) => ({
		type: ActionType.SET_CITY,
		payload: city,
	}),

	loadHotels: (hotels) => ({
		type: ActionType.LOAD_HOTELS,
		payload: hotels
	})
};


const reducer = (state = initialState, action) => {

	switch (action.type) {

		case ActionType.SET_CITY: return Object.assign({}, state, {
				city: action.payload
			});

		case ActionType.LOAD_HOTELS: return Object.assign({}, state, {
				hotels: action.payload,
			});
	}

	return state;
};

const Operation = {

	loadHotels: () => (dispatch) => {

		return api.get(`http://f0420099.xsph.ru/6cities/six-cities.json`)
			.then((response) => {
				dispatch(ActionCreator.loadHotels(response.data));
			});
	},
};
export {
	ActionCreator,
	reducer,
	Operation,
}
