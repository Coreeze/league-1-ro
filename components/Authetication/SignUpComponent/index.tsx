import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  LogBox,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import useCachedResources from "../../../hooks/useCachedResources";
import useColorScheme from "../../../hooks/useColorScheme";
import Navigation, { AuthContext } from "../../../navigation";
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
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import colors from "../../../constants/colors";

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
  // @ts-ignore
  const { signIn } = React.useContext(AuthContext);

  const navigation = useNavigation();

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
        signIn({ email, password });
        updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            console.log("Profile updated!");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        if (errorCode.includes("invalid-email")) {
          alert(`Date invalide!`);
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
        <ImageBackground
          source={require("../../../assets/images/login.jpg")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.container2}>
              <TouchableOpacity onPress={navigation.goBack} activeOpacity={0.5}>
                <Ionicons
                  name="return-up-back"
                  size={34}
                  color={colors.appDarkBlue}
                />
              </TouchableOpacity>
              <Text style={styles.title}>Hai sa ne cunoastem!</Text>
              <TextInput
                value={email}
                placeholder={"E-mail"}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
              />
              <TextInput
                value={username}
                placeholder={"Numele de pe tricou"}
                onChangeText={(text) => setUsername(text)}
                style={styles.input}
              />
              <TextInput
                value={password}
                placeholder={"Codul de la dulap"}
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
              />
              <TouchableOpacity
                onPress={signUp}
                style={styles.loginContainer}
                activeOpacity={0.8}
              >
                <Text style={styles.loginText}>Creeaza cont</Text>
              </TouchableOpacity>

              <Text style={{ fontSize: 10 }}>
                Folosirea aplicatiei Fotbalul Romanesc inseamna ca esti de acord
                cu Politica de Confidentialitate si cea de Folosire a
                Cookie-urilor.
              </Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaProvider>
    );
  }
}
