import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import colors from "../../../../constants/colors";

export type FooterProps = {
  numberOfLikes: number;
};

const Footer = ({ numberOfLikes }: FooterProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingTop: 10,
      }}
    >
      <FontAwesome name="soccer-ball-o" size={24} color={colors.appDarkBlue} />
      <Text style={{ marginLeft: 5 }}>{numberOfLikes}</Text>
    </TouchableOpacity>
  );
};

export default Footer;
