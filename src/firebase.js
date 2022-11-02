
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyArj_EX5PqOjc1klmDU7TX2wRou_am9Lrk",
    authDomain: "aut-2-3e1b6.firebaseapp.com",
    projectId: "aut-2-3e1b6",
    storageBucket: "aut-2-3e1b6.appspot.com",
    messagingSenderId: "408877664448",
    appId: "1:408877664448:web:0eee0abf386878548f8525"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)