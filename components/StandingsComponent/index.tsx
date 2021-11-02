import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DataTable, Avatar } from "react-native-paper";
import styles from "./stlyes";

export type StandingsProps = {
  standings: Array<any>;
};

const Standings = ({ standings }: StandingsProps) => {
  const topFiveStandings = standings.slice(0, 5);
  const navigation = useNavigation();

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
          <DataTable.Title>Poz</DataTable.Title>
          <DataTable.Title style={styles.club}>Club</DataTable.Title>
          <DataTable.Title>MJ</DataTable.Title>
          <DataTable.Title>G</DataTable.Title>
          <DataTable.Title>Pct</DataTable.Title>
        </DataTable.Header>

        {topFiveStandings.map((team, i) => (
          <DataTable.Row style={styles.row} key={i}>
            <DataTable.Cell>{team.rank}</DataTable.Cell>
            <DataTable.Cell style={styles.club}>
              {team.team.name}
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
