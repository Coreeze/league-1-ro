import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
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
  ActivityIndicator,
} from "react-native";
import { DataTable } from "react-native-paper";
import ShortNewsComponent from "../components/ShortNewsComponent";
import styles from "../components/ShortStandingsComponent/stlyes";
import colors from "../constants/colors";

import { teamDetailsScreen } from "./styles";

export default function TeamDetails({ route }: any) {
  const id = route?.params?.team?.id;

  const navigation = useNavigation();

  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const [team, setTeam] = useState([]);
  const [teamStats, setTeamStats] = useState([]);

  const [shouldFetch, setShouldFetch] = useState(true);

  const [showPlayers, setShowPlayers] = useState(false);

  if (shouldFetch) {
    setShouldFetch(false);
    getTeamDetails();
    getTeamStatistics();
  }

  function getTeamDetails() {
    setLoading1(true);
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
        setLoading1(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getTeamStatistics() {
    setLoading1(true);
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
        setLoading1(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function showPlayersList() {
    // @ts-ignore: Unreachable code error
    navigation.navigate("PlayersList", { teamId: id });
  }

  // console.log(squad[0]);

  return (
    <LinearGradient
      colors={["#113b59", "#CEFF00"]}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 0.5, y: 0.7 }}
      locations={[0, 1]}
      style={teamDetailsScreen.container}
    >
      <LinearGradient
        colors={["#ff4778", "#CEFF00"]}
        start={{ x: 0.3, y: 0.9 }}
        end={{ x: 0.8, y: 1.0 }}
        locations={[0.6, 1]}
        style={{ width: "100%", height: 4, alignSelf: "center" }}
      ></LinearGradient>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        {loading1 ? (
          <ActivityIndicator size="large" color={colors.appNeonGreen} />
        ) : (
          <>
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
          </>
        )}
        {loading1 ? (
          <ActivityIndicator size="large" color={colors.appNeonGreen} />
        ) : (
          <View style={teamDetailsScreen.stadionContainer}>
            <LinearGradient
              colors={["#ff4778", "#CEFF00"]}
              start={{ x: 0.3, y: 0.9 }}
              end={{ x: 0.8, y: 1.0 }}
              locations={[0.6, 1]}
              style={{ width: "90%", height: 4 }}
            ></LinearGradient>
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
                  Fondat ??n anul {team.team?.founded}
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
        )}
        <Text style={teamDetailsScreen.statsTitle}>
          Statistici - Sezon {teamStats.parameters?.season}
        </Text>

        {loading2 ? (
          <ActivityIndicator size="large" color={colors.appDarkBlue} />
        ) : (
          <>
            <TouchableOpacity
              style={teamDetailsScreen.playersListContainer}
              onPress={showPlayersList}
              activeOpacity={0.8}
            >
              <Text style={teamDetailsScreen.playersListText}>Jucatori</Text>
              <FontAwesome5 name="arrow-right" size={18} color="#1C374A" />
            </TouchableOpacity>
            <View style={teamDetailsScreen.formContainer}>
              <Text style={teamDetailsScreen.teamForm}>Form??</Text>
              <ScrollView style={{ flexDirection: "row" }} horizontal={true}>
                {teamStats.response?.form
                  .split("")
                  .map((result: any, i: any) => (
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
              <DataTable
                style={{ paddingHorizontal: 15, alignContent: "center" }}
              >
                <DataTable.Header style={styles.tableHeader}>
                  <DataTable.Title style={{ flex: 2 }}>
                    <Text style={styles.titleText}>M. c????tigate</Text>
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
                    <Text style={styles.tableText}>Acas??</Text>
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
                    <Text style={styles.tableText}>??n deplasare</Text>
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
                    <Text style={styles.titleText}>Meciuri</Text>
                  </DataTable.Title>
                  <DataTable.Title>
                    <Text style={styles.titleText}>Acas??</Text>
                  </DataTable.Title>
                  <DataTable.Title>
                    <Text style={styles.titleText}>??n dep.</Text>
                  </DataTable.Title>
                  <DataTable.Title>
                    <Text style={styles.titleText}>Total</Text>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row style={{ borderBottomWidth: 0 }}>
                  <DataTable.Cell style={{ flex: 2 }}>
                    <Text style={styles.tableText}>M. jucate</Text>
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
                <Text style={teamDetailsScreen.gamesText}>Forma??ii</Text>
                <DataTable style={{ paddingHorizontal: 15 }}>
                  <DataTable.Header
                    style={{
                      backgroundColor: "white",
                      borderRadius: 9,
                      paddingLeft: 40,
                      borderBottomWidth: 0,
                    }}
                  >
                    <DataTable.Title style={{ flex: 1 }}>
                      <Text style={styles.titleText}>Forma??ie</Text>
                    </DataTable.Title>
                    <DataTable.Title>
                      <Text style={styles.titleText}>Meciuri jucate</Text>
                    </DataTable.Title>
                  </DataTable.Header>
                  {teamStats.response?.lineups.map((lineup: any, i: number) => (
                    <View key={lineup.formation}>
                      <DataTable.Row>
                        <DataTable.Cell style={{ flex: 2, paddingLeft: 40 }}>
                          <Text style={styles.tableText}>
                            {lineup.formation}
                          </Text>
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
                title={"??tiri despre " + team.team.name}
              />
            ) : null}
          </>
        )}
      </ScrollView>
    </LinearGradient>
  );
}
