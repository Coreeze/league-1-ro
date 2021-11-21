import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LogBox, View, Text, TouchableOpacity } from "react-native";

import useCachedResources from "../../../hooks/useCachedResources";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../../navigation";
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

export default function SignInComponent() {
  const navigation = useNavigation();
  const isLoadingComplete = useCachedResources();

  // Set an initializing state whilst Firebase connects
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // @ts-ignore
  const { signIn } = React.useContext(AuthContext);

  const auth: any = getAuth();

  useEffect(() => {
    // console.log("USE EFFECT SignInComponent: "+authenticated);
  });

  function getIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // alert("Autentificare de succes!");
        // navigation.navigate("");
        signIn({ email, password });
        setEmail("");
        setPassword("");
        // ...
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode.includes("wrong-password")) {
          alert(`Parola gresita`);
        }
      });
  }

  function goToSignUp() {
    navigation.navigate("SignUp");
  }

  function print() {
    console.log(auth.currentUser);
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
          value={password}
          placeholder={"Password here"}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={getIn}>
          <Text>Sign IN</Text>
        </TouchableOpacity>
        <Text>No Account? Then</Text>
        <TouchableOpacity onPress={goToSignUp}>
          <Text>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={print}>
          <Text>Print</Text>
        </TouchableOpacity>
      </SafeAreaProvider>
    );
  }
}
