import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Platform, StyleSheet, TextInput } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function NewPostScreen({ navigation }) {
  const refInput = useRef(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      console.log("focus");
      Platform.OS === "ios"
        ? refInput.current.focus()
        : setTimeout(() => refInput.current.focus(), 40);
      // The screen is focused
      // Call any action
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <LinearGradient
      colors={["#CEFF00", "#113b59"]}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 0.5, y: 0.7 }}
      locations={[0, 1]}
      style={styles.container}
    >
      <Text style={styles.title}>Postare noua</Text>
      <TextInput
        // autoFocus={keyboardOpen}
        ref={refInput}
        placeholder={"Ce mai e nou...?"}
        style={styles.newPost}
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  newPost: {
    // backgroundColor: "red",
    // width: "100%",
    // marginHorizontal: 120,
    paddingHorizontal: 120,
  },
});
