import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCJ81J_PAo-cw6aMiq6dBeM9Mh9kA-4he0",
  authDomain: "challengechapter9-5eafa.firebaseapp.com",
  databaseURL: "https://challengechapter9-5eafa-default-rtdb.firebaseio.com",
  projectId: "challengechapter9-5eafa",
  storageBucket: "challengechapter9-5eafa.appspot.com",
  messagingSenderId: "453612462396",
  appId: "1:453612462396:web:786fbf2c51082c9a313e39",
  measurementId: "G-6FMNXTHC67"
  
};

const app = initializeApp(firebaseConfig);
const authFirebase = getAuth(app)
const database = getDatabase(app)

export {
  database
}

export default authFirebase