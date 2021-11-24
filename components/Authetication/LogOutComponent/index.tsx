import React from "react";
import { LogBox, View, Text, TouchableOpacity } from "react-native";

import useCachedResources from "../../../hooks/useCachedResources";
import { initializeApp } from "firebase/app";
import { AuthContext } from "../../../navigation";
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

// LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

export default function LogOutComponent() {
  const isLoadingComplete = useCachedResources();
  // @ts-ignore
  const { signOut } = React.useContext(AuthContext);

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
