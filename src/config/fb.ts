import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";

const firebaseConfig = {
  authDomain: Constants?.manifest?.extra?.apiKey,
  apiKey: Constants?.manifest?.extra?.authDomain,
  projectId: Constants?.manifest?.extra?.projectId,
  storageBucket: Constants?.manifest?.extra?.storageBucket,
  messagingSenderId: Constants?.manifest?.extra?.messaginSenderId,
  appId: Constants?.manifest?.extra?.appId,
  databaseURL: Constants?.manifest?.extra?.databaseURL,
};

initializeApp(firebaseConfig);

export const database = getFirestore();
