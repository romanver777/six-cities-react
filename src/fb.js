import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: `AIzaSyBxAD3KOWDk8CIHIf92sMRDVn1ncpoxA4w`,
  authDomain: `cities-5fbfb.firebaseapp.com`,
  projectId: `cities-5fbfb`,
  storageBucket: `cities-5fbfb.appspot.com`,
  messagingSenderId: `925423531890`,
  appId: `1:925423531890:web:366423e60c1ba0f6a14feb`,
  measurementId: `G-SR29YM1GY2`,
  databaseURL: `https://cities-5fbfb-default-rtdb.europe-west1.firebasedatabase.app/`,
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export default app;
