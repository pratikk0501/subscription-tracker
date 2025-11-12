"use client";

import { auth, db } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export default function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const { children } = props;

  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState({ subscriptions: [] });
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signout() {
    setCurrentUser(null);
    setUserData(null);

    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  async function saveToFirebase(data) {
    try {
      const userRef = doc(db, "users", currentUser.uid);
      const res = await setDoc(
        userRef,
        {
          subscriptions: data,
        },
        { merge: true }
      );
    } catch (error) {
      console.error("Error saving data:", error.message);
    }
  }

  async function handleAddSubscription(subscription) {
    if (userData.subscriptions.length > 30) {
      return; // Adding too many subscriptions not allowed
    }

    const newSubscriptions = [...userData.subscriptions, subscription];

    setUserData({ subscriptions: newSubscriptions });

    await saveToFirebase(newSubscriptions);
  }

  async function handleDeleteSubscription(index) {
    const newSubscriptions = userData.subscriptions.filter((val, valIndex) => {
      return valIndex !== index;
    });

    setUserData({ subscriptions: newSubscriptions });

    await saveToFirebase(newSubscriptions);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        setLoading(true);
        setCurrentUser(user);

        if (!user) {
          return;
        }

        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    userData,
    loading,
    setUserData,
    signup,
    signin,
    signout,
    resetPassword,
    handleAddSubscription,
    handleDeleteSubscription,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
