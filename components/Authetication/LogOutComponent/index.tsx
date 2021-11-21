import React from "react";
import { LogBox, View, Text, TouchableOpacity } from "react-native";

import useCachedResources from "../../../hooks/useCachedResources";
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { AuthContext, AuthStackScreen } from "../../../navigation";
import styles from "./styles";

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
  const navigation = useNavigation();
  const isLoadingComplete = useCachedResources();
  const auth: any = getAuth();
  // @ts-ignore
  const { signOut } = React.useContext(AuthContext);

  function goToHistory() {
    navigation.navigate("History");
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View
        style={{
          width: "100%",
        }}
      >
        <TouchableOpacity
          onPress={signOut}
          style={styles.logoutContainer}
          activeOpacity={0.8}
        >
          <Text style={styles.logouText}>Delogare</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
