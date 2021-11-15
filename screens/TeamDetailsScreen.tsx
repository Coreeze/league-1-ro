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
import ShortNewsComponent from "../components/ShortNewsComponent";

import { teamDetailsScreen } from "./styles";

export default function TeamDetails({ route }: any) {
  const logo = route.params.team.logo;
  const name = route.params.team.name;
  const id = route.params.team.id;

  const [team, setTeam] = useState([]);
  const [teamStats, setTeamStats] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);

  if (shouldFetch) {
    setShouldFetch(false);
    getTeamDetails();
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
        // console.log(json);
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
        setTeamStats(json);
        console.log(teamStats.response.form);
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
            {team.team?.founded ? (
              <Text
                style={{
                  fontStyle: "italic",
                  fontWeight: "bold",
                  color: "#6d889c",
                  marginTop: -5,
                  marginBottom: 10,
                }}
              >
                Fondat în anul {team.team?.founded}
              </Text>
            ) : null}
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
        <Text style={teamDetailsScreen.statsTitle}>
          Statistici - Sezon {teamStats.parameters?.season}
        </Text>
        <View style={teamDetailsScreen.formContainer}>
          <Text style={teamDetailsScreen.teamForm}>Formă</Text>
          <ScrollView style={{ flexDirection: "row" }} horizontal={true}>
            {teamStats.response?.form
              .split("")
              .map((result: {} | null | undefined, i: any) => (
                <Text
                  key={Math.random()}
                  style={{
                    backgroundColor:
                      result == "W"
                        ? "#CEFF00"
                        : result == "D"
                        ? "grey"
                        : "#ff4778",
                    borderRadius: 5,
                    padding: 5,
                    marginRight: 9,
                    fontFamily: "MontserratSemiBold",
                    color: "#1e4b6b",
                    fontSize: 17,
                  }}
                >
                  {result}
                </Text>
              ))}
          </ScrollView>
        </View>
        <ShortNewsComponent keyWords={name} title={"Știri despre " + name} />
      </ScrollView>
    </LinearGradient>
  );
}
