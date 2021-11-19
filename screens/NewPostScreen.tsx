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
} from "react-native";

import { Text, View } from "../components/Themed";
import colors from "../constants/colors";
import * as firebase from "firebase/compat";
import "firebase/firestore";
import { initializeApp } from "@firebase/app";
import { getFirestore, collection, query, addDoc } from "firebase/firestore";

LogBox.ignoreLogs(["Setting a timer"]);

const firebaseConfig = {
  apiKey: "AIzaSyDDQKoZYTxpvE3aHPhop6buG0aYZXYv0IU",
  authDomain: "football-app-32bb9.firebaseapp.com",
  projectId: "football-app-32bb9",
  storageBucket: "football-app-32bb9.appspot.com",
  messagingSenderId: "632067557113",
  appId: "1:632067557113:web:dfabd8d2f45072ff8d0428",
  measurementId: "G-07RETPKL8Y",
};

if (firebase.apps.length == 0) {
  const app = initializeApp(firebaseConfig);
}

const db = getFirestore();

const { StatusBarManager } = NativeModules;

export default function NewPostScreen({ navigation }: any) {
  const refInput = useRef(null);

  // const [state, setState] = useState({
  //   name: "",
  //   promptVisible: false,
  //   visible: true,
  // });
  const [user, setUser] = useState("Username");
  const [name, setName] = useState("");
  const [content, setContent] = useState(String);
  const [post, setPost] = useState({
    user: "",
    id: "",
    content: "",
    createdAt: Date,
    image: null,
  });

  // useEffect(() => {
  //   readUser();

  //   const unsubscribe = onSnapshot(chatsRef, (querySnapshot) => {
  //     const messagesFirestore = querySnapshot
  //       .docChanges()
  //       .filter(({ type }) => type === "added")
  //       .map(({ doc }) => {
  //         const message = doc.data();
  //         const _id = Math.random().toString(36).substring(7);
  //         // console.log(message);
  //         return {
  //           text: message.m.text,
  //           createdAt: message.m.createdAt.toDate(),
  //           _id,
  //           user: message.m.user,
  //         };
  //       })
  //       .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  //     // appendMessages(messagesFirestore);
  //   });
  //   return () => unsubscribe();
  // }, []);

  // const appendMessages = useCallback(
  //   (messages) => {
  //     setPostText((previousMessages) =>
  //       GiftedChat.append(previousMessages, messages)
  //     );
  //   },
  //   [messages]
  // );

  // async function readUser() {
  //   const user = await AsyncStorage.getItem("user");
  //   // console.log(user);
  //   if (user) {
  //     setUser(JSON.parse(user));
  //   }
  // }

  // async function handlePress() {
  //   const _id = Math.random().toString(36).substring(7);
  //   const user = { _id, name };
  //   await AsyncStorage.setItem("user", JSON.stringify(user));
  //   setUser(user);
  // }

  async function handleSend(post: any) {
    // console.log("postText: " + post);
    await addDoc(collection(db, "community"), { post });
    // const writes = messages.map(
    //   async (m: any) => await addDoc(collection(db, "community"), { m })
    // );
    // await Promise.all(writes);
  }

  // if (!user) {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         backgroundColor: "#fff",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         padding: 30,
  //       }}
  //     >
  //       <TextInput
  //         style={{
  //           height: 50,
  //           width: "100%",
  //           borderWidth: 1,
  //           padding: 15,
  //           borderColor: "gray",
  //         }}
  //         placeholder="Enter your name"
  //         value={name}
  //         onChangeText={setName}
  //       />
  //       <Button onPress={handlePress} title="Enter the chat" />
  //     </View>
  //   );
  // }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      console.log("focus");
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
    console.log("post");
    handleSend(post);
    setPost({
      user: "",
      id: "",
      content: "",
      createdAt: Date,
      image: null,
    });
  }

  return (
    <LinearGradient
      colors={["#CEFF00", "#113b59"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 0.7 }}
      locations={[0, 1]}
      style={styles.gradient}
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
                const createdAt = epoch(new Date());
                const id = createdAt + Math.random();

                setPost({
                  user: user,
                  id: id,
                  createdAt: createdAt,
                  image: null,
                  content: text,
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
    </LinearGradient>
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
    fontSize: 20,
    fontFamily: "MontserratBold",
    color: colors.appDarkBlue,
    alignSelf: "center",
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
