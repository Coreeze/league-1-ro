import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Text, ScrollView, View } from "react-native";
import { DataTable, Avatar } from "react-native-paper";

import styles from "./styles";

export type StandingsProps = {
  fullStandings: Array<any>;
  route: any;
  navigation: undefined;
};

const FullStandings = ({ route, navigation }: StandingsProps) => {
  const { standings } = route.params;

  const [showLatestForm, setShowLatestForm] = useState(null);

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
            <View>
              <DataTable.Row
                style={styles.row}
                key={i}
                onPress={() => {
                  setShowLatestForm(i === showLatestForm ? null : i);
                }}
              >
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
              {i === showLatestForm && (
                <View
                  style={{
                    borderColor: "lightgrey",
                    borderBottomWidth: 2,
                    // flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "lightgrey",
                  }}
                  key={team.form + team.points}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    {/* <Text>Meciuri jucate</Text> */}
                    <Text style={styles.accordionText}>
                      Meciuri - {team.all.played}
                    </Text>
                    <Text style={styles.accordionText}>|</Text>
                    <Text style={styles.accordionText}>
                      Castigate - {team.all.win}
                    </Text>
                    <Text style={styles.accordionText}>|</Text>
                    <Text style={styles.accordionText}>
                      Pierdute - {team.all.lose}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      borderColor: "white",
                      borderBottomWidth: 1,
                      borderTopWidth: 1,
                    }}
                  >
                    <Text style={styles.accordionText}>
                      Goluri marcate - {team.all.goals.for}
                    </Text>
                    <Text style={styles.accordionText}>|</Text>
                    <Text style={styles.accordionText}>
                      Goluri primite - {team.all.goals.against}
                    </Text>
                  </View>

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        fontFamily: "MontserratSemiBold",
                        color: "#1C374A",
                        fontSize: 13,
                        padding: 5,
                      }}
                    >
                      Formă
                    </Text>
                    {team.form.split("").map((result: any, i: number) => (
                      <Text
                        style={{
                          backgroundColor:
                            result == "W"
                              ? "#CEFF00"
                              : result == "D"
                              ? "grey"
                              : "#ff4778",
                          borderRadius: 5,
                          padding: 5,
                          margin: 5,
                          fontFamily: "MontserratSemiBold",
                          color: "#1e4b6b",
                          fontSize: 13,
                        }}
                      >
                        {result}
                      </Text>
                    ))}
                  </View>
                </View>
              )}
            </View>
          ))}
        </DataTable>
      </ScrollView>
    </LinearGradient>
  );
};

export default FullStandings;
