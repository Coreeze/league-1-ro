import { LinearGradient } from "expo-linear-gradient";
import React, { Component, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import AppLoading from "expo-app-loading";

// @ts-ignore
import RNUrlPreview from "react-native-url-preview";
import * as rssParser from "react-native-rss-parser";
import useFonts from "../../useFonts";
// import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";

const NewsOfTheDayComponent = () => {
  const [rssFeed, setRssFeed] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);
  var feed = [];

  if (shouldFetch) {
    console.log("shouldFetch");
    getFeed();
    setShouldFetch(false);
  }

  function getFeed() {
    console.log("getFeed: " + shouldFetch);
    fetch(
      "https://news.google.com/rss/search?q=fotbal&hl=ro&gl=RO&ceid=RO%3Aro"
    )
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        let feedItems = rss.items;
        feed = feedItems;
        // @ts-ignore
        setRssFeed(rss?.items);
      });
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
    <View style={styles.container}>
      {
        // @ts-ignore
        rssFeed[0]?.links[0]?.url ? (
          <RNUrlPreview
            // @ts-ignore
            text={rssFeed[0]?.links[0].url}
            titleStyle={{ fontFamily: "MontserratBold", color: "#E2EBF3" }}
            descriptionStyle={{
              fontFamily: "MontserratSemiBold",
              fontSize: 12,
              color: "#8CB0CF",
            }}
            descriptionNumberOfLines={1}
            containerStyle={{
              backgroundColor: "rgba(52, 52, 52, 0)",
              flexDirection: "column",
            }}
            imageStyle={{
              width: "100%",
              height: 230,
              paddingHorizontal: 10,
              //   marginRight: 10,
            }}
          />
        ) : (
          <RNUrlPreview
            // @ts-ignore
            text={
              "https://www.digisport.ro/fotbal/euro-2021/am-construit-degeaba-stadioane-pentru-euro-2021-unde-ar-urma-sa-aiba-loc-competitia-si-ce-va-decide-uefa-1015077"
            }
            titleStyle={{ fontFamily: "MontserratBold", color: "#fff" }}
            descriptionStyle={{
              fontFamily: "MontserratSemiBold",
              fontSize: 12,
              color: "#fff",
            }}
            descriptionNumberOfLines={1}
            containerStyle={{
              backgroundColor: "rgba(52, 52, 52, 0)",
              flexDirection: "column",
            }}
            imageStyle={{
              width: "100%",
              height: 230,
              paddingHorizontal: 10,
              //   marginRight: 10,
            }}
          />
        )
      }
      <LinearGradient
        colors={["#465775", "#E2597D"]}
        start={{ x: 0.3, y: 0.3 }}
        end={{ x: 0.5, y: 0.5 }}
        locations={[0, 1]}
        style={{ width: "100%", height: 3 }}
      ></LinearGradient>
      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.details}>Mai multe stiri</Text>
        <FontAwesome5 name="arrow-right" size={12} color="grey" />
      </TouchableOpacity> */}
    </View>
  );
};

export default NewsOfTheDayComponent;
