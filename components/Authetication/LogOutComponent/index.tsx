import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LogBox, View, Text, TouchableOpacity } from "react-native";

import useCachedResources from "../../../hooks/useCachedResources";
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";

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
// const { signOut } = React.useContext(AuthContext);

LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

export default function LogOutComponent() {
  const isLoadingComplete = useCachedResources();
  const auth: any = getAuth();

  useEffect(() => {
    console.log("USE EFFECT");
  });

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

  if (auth.currentUser) {
    console.log("here");
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <TouchableOpacity onPress={getOut}>
          <Text>Sign out</Text>
        </TouchableOpacity>
      </SafeAreaProvider>
    );
  }
}
