import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LogBox, View, Text, TouchableOpacity } from "react-native";
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
import useCachedResources from "../../hooks/useCachedResources";

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

export default function AuthenticationComponent() {
  const isLoadingComplete = useCachedResources();

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
    console.log(auth.currentUser);
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

        console.log(user);
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
  }

  async function writeUserToDb() {
    const db = getFirestore();
    // const chatsRef = query(collection(db, "users"));
    // async function handleSend(post: any) {#
    const uid = auth.currentUser.uid;
    await addDoc(collection(db, "users"), { uid });
    // }
  }

  function signIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  function getCurrentUser() {
    const user = auth.currentUser;
    if (user !== null) {
      console.log(user);
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
    }
  }

  function getOut() {
    signOut(auth)
      .then(() => {
        console.log("singed out");
        console.log(auth.currentUser);
      })
      .catch((error) => {
        console.log("Error by Signing out: " + error);
        // An error happened.
      });
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
        <Text>
          Welcome {email} and {password}
        </Text>
        <TouchableOpacity onPress={signUp}>
          <Text>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getCurrentUser}>
          <Text>Get current user data</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getOut}>
          <Text>Sign out</Text>
        </TouchableOpacity>
      </SafeAreaProvider>
    );
  }
}
