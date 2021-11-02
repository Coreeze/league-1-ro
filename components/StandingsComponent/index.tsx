import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DataTable, Avatar } from "react-native-paper";

export type StandingsProps = {
  standings: Array<any>;
};

const Standings = ({ standings }: StandingsProps) => {
  const topFiveStandings = standings.slice(0, 5);
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", paddingVertical: 9 }}>
        Liga 1 Romania
      </Text>
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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.details}>Statistici detaliate</Text>
        <FontAwesome5 name="arrow-right" size={15} color="grey" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 9,
    width: "100%",
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "lightgrey",
  },
  row: {
    borderColor: "grey",
    borderBottomWidth: 1,
  },
  club: {
    flex: 3,
  },
  button: {
    flexDirection: "row",
    paddingVertical: 6,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  details: {
    paddingRight: 9,
    fontWeight: "bold",
    color: "grey",
  },
});

export default Standings;
