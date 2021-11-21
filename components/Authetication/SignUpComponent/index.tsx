import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LogBox, View, Text, TouchableOpacity } from "react-native";

import useCachedResources from "../../../hooks/useCachedResources";
import useColorScheme from "../../../hooks/useColorScheme";
import Navigation from "../../../navigation";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import auth from "@react-native-firebase/auth";
import { initializeApp } from "firebase/app";
import { TextInput } from "react-native-paper";
import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyDDQKoZYTxpvE3aHPhop6buG0aYZXYv0IU",
  authDomain: "football-app-32bb9.firebaseapp.com",
  projectId: "football-app-32bb9",
  storageBucket: "football-app-32bb9.appspot.com",
  messagingSenderId: "632067557113",
  appId: "1:632067557113:web:dfabd8d2f45072ff8d0428",
  measurementId: "G-07RETPKL8Y",
};

const app = initializeApp(firebaseConfig);

LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

export default function SignUpComponent() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({
    uid: "",
    username: "",
    avatar: "",
  });

  const auth: any = getAuth();

  useEffect(() => {
    console.log("USE EFFECT SignUpComponent");
  });

  function signUp() {
    console.log("createUser");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Succes!");

        updateProfile(auth.currentUser, {
          displayName: "Jane Q. User",
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            console.log("Profile updated!");
          })
          .catch((error) => {
            console.log(error);
          });

        console.log("go to navi");
        // if (!isLoadingComplete) {
        //   return null;
        // } else {
        //   return (
        //     <SafeAreaProvider>
        //       <Navigation colorScheme={colorScheme} />
        //       <StatusBar />
        //     </SafeAreaProvider>
        //   );
        // }
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        if (errorCode.includes("invalid-email")) {
          alert(`Adresa de e-mail invalida`);
        }
        if (errorCode.includes("email-already-in-use")) {
          alert(`Ne pare rau, adresa de e-mail este deja folosita de cineva`);
        }
        // ..
      });
    writeUserToDb;
  }

  async function writeUserToDb() {
    const db = getFirestore();
    // const chatsRef = query(collection(db, "users"));
    // async function handleSend(post: any) {#
    const uid = auth.currentUser.uid;
    await addDoc(collection(db, "users"), { uid });
    // }
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <TextInput
          value={email}
          placeholder={"Email here"}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          value={username}
          placeholder={"username here"}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          value={password}
          placeholder={"Password here"}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={signUp}>
          <Text>Sign up</Text>
        </TouchableOpacity>
      </SafeAreaProvider>
    );
  }
}
