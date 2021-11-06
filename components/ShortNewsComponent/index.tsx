import { LinearGradient } from "expo-linear-gradient";
import React, { Component, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import AppLoading from "expo-app-loading";

// @ts-ignore
import RNUrlPreview from "react-native-url-preview";
import * as rssParser from "react-native-rss-parser";
import useFonts from "../../useFonts";
import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";

const ShortNewsComponent = () => {
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

  if (rssFeed != []) {
    // console.log("rssFeed: " + rssFeed);
    var randomArr = [];
    while (randomArr.length < 4) {
      var r = Math.floor(Math.random() * 100);
      if (randomArr.indexOf(r) === -1) randomArr.push(r);
      // @ts-ignore
      // console.log(r + " " + rssFeed[r].links[0].url);
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
    <View style={styles.container}>
      <LinearGradient
        colors={["#931F1D", "#465775"]}
        start={{ x: 0.3, y: 0.3 }}
        end={{ x: 0.5, y: 0.5 }}
        locations={[0, 1]}
        style={{ width: "100%", height: 6 }}
      ></LinearGradient>
      <View style={styles.container2}>
        <Text style={styles.title}>Știri recente</Text>
        {
          // @ts-ignore
          rssFeed[0]?.links[0]?.url ? (
            // @ts-ignore
            randomArr.map((randomNo: number, i: number) => (
              <RNUrlPreview
                key={i}
                // @ts-ignore
                text={rssFeed[randomNo]?.links[0].url}
                titleStyle={{ fontFamily: "MontserratBold", color: "#1C374A" }}
                descriptionStyle={{
                  fontFamily: "MontserratSemiBold",
                  fontSize: 12,
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
              text={rssFeed[0]?.links[0].url}
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.details}>Mai multe stiri</Text>
          <FontAwesome5 name="arrow-right" size={12} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShortNewsComponent;
