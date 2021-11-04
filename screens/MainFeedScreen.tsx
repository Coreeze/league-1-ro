import React, { Component, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";

// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Standings from "../components/StandingsComponent";
import * as rssParser from "react-native-rss-parser";
import { getStatusBarHeight } from "react-native-status-bar-height";
import ShortNewsComponent from "../components/ShortNewsComponent";
// import styles from "../components/StandingsComponent/stlyes";

export default function MainFeedScreen({
  navigation,
}: RootTabScreenProps<"MainFeed">) {
  const [shouldFetch, setShouldFetch] = useState(true);

  return (
    <LinearGradient
      colors={["#0E1C26", "#294861"]}
      start={{ x: 0.4, y: 0.5 }}
      end={{ x: 0.4, y: 1 }}
      locations={[0, 1]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollview}>
        <Image
          style={{
            position: "absolute",
            width: "100%",
            height: 100,
          }}
          source={require("../assets/images/header6.png")}
          resizeMode="contain"
        />
        <Standings />
        <ShortNewsComponent />

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text>Statistici detaliate</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

function handlePress() {
  fetch("https://news.google.com/rss/search?q=fotbal&hl=ro&gl=RO&ceid=RO%3Aro")
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
      // console.log(rss);
      // console.log(rss.title);
      // console.log(rss.item);
      console.log(rss.items[0]);
    });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: getStatusBarHeight(),
  },
  scrollview: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    marginTop: 10,
    backgroundColor: "cyan",
    width: 200,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
