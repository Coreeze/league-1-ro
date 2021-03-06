import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Platform, StyleSheet, NativeModules } from "react-native";
import CommunitiesFeed from "../components/CommunitiesComponents/CommunitiesFeed";

import constants from "../constants/colors";
const { StatusBarManager } = NativeModules;

export default function CommunitiesScreen() {
  return (
    <LinearGradient
      colors={["#CEFF00", "#113b59"]}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 0.5, y: 0.7 }}
      locations={[0, 1]}
      style={styles.container}
    >
      <CommunitiesFeed />

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
    paddingVertical: 25,
    fontSize: 18,
    color: "#1C374A",
  },
});
