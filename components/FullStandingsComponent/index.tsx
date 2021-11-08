import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, ScrollView } from "react-native";
import { DataTable, Avatar } from "react-native-paper";

import styles from "./styles";

export type StandingsProps = {
  fullStandings: Array<any>;
  route: any;
  navigation: undefined;
};

const FullStandings = ({ route, navigation }: StandingsProps) => {
  const { standings } = route.params;

  return (
    <LinearGradient
      colors={["#0E1C26", "#CEFF00"]}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 0.5, y: 0.5 }}
      locations={[0, 1]}
      style={styles.container}
    >
      <ScrollView style={styles.table}>
        <LinearGradient
          colors={["#ff4778", "#CEFF00"]}
          start={{ x: 0.3, y: 0.3 }}
          end={{ x: 0.5, y: 0.5 }}
          locations={[0, 1]}
          style={{ width: "90%", height: 4, alignSelf: "center" }}
        ></LinearGradient>
        <DataTable>
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
              <Text style={styles.titleText}>M</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={styles.titleText}>V</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={styles.titleText}>E</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={styles.titleText}>Î</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={styles.titleText}>G</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={styles.titleText}>Pct</Text>
            </DataTable.Title>
          </DataTable.Header>

          {standings.map((team: Object, i: number) => (
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
                  {team.team.name.length > 11
                    ? team.team.name.substring(0, 12) + "."
                    : team.team.name}
                </Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableText}>{team.all.played}</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableText}>{team.all.win}</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableText}>{team.all.draw}</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableText}>{team.all.lose}</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableText}>{team.goalsDiff}</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableText}>{team.points}</Text>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </LinearGradient>
  );
};

export default FullStandings;
