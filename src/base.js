import Rebase from "re-base";
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCWUPEnb07SrI0capuWK0coEk_nbTkGxeo",
  authDomain: "catch-of-the-day-currie.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-currie-default-rtdb.firebaseio.com",
});
const base = Rebase.createClass(firebaseApp.database());
export { firebaseApp };
export default base;
