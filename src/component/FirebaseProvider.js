import React, {useContext} from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

const FirebaseContext = React.createContext()

export const FirebaseProvider = ({children}) => {
  firebase.initializeApp({
      apiKey: "AIzaSyB7HAnr-7v1D9giLD8JYTYGYQs-fFasGiI",
      authDomain: "chat-firebase-d8938.firebaseapp.com",
      projectId: "chat-firebase-d8938",
      storageBucket: "chat-firebase-d8938.appspot.com",
      messagingSenderId: "407071322588",
      appId: "1:407071322588:web:5bde820dc63f5b4e32df19",
      measurementId: "G-DQMX3Y2C4V"
  })
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export const useFirebase = () => {
  const firebase = useContext(FirebaseContext)

  if (!firebase) {
    throw new Error("useAuth should be used inside of <AuthProvider />")
  }

  return firebase
}