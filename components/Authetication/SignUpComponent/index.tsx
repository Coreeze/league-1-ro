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
import DropDownPicker from "react-native-dropdown-picker";

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

export default function SignUpComponent() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  // @ts-ignore
  const { signIn } = React.useContext(AuthContext);

  const navigation = useNavigation();

  const [color, setColor] = useState("grey");
  function changeColor() {
    setColor("black");
  }

  // Set an initializing state whilst Firebase connects
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "CFR Cluj", value: "CFR Cluj" },
    { label: "FCSB", value: "FCSB" },
    { label: "Univ. Craiova", value: "Univ. Craiova" },
    { label: "FC Rapid 1923", value: "FC Rapid 1923" },
    { label: "FC Botosani", value: "FC Botosani" },
    { label: "Farul Constanta", value: "Farul Constanta" },
    { label: "UTA Arad", value: "UTA Arad" },
    { label: "FC Voluntari", value: "FC Voluntari" },
    { label: "FC Arges", value: "FC Arges" },
    { label: "AFC Chindia Targoviste", value: "AFC Chindia Targoviste" },
    { label: "Sepsi OSK", value: "Sepsi OSK" },
    { label: "Gaz Metan", value: "Gaz Metan" },
    { label: "U Craiova 1948", value: "U Craiova 1948" },
    { label: "CS Mioveni", value: "CS Mioveni" },
    { label: "FC Dinamo 1948", value: "FC Dinamo 1948" },
    { label: "Academia Clinceni", value: "Academia Clinceni" },
  ]);

  const auth: any = getAuth();

  function checkEmail() {
    if (
      !email.toLowerCase().includes("pula") &&
      !email.toLowerCase().includes("pulă") &&
      !email.toLowerCase().includes("pulâ") &&
      !email.toLowerCase().includes("cacat") &&
      !email.toLowerCase().includes("câcat") &&
      !email.toLowerCase().includes("câcăt") &&
      !email.toLowerCase().includes("rahat") &&
      !email.toLowerCase().includes("rehat") &&
      !email.toLowerCase().includes("rehet") &&
      (email.toLowerCase().includes("yahoo") ||
        email.toLowerCase().includes("gmail") ||
        email.toLowerCase().includes("outlook") ||
        email.toLowerCase().includes("icloud") ||
        email.toLowerCase().includes("protonmail"))
    ) {
      return true;
    } else return false;
  }
  function checkUsername() {
    if (
      !username.toLowerCase().includes("pula") &&
      !username.toLowerCase().includes("pulă") &&
      !username.toLowerCase().includes("pulâ") &&
      !username.toLowerCase().includes("cacat") &&
      !username.toLowerCase().includes("câcat") &&
      !username.toLowerCase().includes("câcăt") &&
      !username.toLowerCase().includes("rahat") &&
      !username.toLowerCase().includes("rehat") &&
      !username.toLowerCase().includes("rehet") &&
      !username.toLowerCase().includes(" ")
    ) {
      return true;
    } else return false;
  }

  function signUp() {
    if (
      checkEmail() &&
      checkUsername() &&
      email != "" &&
      password != "" &&
      username.length > 4
    ) {
      console.log("createUser");
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          signIn({ email, password });
          updateProfile(auth.currentUser, {
            displayName: username + "|" + value,
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
          if (errorCode.includes("weak-password")) {
            alert(
              `Ne pare rau, codul tau de la dulap (parola) e prea usor de ghicit`
            );
          }
          // ..
        });
      writeUserToDb;
    } else {
      alert(
        "Ceva nu este ok la datele introduse. \n\nTe rugam mai verifica odata si apoi incepem meciul!"
      );
    }
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
          source={require("../../../assets/images/login4.jpg")}
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
              <Text style={styles.title}>Hai in echipa, mai avem un loc!</Text>
              <TextInput
                value={email}
                placeholder={"E-mail"}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
                selectionColor={colors.appDarkBlue}
              />
              <TextInput
                value={username}
                placeholder={"Numele de pe tricou"}
                onChangeText={(text) => setUsername(text)}
                style={styles.input}
                selectionColor={colors.appDarkBlue}
              />
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Ce echipa sustii?"
                style={{ borderWidth: 1, borderColor: "#e8e8e8" }}
                dropDownContainerStyle={{
                  borderWidth: 1,
                  borderColor: "#e8e8e8",
                }}
                labelStyle={{}}
                textStyle={{ color: color, fontSize: 15 }}
                onChangeValue={changeColor}
              />
              <TextInput
                value={password}
                placeholder={"Codul de la dulap"}
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
                secureTextEntry={true}
                selectionColor={colors.appDarkBlue}
              />
              <TouchableOpacity
                onPress={signUp}
                style={styles.loginContainer}
                activeOpacity={0.8}
              >
                <Text style={styles.loginText}>Creeaza cont</Text>
              </TouchableOpacity>

              <Text style={{ fontSize: 10, color: "grey", paddingTop: 9 }}>
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
