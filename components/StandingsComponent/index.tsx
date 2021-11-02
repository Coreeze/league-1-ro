import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DataTable, Avatar } from "react-native-paper";
import AppLoading from "expo-app-loading";

import styles from "./stlyes";
import useFonts from "../../useFonts";

export type StandingsProps = {
  standings: Array<any>;
};

const Standings = ({ standings }: StandingsProps) => {
  const topFiveStandings = standings.slice(0, 5);
  const navigation = useNavigation();

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

  function showFullStandings(this: any) {
    // @ts-ignore: Unreachable code error
    navigation.navigate("FullStandings", {
      standings,
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liga 1 Romania</Text>
      <DataTable>
        <DataTable.Header style={styles.header}>
          <DataTable.Title>
            <Text style={{ fontFamily: "Radikal" }}>Poz</Text>
          </DataTable.Title>
          <DataTable.Title> </DataTable.Title>
          <DataTable.Title style={styles.club}>Club</DataTable.Title>
          <DataTable.Title>MJ</DataTable.Title>
          <DataTable.Title>G</DataTable.Title>
          <DataTable.Title>Pct</DataTable.Title>
        </DataTable.Header>

        {topFiveStandings.map((team, i) => (
          <DataTable.Row style={styles.row} key={i}>
            <DataTable.Cell>{team.rank}</DataTable.Cell>
            <DataTable.Cell>
              <Avatar.Image
                size={25}
                source={{ uri: team.team.logo }}
                style={styles.avatar}
              />
            </DataTable.Cell>
            <DataTable.Cell style={styles.club}>
              <Text style={styles.teamName}>{team.team.name}</Text>
            </DataTable.Cell>
            <DataTable.Cell>{team.all.played}</DataTable.Cell>
            <DataTable.Cell>
              {team.all.goals.for - team.all.goals.against}
            </DataTable.Cell>
            <DataTable.Cell>{team.points}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
      <TouchableOpacity style={styles.button} onPress={showFullStandings}>
        <Text style={styles.details}>Tabel complet</Text>
        <FontAwesome5 name="arrow-right" size={15} color="grey" />
      </TouchableOpacity>
    </View>
  );
};

export default Standings;
