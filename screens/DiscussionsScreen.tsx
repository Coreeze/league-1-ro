import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  Platform,
  StyleSheet,
  Image,
  NativeModules,
  TouchableOpacity,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import constants from "../constants/Colors";
const { StatusBarManager } = NativeModules;

export default function CommunitiesScreen() {
  const communities = [
    "fotbal international",
    "fotbal romanesc",
    "liga 1",
    "random",
    "discutii libere",
  ];

  return (
    <LinearGradient
      colors={["#CEFF00", "#113b59"]}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 0.5, y: 0.7 }}
      locations={[0, 1]}
      style={styles.container}
    >
      <Image
        style={{
          position: "relative",
          top: Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT,
          width: "100%",
          height: 100,
        }}
        source={require("../assets/images/header14.png")}
        resizeMode="cover"
      />
      {communities.map((community, i) => (
        <TouchableOpacity
          style={styles.communityContainer}
          key={community}
          activeOpacity={0.8}
        >
          <Text style={styles.communityText}>{community}</Text>
          <FontAwesome5 name="arrow-right" size={15} color="#1C374A" />
        </TouchableOpacity>
      ))}

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  communityContainer: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "flex-end",
    backgroundColor: constants.cardBlurBackground,
    top: "9%",
    marginHorizontal: 20,
    marginVertical: 3,
    borderRadius: 15,
  },
  communityText: {
    fontFamily: "MontserratBold",
    paddingLeft: 18,
    paddingRight: 18,
    paddingVertical: 15,
    fontSize: 18,
    color: "#1C374A",
  },
});
