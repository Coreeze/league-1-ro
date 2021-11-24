import { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../constants/colors";
import useFonts from "../../../useFonts";
import AppLoading from "expo-app-loading";
import React from "react";

const dimensions = Dimensions.get("window");
const imageWidth = dimensions.width;
const imageHeight = dimensions.height;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: colors.cardBlurBackground,
    marginHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 15,
    marginBottom: "20%",
  },
  container2: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 33,
    paddingBottom: 27,
    fontFamily: "MontserratBold",
    color: "#1C374A",
  },
  input: {
    overflow: "hidden",
    marginVertical: 4,
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "white",
    height: 50,
    borderWidth: 1,
    borderColor: "#e8e8e8",
  },
  loginContainer: {
    backgroundColor: colors.appNeonGreen,
    // alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    marginVertical: 4,
    // padding,
    // width: "30%",
  },
  loginText: {
    // backgroundColor: colors.appNeonGreen,
    fontSize: 18,
    fontFamily: "MontserratBold",
    color: "#1C374A",
  },
  signUpText: {
    fontSize: 18,
    fontFamily: "MontserratBold",
    color: colors.appNeonGreen,
  },
  signUpContainer: {
    backgroundColor: colors.appDarkBlue,
    // alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    marginVertical: 9,
    // padding,
    // width: "30%",
  },
});

export default styles;
