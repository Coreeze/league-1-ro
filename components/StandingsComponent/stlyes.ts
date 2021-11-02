import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 9,
    width: "100%",
    backgroundColor: "white",
  },
  title: {
    // fontWeight: "bold",
    paddingVertical: 9,
    fontSize: 18,
    fontFamily: "Radikal",
  },
  header: {
    backgroundColor: "lightgrey",
  },
  row: {
    borderColor: "grey",
    borderBottomWidth: 1,
  },
  club: {
    flex: 4,
  },
  avatar: {
    backgroundColor: "white",
  },
  teamName: {
    // fontWeight: "bold",
    fontFamily: "Radikal",
  },
  button: {
    flexDirection: "row",
    paddingVertical: 6,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  details: {
    paddingRight: 9,
    fontWeight: "bold",
    color: "grey",
  },
});

export default styles;
