import React from "react";
import { Text, View } from "react-native";
import TimeAgo from "react-native-timeago";

import { sizes } from "../../../../constants/sizes";
import ProfilePicture from "../../ProfilePicture";
import styles from "./styles";

export type PictureContainerProps = {
  image: string;
  user: any;
  fan: string;
  date: any;
};

const PictureContainer = ({
  image,
  user,
  fan,
  date,
}: PictureContainerProps) => {
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
            <TimeAgo time={date} />
          </Text>
        </View>
      </View>
    </View>
  );
};

const optionsStyles = {
  optionsContainer: {
    width: "100%",
    paddingTop: 5,
  },
  optionsWrapper: {},
  optionWrapper: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    padding: 5,
  },
  optionTouchable: {
    activeOpacity: 70,
  },
  optionText: {},
};

export default PictureContainer;
