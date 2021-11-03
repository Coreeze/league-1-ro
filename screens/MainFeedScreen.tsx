import React, { Component, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Standings from "../components/StandingsComponent";

export default function MainFeedScreen({
  navigation,
}: RootTabScreenProps<"MainFeed">) {
  const [standings, setStandings] = useState([]);

  const [shouldFetch, setShouldFetch] = useState(true);

  if (shouldFetch) {
    getStandtings(setStandings);
    setShouldFetch(false);
  }

  return (
    <LinearGradient
      colors={["#0E1C26", "#294861"]}
      start={{ x: 0.4, y: 0.7 }}
      end={{ x: 0.5, y: 1 }}
      locations={[0, 1]}
      style={styles.container}
    >
      <Standings standings={standings} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("FullStandings")}
      >
        <Text>Statistici detaliate</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

function getStandtings(setStandings: {
  (value: React.SetStateAction<never[]>): void;
  (arg0: any): void;
}) {
  fetch("https://v3.football.api-sports.io/standings?league=283&season=2021", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "ed6904705c97fe6a528acacb4a32511b",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log("Fetching");
      let fetchLeague = json.response[0].league;
      let fetchStandings = fetchLeague.standings[0];
      setStandings(fetchStandings);
      // TODO: add check for what happens when api requests are full
    })
    .catch((err) => {
      console.log(err);
    });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "cyan",
    width: 200,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
