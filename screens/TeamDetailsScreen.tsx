import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { useState } from "react";
import {
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
  View,
} from "react-native";

import { teamDetailsScreen } from "./styles";

export default function TeamDetails({ route }: any) {
  const logo = route.params.team.logo;
  const name = route.params.team.name;
  const id = route.params.team.id;

  const [team, setTeam] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);

  if (shouldFetch) {
    getTeamDetails();
    setShouldFetch(false);
    getTeamStatistics();
  }

  function getTeamDetails() {
    fetch("https://v3.football.api-sports.io/teams?id=" + id, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "ed6904705c97fe6a528acacb4a32511b",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Fetch team details");
        setTeam(json?.response[0]);
        // let fetchLeague = json.response[0].league;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getTeamStatistics() {
    fetch(
      "https://v3.football.api-sports.io/teams/statistics?season=2021&team=" +
        id +
        "&league=283",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "ed6904705c97fe6a528acacb4a32511b",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("Fetch team stats");
        console.log(json);
        // setTeam(json);
        // let fetchLeague = json.response[0].league;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <LinearGradient
      colors={["#0E1C26", "#CEFF00"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.4, y: 1 }}
      locations={[0, 1]}
      style={teamDetailsScreen.container}
    >
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <Image
          style={teamDetailsScreen.stadionImg}
          source={{
            uri: team.venue?.image,
          }}
          resizeMode="cover"
        />

        <Image
          source={{
            uri: logo,
          }}
          style={teamDetailsScreen.logo}
        />
        <View style={teamDetailsScreen.stadionContainer}>
          <TouchableOpacity>
            <Text style={teamDetailsScreen.title}>{name}</Text>
          </TouchableOpacity>
          <Text style={teamDetailsScreen.stadionDescription}>
            {team.venue?.name}
          </Text>
          <Text style={teamDetailsScreen.stadionDescription}>
            {team.venue?.city}, {team.venue?.address}
          </Text>
          <Text style={teamDetailsScreen.stadionDescription}>
            Capacitate: {team.venue?.capacity} locuri
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "MontserratBold",
            color: "#1C374A",
            paddingVertical: 15,
            fontSize: 24,
            paddingLeft: 18,
          }}
        >
          Statistici
        </Text>
        <View>
          <Text>Stats go here</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
