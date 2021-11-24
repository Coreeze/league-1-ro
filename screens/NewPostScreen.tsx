import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  NativeModules,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  LogBox,
  Button,
  ImageBackground,
} from "react-native";

import { Text, View } from "../components/Themed";
import colors from "../constants/colors";
import * as firebase from "firebase/compat";
import "firebase/firestore";
import { initializeApp } from "@firebase/app";
import {
  getFirestore,
  collection,
  query,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

// LogBox.ignoreLogs(["Setting a timer"]);

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

const db = getFirestore();

const { StatusBarManager } = NativeModules;

export default function NewPostScreen({ navigation }: any) {
  const refInput = useRef(null);

  const [user, setUser] = useState("Username");
  const auth: any = getAuth();
  // setUser(auth.currentUser);
  const [name, setName] = useState("");
  const [content, setContent] = useState(String);
  const [post, setPost] = useState({
    user: {},
    id: "",
    content: "",
    createdAt: Date,
    image: null,
  });

  const communityRef = collection(db, "community");
  async function handleSend(post: any) {
    // console.log("postText: " + post);

    // await addDoc(collection(db, "community"), { post });
    const id = JSON.stringify(post.id);
    await setDoc(doc(communityRef, id), { post });

    const citiesRef = collection(db, "cities");

    await setDoc(doc(citiesRef, "SF"), {
      name: "San Francisco",
      state: "CA",
      country: "USA",
      capital: false,
      population: 860000,
      regions: ["west_coast", "norcal"],
    });
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      Platform.OS === "ios"
        ? // @ts-ignore:
          refInput.current.focus()
        : // @ts-ignore:
          setTimeout(() => refInput.current.focus(), 40);
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  function sendToDb() {
    if (
      post.content.length > 1 &&
      !post.content.toLowerCase().includes("pula") &&
      !post.content.toLowerCase().includes("pulă") &&
      !post.content.toLowerCase().includes("pulâ") &&
      !post.content.toLowerCase().includes("cacat") &&
      !post.content.toLowerCase().includes("câcat") &&
      !post.content.toLowerCase().includes("câcăt") &&
      !post.content.toLowerCase().includes("rahat") &&
      !post.content.toLowerCase().includes("rehat") &&
      !post.content.toLowerCase().includes("rehet")
    ) {
      console.log("post");
      const refresh = true;
      navigation.navigate("Communities", { refresh });
      handleSend(post);
      setPost({
        user: {},
        id: "",
        content: "",
        createdAt: Date,
        image: null,
      });
    } else {
      alert(
        "Postare invalida! \nPoate fi prea scurta sau contine cuvinte invalide"
      );
    }
  }

  return (
    <ImageBackground
      source={require("../assets/images/new-post.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Postare noua</Text>
        <View style={styles.inputContainer}>
          <TextInput
            ref={refInput}
            placeholder={"Ce mai e nou?"}
            style={styles.newPostInput}
            value={post.content}
            onChangeText={
              (text) => {
                function epoch(date: any) {
                  return Date.parse(date);
                }
                const createdAt = new Date();
                const id =
                  epoch(createdAt) + Math.floor(Math.random() * 10000000001);

                setPost({
                  user: {
                    username: auth.currentUser.displayName,
                    uid: auth.currentUser.uid,
                  },
                  id: id,
                  createdAt: createdAt,
                  image: null,
                  content: text,
                  noOfLikes: 0,
                });
              }
              // setContent(text)
            }
            maxLength={150}
            multiline={true}
          />
        </View>

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </View>
      <TouchableOpacity
        style={styles.sendButton}
        activeOpacity={0.7}
        onPress={sendToDb}
      >
        <Text
          style={{
            fontFamily: "MontserratSemiBold",
            fontSize: 10,
            marginBottom: -10,
          }}
        >
          Posteaza
        </Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/images/send_icon.png")}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT,
  },
  mainContainer: {
    marginHorizontal: 10,
    marginTop: 30,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 33,
    fontFamily: "MontserratBold",
    color: colors.appDarkBlue,
    // alignSelf: "center",
  },
  inputContainer: {
    marginTop: 30,
    borderRadius: 15,
    height: 200,
    backgroundColor: colors.cardBlurBackground,
  },
  newPostInput: {
    color: colors.appDarkBlue,
    marginLeft: 21,
    marginRight: 21,
    paddingTop: 10,
    fontFamily: "MontserratSemiBold",
    fontSize: 21,
    height: "100%",
  },
  sendButton: {
    alignItems: "center",
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: colors.appNeonGreen,
    borderRadius: 20,
  },
});
