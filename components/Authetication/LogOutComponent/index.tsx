import React, { useContext, useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LogBox, View, Text, TouchableOpacity } from "react-native";

import useCachedResources from "../../../hooks/useCachedResources";
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext, AuthStackScreen } from "../../../navigation";

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
  const { signOut } = React.useContext(AuthContext);

  function getOut() {
    signOut(auth)
      .then(() => {
        signOut;
        console.log("singed out");
        // console.log(auth.currentUser);
      })
      .catch((error) => {
        console.log("Error by Signing out: " + error);
        // An error happened.
      });
  }

  function print() {
    console.log(auth.currentUser);
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <TouchableOpacity onPress={signOut}>
          <Text>Sign out</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={print}>
          <Text>Print</Text>
        </TouchableOpacity>
      </SafeAreaProvider>
    );
  }
}
