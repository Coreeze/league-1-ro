import {
  AntDesign,
  Entypo,
  EvilIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
  renderers,
} from "react-native-popup-menu";
import { sizes } from "../../../../constants/sizes";

import { UserType } from "../../../../types";
import ProfilePicture from "../../ProfilePicture";
import styles from "./styles";

export type PictureContainerProps = {
  image: string;
  user: any;
  fan: string;
};

const PictureContainer = ({ image, user, fan }: PictureContainerProps) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <ProfilePicture image={image} />
        <View style={{ marginLeft: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontWeight: "bold",
                marginRight: 10,
                fontSize: sizes.textSize,
              }}
            >
              {user}
            </Text>

            <Text
              style={{
                color: "grey",
                marginRight: 10,
                fontSize: sizes.textSize,
              }}
            >
              Fan {fan}
            </Text>
          </View>
          <Text
            style={{ color: "grey", marginRight: 10, fontSize: sizes.textSize }}
          >
            acum 15s
          </Text>
        </View>
      </View>
    </View>
  );
};

const optionsStyles = {
  optionsContainer: {
    // backgroundColor: "green",
    width: "100%",
    paddingTop: 5,
  },
  optionsWrapper: {
    // backgroundColor: "purple",
  },
  optionWrapper: {
    paddingVertical: 10,
    // backgroundColor: "yellow",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    padding: 5,
  },
  optionTouchable: {
    // underlayColor: "gold",
    activeOpacity: 70,
  },
  optionText: {
    // color: "brown",
  },
};

export default PictureContainer;
