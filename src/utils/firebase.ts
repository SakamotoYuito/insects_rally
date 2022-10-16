import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { writeUserLog } from "utils/writeLog";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const useSignup = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const password = process.env.NEXT_PUBLIC_PASSWORD!;

  const handleChangeEmail = (e: any) => {
    setError(null);
    const email = e.currentTarget.value + "@example.com";
    setEmail(email);
  };

  const handleCreateUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await addDoc(collection(db, "users"), {
        userName: userCredential.user.email?.split("@")[0],
        uid: userCredential.user.uid,
        checkIn: false,
        mode: "none",
        createdAt: Timestamp.now(),
      });
      await addDoc(collection(db, "userStatus"), {
        uid: userCredential.user.uid,
        status: "ビギナー",
        state: "探索",
        currentPlace: "none",
        answered: 0,
        chartData: { gd: 0, mt: 0, rv: 0 },
        quests: Array(10).fill("unanswered"),
      });
      const logData = {
        uid: userCredential.user.uid,
        place: "start",
        state: "signUp",
      };
      await writeUserLog(logData);
      router.push("/");
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        setError(err.message);
      }
    }
  };

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
  const password = process.env.NEXT_PUBLIC_PASSWORD!;

  const handleChangeEmail = (e: any) => {
    setError(null);
    const addr = e.currentTarget.value + "@example.com";
    setEmail(addr);
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
