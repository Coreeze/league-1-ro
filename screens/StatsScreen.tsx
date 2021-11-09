import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  Accordion,
  Item,
} from "react-native-paper/lib/typescript/components/List/List";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function StatsScreen() {
  function getTopScorers() {
    fetch("https://football.elenasport.io/v2/seasons/:id/topscorers", {
      method: "GET",
      headers: {
        Authorization:
          "Basic MjdjYTR1ZDQyamZzdjA1Y28xNmM2OThpYzk6MXJhb2Joa3NmZGl2ZzQ5ZjAxZmZ0azAyaWpib3RkMm1nY282MDNjNzZzYWsxb3JsM3N2cw==",
        // "x-rapidapi-key": "ed6904705c97fe6a528acacb4a32511b",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Fetching");
        console.log(json);
        // let fetchLeague = json.response[0].league;
        // let fetchStandings = fetchLeague.standings[0];
        // setStandings(fetchStandings);
        // TODO: add check for what happens when api requests are full
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <LinearGradient
      colors={["#CEFF00", "#000"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.4, y: 1 }}
      locations={[0, 1]}
      style={styles.container}
    >
      <TouchableOpacity onPress={getTopScorers}>
        <Text>Statistici</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
