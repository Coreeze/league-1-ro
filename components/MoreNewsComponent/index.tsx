import { LinearGradient } from "expo-linear-gradient";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";
import AppLoading from "expo-app-loading";

// @ts-ignore
import RNUrlPreview from "react-native-url-preview";
import * as rssParser from "react-native-rss-parser";
import useFonts from "../../useFonts";
import styles from "./styles";

const MoreNewsComponent = ({ route }: any) => {
  if (route.params.feed != []) {
    var randomArr = [];
    while (randomArr.length < 20) {
      var r = Math.floor(Math.random() * 100);
      if (randomArr.indexOf(r) === -1) randomArr.push(r);
    }
  }

  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <LinearGradient
      colors={["#CEFF00", "#0E1C26"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.4, y: 1 }}
      locations={[0, 1]}
      style={styles.container}
    >
      <ScrollView style={styles.container2}>
        <LinearGradient
          colors={["#ff4778", "#CEFF00"]}
          start={{ x: 0.3, y: 0.9 }}
          end={{ x: 0.8, y: 1.0 }}
          locations={[0.6, 1]}
          style={{ width: "90%", height: 4, alignSelf: "center" }}
        ></LinearGradient>
        {/* <Text style={styles.title}>{props.title}</Text> */}
        {
          // @ts-ignore
          route?.params?.feed ? (
            // @ts-ignore
            randomArr.map((randomNo: number, i: number) => (
              <RNUrlPreview
                key={i}
                // @ts-ignore
                text={route.params.feed[randomNo]?.links[0].url}
                titleStyle={{
                  fontFamily: "MontserratBold",
                  color: "#1C374A",
                  fontSize: 16,
                }}
                descriptionStyle={{
                  fontFamily: "MontserratSemiBold",
                  fontSize: 13,
                  color: "#42759E",
                }}
                descriptionNumberOfLines={2}
                containerStyle={{ backgroundColor: "#fff" }}
              />
            ))
          ) : (
            <RNUrlPreview
              key={1}
              // @ts-ignore
              text={route.params.feed[0]?.links[0].url}
              titleStyle={{ fontFamily: "MontserratBold", color: "#1C374A" }}
              descriptionStyle={{
                fontFamily: "MontserratSemiBold",
                fontSize: 12,
                color: "#42759E",
              }}
              descriptionNumberOfLines={2}
            />
          )
        }
      </ScrollView>
    </LinearGradient>
  );
};

export default MoreNewsComponent;
