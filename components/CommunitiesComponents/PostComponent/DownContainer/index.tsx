import React from "react";
import { View, Text, Image } from "react-native";

// import { UserType } from "../../../types";
import styles from "./styles";
import { sizes } from "../../../../constants/sizes";

export type DownContainerProps = {
  content: string;
  image: string | undefined;
};

const DownContainer = ({ content, image }: DownContainerProps) => (
  <View>
    <Text style={{ fontSize: sizes.textSize }}>{content}</Text>
    {/* {!!image && <Image style={styles.image} source={{ uri: image }} />} */}
  </View>
);

export default DownContainer;
