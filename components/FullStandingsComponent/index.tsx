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
      colors={["#113b59", "#CEFF00"]}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 0.5, y: 0.7 }}
      locations={[0, 1]}
      style={styles.container}
    >
      <LinearGradient
        colors={["#ff4778", "#CEFF00"]}
        start={{ x: 0.3, y: 0.9 }}
        end={{ x: 0.8, y: 1.0 }}
        locations={[0.6, 1]}
        style={{ width: "100%", height: 4, alignSelf: "center" }}
      ></LinearGradient>
      <ScrollView style={styles.table}>
        <DataTable style={{ paddingHorizontal: 3 }}>
          <Text style={styles.title}>Liga 1 Romania</Text>
          <DataTable.Header style={styles.header}>
            <DataTable.Title>
              <Text style={styles.titleText}>P</Text>
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
            <View key={i}>
              <DataTable.Row
                style={styles.row}
                onPress={() => {
                  // @ts-ignore
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
                    {team.team.name.length > 9
                      ? team.team.name.substring(0, 10) + "."
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
                  key={team.team.id}
                  style={{
                    // flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "rgba(255,255,255,0.5)",
                    paddingVertical: 3,
                    borderRadius: 15,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      borderBottomWidth: 1,
                      borderBottomColor: "white",
                      paddingVertical: 3,
                    }}
                  >
                    <Text style={styles.accordionText}>
                      Total M - {team.all.played}
                    </Text>
                    <Text style={styles.accordionText}>|</Text>
                    <Text style={styles.accordionText}>C - {team.all.win}</Text>
                    <Text style={styles.accordionText}>|</Text>
                    <Text style={styles.accordionText}>
                      P - {team.all.lose}
                    </Text>
                    <Text style={styles.accordionText}>|</Text>
                    <Text style={styles.accordionText}>
                      R - {team.all.draw}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      borderBottomColor: "white",
                      borderBottomWidth: 1,
                      paddingVertical: 3,
                    }}
                  >
                    <Text style={styles.accordionText}>
                      M acasa - {team.home.played}
                    </Text>
                    <Text style={styles.accordionText}>|</Text>
                    <Text style={styles.accordionText}>
                      C - {team.home.win}
                    </Text>
                    <Text style={styles.accordionText}>|</Text>
                    <Text style={styles.accordionText}>
                      P - {team.home.lose}
                    </Text>
                    <Text style={styles.accordionText}>|</Text>
                    <Text style={styles.accordionText}>
                      R - {team.home.draw}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      borderBottomColor: "white",
                      borderBottomWidth: 1,
                      paddingVertical: 3,
                    }}
                  >
                    <Text style={styles.accordionText}>
                      M depla. - {team.away.played}
                    </Text>
                    <Text style={styles.accordionText}>|</Text>
                    <Text style={styles.accordionText}>
                      C - {team.away.win}
                    </Text>
                    <Text style={styles.accordionText}>|</Text>
                    <Text style={styles.accordionText}>
                      P - {team.away.lose}
                    </Text>
                    <Text style={styles.accordionText}>|</Text>
                    <Text style={styles.accordionText}>
                      R - {team.away.draw}
                    </Text>
                  </View>
                  <View
                    style={{
                      paddingVertical: 3,
                      flexDirection: "row",
                      borderColor: "white",
                      borderBottomWidth: 1,
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
                        paddingVertical: 3,
                        fontFamily: "MontserratSemiBold",
                        color: "#1C374A",
                        fontSize: 15,
                        paddingHorizontal: 6,
                      }}
                    >
                      Formă
                    </Text>
                    {team.form.split("").map((result: any, i: number) => (
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
