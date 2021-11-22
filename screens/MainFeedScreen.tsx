import React, { Component, useEffect, useState } from "react";
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
import TeamsList from "../components/TeamsListComponent";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import colors from "../constants/colors";
import useFonts from "../useFonts";
import AppLoading from "expo-app-loading";
// import styles from "../components/StandingsComponent/stlyes";

export default function MainFeedScreen({
  navigation,
}: RootTabScreenProps<"MainFeed">) {
  const [user, setUser] = useState(null);

  const auth: any = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUser(auth.currentUser);
      console.log(user);
      const uid = user.uid;
    }
  });

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
    // TODO: add loading spinner for EVERYTHING
    <LinearGradient
      colors={["#113b59", "#CEFF00"]}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 0.5, y: 0.7 }}
      locations={[0, 1]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollview}>
        <Image
          style={{
            position: "absolute",
            width: "100%",
            height: 160,
          }}
          source={require("../assets/images/header18.png")}
          resizeMode="cover"
        />
        <Text
          style={{
            fontSize: 42,
            fontFamily: "MontserratBold",
            color: colors.appNeonGreen,
            paddingVertical: 15,
            paddingLeft: 20,
            textShadowColor: colors.appDarkBlue,
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 33,
          }}
        >
          Salutare
          {/* {
            // @ts-ignore
            user?.displayName?.split("|")[0]
          } */}
        </Text>
        {/* <TouchableOpacity onPress={fetchTest}>
          <Text>BUTTON</Text>
        </TouchableOpacity> */}
        <NewsOfTheDayComponent />
        <TeamsList />
        <FixturesComponent />
        <ShortStandingsComponent />
        <ShortNewsComponent keyWords={["fotbal"]} title={"Știri recente"} />

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
