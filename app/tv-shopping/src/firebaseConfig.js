import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDZ71tyBjWcCdejRuo36gS7IGUv5quI2pQ",
    authDomain: "hackseoul20241.firebaseapp.com",
    projectId: "hackseoul20241",
    storageBucket: "hackseoul20241.appspot.com",
    messagingSenderId: "652629843077",
    appId: "1:652629843077:web:d00940d4f9560716541dec",
    databaseURL: "https://hackseoul20241-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };