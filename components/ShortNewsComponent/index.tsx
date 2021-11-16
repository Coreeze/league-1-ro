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
import { useNavigation } from "@react-navigation/native";

const ShortNewsComponent = ({ ...props }) => {
  const navigation = useNavigation();

  const [rssFeed, setRssFeed] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);
  var feed = [];
  let searchQuery = props.keyWords;

  if (shouldFetch) {
    if (searchQuery?.length > 1) {
      searchQuery = searchQuery.split(" ");
      searchQuery = searchQuery.join("%20");
    } else {
      searchQuery = props?.keyWords[0];
    }

    getFeed();
    setShouldFetch(false);
  }

  function showMoreNews() {
    rssFeed
      ? // @ts-ignore: Unreachable code error
        navigation.navigate("MoreNews", {
          feed: rssFeed,
        })
      : null;
  }

  function getFeed() {
    console.log("get news feed");
    fetch(
      "https://news.google.com/rss/search?q=" +
        searchQuery +
        "&hl=ro&gl=RO&ceid=RO%3Aro"
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
    var randomArr = [];
    while (randomArr.length < 4) {
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
    <View style={styles.container}>
      <LinearGradient
        colors={["#ff4778", "#CEFF00"]}
        start={{ x: 0.3, y: 0.9 }}
        end={{ x: 0.8, y: 1.0 }}
        locations={[0.6, 1]}
        style={{ width: "90%", height: 4, alignSelf: "center" }}
      ></LinearGradient>
      <View style={styles.container2}>
        <Text style={styles.title}>{props.title}</Text>
        {
          // @ts-ignore
          rssFeed[0]?.links[0]?.url ? (
            // @ts-ignore
            randomArr.map((randomNo: number, i: number) => (
              <RNUrlPreview
                key={i}
                // @ts-ignore
                text={rssFeed[randomNo]?.links[0].url}
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
                containerStyle={{ backgroundColor: "#ffffff" }}
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
        <View>
          <TouchableOpacity style={styles.button} onPress={showMoreNews}>
            <Text style={styles.details}>Mai multe stiri</Text>
            <FontAwesome5 name="arrow-right" size={12} color="#1C374A" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ShortNewsComponent;
