import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import {
  NativeModules,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import useFonts from "../useFonts";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import colors from "../constants/colors";
import AppLoading from "expo-app-loading";

const { StatusBarManager } = NativeModules;

export default function NewPostScreen({ navigation }: any) {
  const refInput = useRef(null);

  // const [IsReady, SetIsReady] = useState(false);
  // const LoadFonts = async () => {
  //   await useFonts();
  // };
  // if (!IsReady) {
  //   return (
  //     <AppLoading
  //       startAsync={LoadFonts}
  //       onFinish={() => SetIsReady(true)}
  //       onError={() => {}}
  //     />
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
          />
        </View>

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </View>
      <TouchableOpacity style={styles.sendButton} activeOpacity={0.7}>
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
    height: 60,
    justifyContent: "center",
    // width: "100%",
    // paddingHorizontal: 10,
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
  newPostInput: {
    marginLeft: 21,
    fontFamily: "MontserratSemiBold",
    width: "100%",
    fontSize: 21,
  },
});
