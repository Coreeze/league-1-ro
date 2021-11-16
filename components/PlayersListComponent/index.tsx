import { LinearGradient } from "expo-linear-gradient";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Image,
} from "react-native";
import AppLoading from "expo-app-loading";

// @ts-ignore
import RNUrlPreview from "react-native-url-preview";
import * as rssParser from "react-native-rss-parser";
import useFonts from "../../useFonts";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

const PlayersListComponent = ({ route }: any) => {
  const [shouldFetch, setShouldFetch] = useState(true);
  const [squad, setSquad] = useState([]);

  const teamId = route.params.teamId;
  console.log(teamId);

  if (shouldFetch) {
    setShouldFetch(false);
    getPlayers();
  }

  function getPlayers() {
    fetch("https://v3.football.api-sports.io/players/squads?team=" + teamId, {
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
  return (
    <ScrollView>
      <LinearGradient
        colors={["#0E1C26", "#CEFF00"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.4, y: 1 }}
        locations={[0, 1]}
        style={{
          flex: 1,
        }}
      >
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 9,
            }}
          >
            <Text style={styles.gamesText}>Jucători</Text>
          </View>
          {squad.map((player: any, i) => (
            <View key={player.name} style={styles.playerCard}>
              <Image
                source={{
                  uri: player.photo,
                }}
                style={styles.playerPhoto}
              />
              <View style={styles.playerDescription}>
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
                  <Text style={styles.playerText}>Nr. {player.number}</Text>
                  <Text style={styles.playerText}>{player.position}</Text>
                  <Text style={styles.playerText}>{player.age} ani</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default PlayersListComponent;
