import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

initializeApp({
  apiKey: "AIzaSyDUyPgNlr4K6cP_R0skzOtnW-BawgdOKE0",
  authDomain: "insect-rally.firebaseapp.com",
  projectId: "insect-rally",
  storageBucket: "insect-rally.appspot.com",
  messagingSenderId: "635528997469",
  appId: "1:635528997469:web:4bfbd3f0ebf51e29e8bbb4",
});

export const auth = getAuth();

export const useSignup = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const password = "123456";

  const handleChangeEmail = (e: any) => {
    setError(null);
    const tmp = e.currentTarget.value + "@example.com";
    setEmail(tmp);
  };

  const handleCreateUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        setError(err.message);
      }
    }
  };
  console.log(error);

  return {
    handleChangeEmail,
    handleCreateUser,
    error,
  };
};

export const useLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const password = "123456";

  const handleChangeEmail = (e: any) => {
    setError(null);
    const tmp = e.currentTarget.value + "@example.com";
    setEmail(tmp);
  };

  const handleSignInUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  console.log(error);
  return {
    handleChangeEmail,
    handleSignInUser,
    error,
  };
};

export const useLogout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.message);
        router.push("/login");
      }
    }
  };
  return handleLogout;
};
