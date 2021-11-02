import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { DataTable, Avatar } from "react-native-paper";

export type StandingsProps = {
  fullStandings: Array<any>;
  route: any;
  navigation: undefined;
};

const FullStandings = ({ route, navigation }: StandingsProps) => {
  const { standings } = route.params;
  // console.log(standings);

  return (
    <LinearGradient
      colors={["#4A9B7F", "#0A3431"]}
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 1.0, y: 1.0 }}
      locations={[0, 0.3]}
      style={styles.container}
    >
      <ScrollView>
        <Text style={styles.title}>Liga 1 Romania</Text>
        <DataTable style={styles.table}>
          <DataTable.Header style={styles.header}>
            <DataTable.Title>Poz</DataTable.Title>
            <DataTable.Title> </DataTable.Title>
            <DataTable.Title style={styles.club}>Club</DataTable.Title>
            <DataTable.Title>MJ</DataTable.Title>
            <DataTable.Title>G</DataTable.Title>
            <DataTable.Title>Pct</DataTable.Title>
          </DataTable.Header>

          {standings.map((team: Array<any>, i: number) => (
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
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 9,
    width: "100%",
  },
  table: {
    backgroundColor: "white",
    paddingVertical: 10,
  },
  title: {
    fontWeight: "bold",
    paddingVertical: 9,
    fontSize: 18,
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
  avatar: {
    backgroundColor: "white",
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

export default FullStandings;
