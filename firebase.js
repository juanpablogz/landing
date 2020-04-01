// Get a RTDB instance
import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAx_9Pj6ZQWDk72VKixOzRrOuyPkJxv768",
  authDomain: "virtual-rooms.firebaseapp.com",
  databaseURL: "https://virtual-rooms.firebaseio.com",
  projectId: "virtual-rooms",
  storageBucket: "virtual-rooms.appspot.com",
  messagingSenderId: "550286245350",
  appId: "1:550286245350:web:ae560feacc3037ee4f6a27",
  measurementId: "G-TS4N9GP078"
};
export const firebaseInstance = firebase.initializeApp(firebaseConfig)
export const dataBase = firebaseInstance.database()

