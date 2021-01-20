import { useEffect, useState, useCallback } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: process.env.GATSBY_API_KEY,
    authDomain: process.env.GATSBY_AUTH_DOMAIN,
    projectId: process.env.GATSBY_PROJECT_ID,
    storageBucket: process.env.GATSBY_STORAGE_BUCKET,
    messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
    appId: process.env.GATSBY_APP_ID,
    measurementId: process.env.GATSBY_MEASUREMENT_ID
};

firebase.initializeApp(config)

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.addScope('profile');
googleProvider.addScope('email');

const useFirebase = () => {
  const [authUser, setAuthUser] = useState(firebase.auth().currentUser);

  useEffect(() => {
    const unsubscribe = firebase.auth()
      .onAuthStateChanged((user) => setAuthUser(user))
    return () => {
      unsubscribe()
    };
  }, []);

  const login = useCallback((email, password) => firebase.auth()
    .signInWithEmailAndPassword(email, password), []);

  const logout = useCallback(() => firebase.auth().signOut(), [])

  const signInWithGoogle = useCallback(() => firebase.auth().signInWithPopup(googleProvider), []);

  return { login, authUser, logout, signInWithGoogle }
}

export default useFirebase;