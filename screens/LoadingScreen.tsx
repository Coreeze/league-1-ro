import React from "react";
import { ActivityIndicator, ImageBackground, View } from "react-native";
import colors from "../constants/colors";

const LoadingScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/images/splash1.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <ActivityIndicator size="large" color={colors.appNeonGreen} />
    </ImageBackground>
  );
};

export default LoadingScreen;
