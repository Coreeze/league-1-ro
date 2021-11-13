import React, { Component, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import ShortStandingsComponent from "../components/ShortStandingsComponent";
import * as rssParser from "react-native-rss-parser";
import { getStatusBarHeight } from "react-native-status-bar-height";
import ShortNewsComponent from "../components/ShortNewsComponent";
import NewsOfTheDayComponent from "../components/NewsOfTheDayComponent";
import FixturesComponent from "../components/FixturesComponent";
// import styles from "../components/StandingsComponent/stlyes";

export default function MainFeedScreen({
  navigation,
}: RootTabScreenProps<"MainFeed">) {
  const [shouldFetch, setShouldFetch] = useState(true);

  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;

  function fetchTest() {
    fetch("https://v3.football.api-sports.io/teams?id=2603", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "ed6904705c97fe6a528acacb4a32511b",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("fetchTest");
        console.log(json);
        // let fetchLeague = json.response[0].league;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <LinearGradient
      colors={["#CEFF00", "#0E1C26"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.4, y: 1 }}
      locations={[0, 1]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollview}>
        <Image
          style={{
            position: "relative",
            width: "100%",
            height: 100,
          }}
          source={require("../assets/images/header11.png")}
          resizeMode="cover"
        />
        {/* <TouchableOpacity onPress={fetchTest}>
          <Text>BUTTON</Text>
        </TouchableOpacity> */}
        <NewsOfTheDayComponent />
        <FixturesComponent />
        <ShortStandingsComponent />
        <ShortNewsComponent />

        {/* <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text>Statistici detaliate</Text>
        </TouchableOpacity> */}
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
