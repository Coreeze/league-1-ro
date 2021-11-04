// @ts-nocheck
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DataTable, Avatar } from "react-native-paper";
import AppLoading from "expo-app-loading";

import styles from "./stlyes";
import useFonts from "../../useFonts";
import { LinearGradient } from "expo-linear-gradient";

export type StandingsProps = {
  standings2: Array<any>;
};

const ShortStandingsComponent = () => {
  const navigation = useNavigation();

  const [standings, setStandings] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);

  if (shouldFetch) {
    getStandtings();
    setShouldFetch(false);
  }
  const topFiveStandings = standings.slice(0, 5);

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

  function getStandtings() {
    fetch(
      "https://v3.football.api-sports.io/standings?league=283&season=2021",
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

  function showFullStandings(this: any) {
    // @ts-ignore: Unreachable code error
    navigation.navigate("FullStandings", {
      standings,
    });
  }

  return (
    <View style={styles.container}>
      <View></View>
      <LinearGradient
        colors={["#931F1D", "#465775"]}
        start={{ x: 0.3, y: 0.3 }}
        end={{ x: 0.5, y: 0.5 }}
        locations={[0, 1]}
        style={{ width: "100%", height: 6 }}
      ></LinearGradient>
      <DataTable style={{ paddingHorizontal: 9 }}>
        <Text style={styles.title}>Liga 1 Romania</Text>
        <DataTable.Header style={styles.header}>
          <DataTable.Title>
            <Text style={styles.titleText}>Poz</Text>
          </DataTable.Title>
          <DataTable.Title> </DataTable.Title>
          <DataTable.Title style={styles.club}>
            <Text style={styles.titleText}>Club</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={styles.titleText}>MJ</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={styles.titleText}>G</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={styles.titleText}>Pct</Text>
          </DataTable.Title>
        </DataTable.Header>

        {topFiveStandings.map((team, i) => (
          <DataTable.Row style={styles.row} key={i}>
            <DataTable.Cell>
              <Text style={styles.tableText}>{team.rank}</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Avatar.Image
                size={25}
                source={{ uri: team.team.logo }}
                style={styles.avatar}
              />
            </DataTable.Cell>
            <DataTable.Cell style={styles.club}>
              <Text style={styles.tableText}>
                {team.team.name.length > 18
                  ? team.team.name.substring(0, 18) + "."
                  : team.team.name}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text style={styles.tableText}>{team.all.played}</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text style={styles.tableText}>
                {team.all.goals.for - team.all.goals.against}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text style={styles.tableText}>{team.points}</Text>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
        <TouchableOpacity style={styles.button} onPress={showFullStandings}>
          <Text style={styles.details}>Tabel complet</Text>
          <FontAwesome5 name="arrow-right" size={12} color="grey" />
        </TouchableOpacity>
      </DataTable>
    </View>
  );
};

export default ShortStandingsComponent;
