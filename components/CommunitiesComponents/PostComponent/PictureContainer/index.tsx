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
};

const PictureContainer = ({ image, user }: PictureContainerProps) => {
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
              {user.description}
            </Text>
          </View>
          <Text
            style={{ color: "grey", marginRight: 10, fontSize: sizes.textSize }}
          >
            acum 15s
          </Text>
        </View>
      </View>
      <View style={{ position: "absolute", right: 0 }}>
        <TouchableOpacity activeOpacity={0.8}>
          <Menu renderer={renderers.SlideInMenu}>
            <MenuTrigger
              children={
                <Entypo name="dots-three-vertical" size={20} color="grey" />
              }
            />
            <MenuOptions customStyles={optionsStyles}>
              <MenuOption
                onSelect={() => alert(`Editeaza postarea`)}
                children={
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <EvilIcons name="pencil" size={28} color="black" />
                    <Text style={{ paddingLeft: 10, fontSize: 20 }}>
                      Editeaza postarea
                    </Text>
                  </View>
                }
              />
              <MenuOption
                onSelect={() => alert(`Urmareste`)}
                children={
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <AntDesign name="deleteuser" size={24} color="black" />
                    <Text style={{ paddingLeft: 14, fontSize: 20 }}>
                      Urmareste utiliatorul
                    </Text>
                  </View>
                }
              />
              <MenuOption
                onSelect={() => alert(`Sterge postarea`)}
                children={
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="logout"
                      size={20}
                      color="red"
                    />
                    <Text
                      style={{ color: "red", paddingLeft: 19, fontSize: 20 }}
                    >
                      Sterge postarea
                    </Text>
                  </View>
                }
              />
            </MenuOptions>
          </Menu>
        </TouchableOpacity>
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
