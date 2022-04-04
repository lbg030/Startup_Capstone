import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCw5VZIxFkEU5gpOLZI_ejwRoKOIdXAjVU",
  authDomain: "startupcapstone.firebaseapp.com",
  databaseURL: "https://startupcapstone-default-rtdb.firebaseio.com",
  projectId: "startupcapstone",
  storageBucket: "startupcapstone.appspot.com",
  messagingSenderId: "1078490330105",
  appId: "1:1078490330105:web:69a391662d46bf48ab0328",
  measurementId: "G-H8WH9MVKEH",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();