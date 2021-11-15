import { Feather } from "@expo/vector-icons";
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
import { DataTable } from "react-native-paper";
import ShortNewsComponent from "../components/ShortNewsComponent";
import styles from "../components/ShortStandingsComponent/stlyes";

import { teamDetailsScreen } from "./styles";

export default function TeamDetails({ route }: any) {
  const id = route?.params?.team?.id;

  const [team, setTeam] = useState([]);
  const [teamStats, setTeamStats] = useState([]);
  const [squad, setSquad] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);

  const [showPlayers, setShowPlayers] = useState(false);

  if (shouldFetch) {
    setShouldFetch(false);
    getTeamDetails();
    getTeamStatistics();
    getPlayers();
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
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function getPlayers() {
    fetch("https://v3.football.api-sports.io/players/squads?team=" + id, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "ed6904705c97fe6a528acacb4a32511b",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Fetch team players");
        setSquad(json.response[0].players);
        // console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.log(squad[0]);

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
            uri: team.team?.logo,
          }}
          style={teamDetailsScreen.logo}
        />
        <View style={teamDetailsScreen.stadionContainer}>
          <TouchableOpacity>
            <Text style={teamDetailsScreen.title}>{team.team?.name}</Text>
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
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            showPlayers == true ? setShowPlayers(false) : setShowPlayers(true);
          }}
          style={teamDetailsScreen.playersContainer}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 9,
            }}
          >
            <Text style={teamDetailsScreen.gamesText}>Jucători</Text>
            <Feather name="arrow-down" size={24} color="#1C374A" />
          </View>
          {showPlayers
            ? squad.map((player, i) => (
                <View key={player.name} style={teamDetailsScreen.playerCard}>
                  <Image
                    source={{
                      uri: player.photo,
                    }}
                    style={teamDetailsScreen.playerPhoto}
                  />
                  <View style={teamDetailsScreen.playerDescription}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontFamily: "MontserratBold",
                        color: "#1C374A",
                      }}
                    >
                      {player.name}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={teamDetailsScreen.playerText}>
                        Nr. {player.number}
                      </Text>
                      <Text style={teamDetailsScreen.playerText}>
                        {player.position}
                      </Text>
                      <Text style={teamDetailsScreen.playerText}>
                        {player.age} ani
                      </Text>
                    </View>
                  </View>
                </View>
              ))
            : null}
        </TouchableOpacity>
        <View style={teamDetailsScreen.formContainer}>
          <Text style={teamDetailsScreen.teamForm}>Formă</Text>
          <ScrollView style={{ flexDirection: "row" }} horizontal={true}>
            {teamStats.response?.form.split("").map((result: any, i: any) => (
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
        <View style={teamDetailsScreen.gamesContainer}>
          <Text style={teamDetailsScreen.gamesText}>Meciuri</Text>
          <DataTable style={{ paddingHorizontal: 15, alignContent: "center" }}>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title style={{ flex: 2 }}>
                <Text style={styles.titleText}>M. câștigate</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={styles.titleText}>C</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={styles.titleText}>P</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={styles.titleText}>R</Text>
              </DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell style={{ flex: 2 }}>
                <Text style={styles.tableText}>Acasă</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableText}>
                  {teamStats.response?.fixtures.wins.home}
                </Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableText}>
                  {teamStats.response?.fixtures.loses.home}
                </Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableText}>
                  {teamStats.response?.fixtures.draws.home}
                </Text>
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell style={{ flex: 2 }}>
                <Text style={styles.tableText}>În deplasare</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableText}>
                  {teamStats.response?.fixtures.wins.away}
                </Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableText}>
                  {teamStats.response?.fixtures.loses.away}
                </Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableText}>
                  {teamStats.response?.fixtures.draws.away}
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>

          <DataTable style={{ marginTop: 25, paddingHorizontal: 15 }}>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title style={{ flex: 2 }}>
                <Text style={styles.titleText}>M. jucate</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={styles.titleText}>Acasă</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={styles.titleText}>În dep.</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={styles.titleText}>Total</Text>
              </DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell style={{ flex: 2 }}>
                <Text style={styles.tableText}>Acasă</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableText}>
                  {teamStats.response?.fixtures.played.home}
                </Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableText}>
                  {teamStats.response?.fixtures.played.away}
                </Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableText}>
                  {teamStats.response?.fixtures.played.total}
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
        {teamStats.response?.lineups ? (
          <View style={teamDetailsScreen.formationContainer}>
            <Text style={teamDetailsScreen.gamesText}>Formații</Text>
            <DataTable style={{ paddingHorizontal: 15 }}>
              <DataTable.Header
                style={{
                  backgroundColor: "lightgrey",
                  borderRadius: 9,
                  paddingLeft: 40,
                  // alignSelf: "center",
                  // justifyContent: "center",
                }}
              >
                <DataTable.Title style={{ flex: 1 }}>
                  <Text style={styles.titleText}>Formație</Text>
                </DataTable.Title>
                <DataTable.Title>
                  <Text style={styles.titleText}>Meciuri jucate</Text>
                </DataTable.Title>
              </DataTable.Header>
              {teamStats.response?.lineups.map((lineup: any, i: number) => (
                <View>
                  <DataTable.Row>
                    <DataTable.Cell style={{ flex: 2, paddingLeft: 40 }}>
                      <Text style={styles.tableText}>{lineup.formation}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell>
                      <Text style={styles.tableText}>{lineup.played}</Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                </View>
              ))}
            </DataTable>
          </View>
        ) : null}

        {team.team?.name ? (
          <ShortNewsComponent
            keyWords={team.team.name}
            title={"Știri despre " + team.team.name}
          />
        ) : null}
      </ScrollView>
    </LinearGradient>
  );
}
