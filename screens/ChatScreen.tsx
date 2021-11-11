// @refresh reset
import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  LogBox,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Dialog from "react-native-dialog";
import { StatusBar } from "expo-status-bar";

import { GiftedChat } from "react-native-gifted-chat";
import "firebase/compat/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as firebase from "firebase/compat";
import "firebase/firestore";
import { initializeApp } from "@firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDQKoZYTxpvE3aHPhop6buG0aYZXYv0IU",
  authDomain: "football-app-32bb9.firebaseapp.com",
  projectId: "football-app-32bb9",
  storageBucket: "football-app-32bb9.appspot.com",
  messagingSenderId: "632067557113",
  appId: "1:632067557113:web:dfabd8d2f45072ff8d0428",
  measurementId: "G-07RETPKL8Y",
};

LogBox.ignoreLogs(["Setting a timer"]);

// TODO: add adsupport, user tracking
if (firebase.apps.length == 0) {
  const app = initializeApp(firebaseConfig);
}

const db = getFirestore();
const chatsRef = query(collection(db, "chats"));

const ChatScreen = () => {
  const [state, setState] = useState({
    name: "",
    promptVisible: false,
    visible: true,
  });

  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    readUser();

    const unsubscribe = onSnapshot(chatsRef, (querySnapshot) => {
      const messagesFirestore = querySnapshot
        .docChanges()
        .filter(({ type }) => type === "added")
        .map(({ doc }) => {
          const message = doc.data();
          const _id = Math.random().toString(36).substring(7);
          console.log(message);
          return {
            text: message.m.text,
            createdAt: message.m.createdAt.toDate(),
            _id,
            user: message.m.user,
          };
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      appendMessages(messagesFirestore);
    });
    return () => unsubscribe();
  }, []);

  const appendMessages = useCallback(
    (messages) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
    },
    [messages]
  );

  async function readUser() {
    const user = await AsyncStorage.getItem("user");
    // console.log(user);
    if (user) {
      setUser(JSON.parse(user));
    }
  }

  async function handlePress() {
    const _id = Math.random().toString(36).substring(7);
    const user = { _id, name };
    await AsyncStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }

  async function handleSend(messages: any[]) {
    const writes = messages.map(
      async (m: any) => await addDoc(collection(db, "chats"), { m })
    );
    await Promise.all(writes);
  }

  const onSend = useCallback(
    async (messages = []) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );

      messages.map(async (m: any) => {
        console.log(m);
        await addDoc(collection(db, "chats"), { m });
      });
      // await Promise.all(writes);
    },
    [messages]
  );

  if (!user) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <Button onPress={handlePress} title="Enter the chat" />
      </View>
    );
  }

  const handleSubmit = () => {
    state.name.length > 3
      ? setState({ ...state, visible: false })
      : setState({ ...state, visible: true });
  };

  console.log(user);

  return (
    <GiftedChat
      messages={messages}
      renderUsernameOnMessage={true}
      user={user}
      onSend={handleSend}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  input: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    padding: 15,
    borderColor: "gray",
  },
  containerOld: {
    flex: 1,
    backgroundColor: "#F4F5F7",
    // marginHorizontal: 10,
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#FFF",
    position: "absolute",
    left: -120,
    top: -20,
  },
  header: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#514E5A",
  },
  chatArea: {
    marginTop: 64,
    backgroundColor: "white",
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 15,
  },
});

export default ChatScreen;

// return (
//   <LinearGradient
//     colors={["#0E1C26", "#CEFF00"]}
//     start={{ x: 0.3, y: 0.3 }}
//     end={{ x: 0.5, y: 0.5 }}
//     locations={[0, 1]}
//     style={styles.container}
//   >
//     <View>
//       <Dialog.Container visible={state.visible}>
//         <Dialog.Title>Care este numele tau?</Dialog.Title>
//         <Dialog.Description>
//           Haide sa facem cunostinta si sa discutam!
//         </Dialog.Description>
//         <Dialog.Input
//           placeholder="Cum te cheama?"
//           onChangeText={(name) => {
//             setState({ ...state, name });
//           }}
//           value={state.name}
//         />
//         <Dialog.Button
//           label="Participa la discutie!"
//           onPress={handleSubmit}
//         />
//       </Dialog.Container>
//     </View>
//     {/* <View style={styles.circle} /> */}
//     <View style={styles.chatArea}>
//       <Text style={styles.header}>Salutare {state.name}</Text>
//       <TextInput
//         placeholder="Enter Username"
//         onChangeText={(name) => {
//           setState({ ...state, name });
//         }}
//         value={state.name}
//       ></TextInput>
//     </View>
//   </LinearGradient>
// );
