import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { functions } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEFFZ-bHnGs5Bk7H2krUG-oxYNsacm1y4",
  authDomain: "usersposts-f2f91.firebaseapp.com",
  databaseURL: "https://usersposts-f2f91.firebaseio.com",
  projectId: "usersposts-f2f91",
  storageBucket: "usersposts-f2f91.appspot.com",
  messagingSenderId: "347398478512",
  appId: "1:347398478512:web:7eb882ee39800d08fef975",
  measurementId: "G-2HL162JTC0",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithRedirect(provider).then({});
};

export const getGoogleRedirectInfo = async () => {
  firebase
    .auth()
    .getRedirectResult()
    .then(function (result) {
      if (result.credential) {
        var token = result.credential.accessToken;
        window.location.href = "/app/mainpage";
      }
      var user = result.user;
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      return false;
    });
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

export const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(function () {
      window.location.href = "/app/mainpage";
    })
    .catch(function (error) {
      console.log("wylogowano z bledem ", error);
      window.location.href = "/app/mainpage";
    });
};

const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
