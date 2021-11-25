import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  LogBox,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { Divider } from "react-native-elements";
import { useNetInfo } from "@react-native-community/netinfo";

import useCachedResources from "../../../hooks/useCachedResources";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../../navigation";
import styles from "./styles";
import useFonts from "../../../useFonts";
import AppLoading from "expo-app-loading";
import colors from "../../../constants/colors";
import LoadingScreen from "../../../screens/LoadingScreen";
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

export default function SignInComponent() {
  const navigation = useNavigation();
  const isLoadingComplete = useCachedResources();

  // Set an initializing state whilst Firebase connects
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // @ts-ignore
  const { signIn } = React.useContext(AuthContext);

  const netInfo = useNetInfo();

  const [loading, setLoading] = useState(false);

  const auth: any = getAuth();

  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  function getIn() {
    setLoading(true);

    if (netInfo.isConnected) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          console.log("signedIn: " + auth.currentUser);
          signIn({ email, password });
          setEmail("");
          setPassword("");
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode.includes("wrong-password")) {
            alert(`Date invalide`);
          }
          if (errorCode.includes("invalid-email")) {
            alert(`Date invalide`);
          }
          if (errorCode.includes("user-not-found")) {
            alert(
              `Se pare ca nu esti inca in echipa noastra.\n\nNu-i nimic, fa-ti cont acum!`
            );
          }
        });
    } else
      alert(
        "Nu exista conexiune la internet. Conecteaza-te si hai in echipa! Mai avem un loc!"
      );
  }

  function goToSignUp() {
    navigation.navigate("SignUp");
  }

  function showConfidentialiy() {
    navigation.navigate("Confidentiality");
  }
  function showTerms() {
    navigation.navigate("Terms");
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ImageBackground
          source={require("../../../assets/images/login3.jpg")}
          style={styles.background}
          resizeMode="cover"
        >
          {loading ? (
            <ActivityIndicator size="large" color={colors.appNeonGreen} />
          ) : (
            <View style={styles.container}>
              <View style={styles.container2}>
                <Text style={styles.title}>Salutare!</Text>
                <View>
                  <TextInput
                    value={email}
                    placeholder={"E-mail"}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                  />
                </View>
                <TextInput
                  value={password}
                  placeholder={"Codul de la dulap (parola)"}
                  onChangeText={(text) => setPassword(text)}
                  style={styles.input}
                  secureTextEntry={true}
                />
                <TouchableOpacity
                  onPress={getIn}
                  style={styles.loginContainer}
                  activeOpacity={0.8}
                >
                  <Text style={styles.loginText}>Logare</Text>
                </TouchableOpacity>
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "MontserratSemiBold",
                    color: "#1C374A",
                    paddingTop: 33,
                  }}
                >
                  Nu ai cont inca? Devin-o acum parte din comunitatea fotbalului
                  romanesc!
                </Text>
                <TouchableOpacity
                  onPress={goToSignUp}
                  style={styles.signUpContainer}
                  activeOpacity={0.8}
                >
                  <Text style={styles.signUpText}>Creeaza cont</Text>
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 10,
                    color: "grey",
                  }}
                >
                  Folosirea aplicatiei Fotbalul Romanesc inseamna ca esti de
                  acord cu{" "}
                  <Text
                    style={{ fontSize: 10, color: "#5E5E5E" }}
                    onPress={showConfidentialiy}
                  >
                    Politica de Confidentialitate
                  </Text>
                  si cu{" "}
                  <Text
                    onPress={showTerms}
                    style={{ fontSize: 10, color: "#5E5E5E" }}
                  >
                    Termenii si Conditiile.
                  </Text>
                  .
                </Text>
              </View>
            </View>
          )}
        </ImageBackground>
      </SafeAreaProvider>
    );
  }
}
