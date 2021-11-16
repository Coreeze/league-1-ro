import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { configureFonts } from "react-native-paper";
import useFonts from "../../../useFonts";

const TeamsListComponent = () => {
  const navigation = useNavigation();

  const [teams, setTeams] = useState(Array);
  const [shouldFetch, setShouldFetch] = useState(true);

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

  if (shouldFetch) {
    fetchTest();
    setShouldFetch(false);
  }

  function fetchTest() {
    fetch("https://v3.football.api-sports.io/teams?league=283&season=2021", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "ed6904705c97fe6a528acacb4a32511b",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("fetchTest");
        setTeams(json.response);
        // let fetchLeague = json.response[0].league;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function showTeamDetails(team: undefined) {
    // @ts-ignore: Unreachable code error
    navigation.navigate("TeamDetails", { team });
  }

  console.log(teams);

  return (
    <LinearGradient
      colors={["#0E1C26", "#CEFF00"]}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 0.5, y: 0.5 }}
      locations={[0, 1]}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ backgroundColor: "rgba(255,255,255,0)" }}>
        <LinearGradient
          colors={["#ff4778", "#CEFF00"]}
          start={{ x: 0.3, y: 0.9 }}
          end={{ x: 0.8, y: 1.0 }}
          locations={[0.6, 1]}
          style={{ width: "90%", height: 4, alignSelf: "center" }}
        ></LinearGradient>
        {teams.map((obj: any, i) => (
          <TouchableOpacity
            key={obj.team.name}
            style={styles.teamCard}
            activeOpacity={0.8}
            onPress={() => {
              showTeamDetails(obj.team);
            }}
          >
            <Image
              source={{
                uri: obj.team.logo,
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
                {obj.team.name}
              </Text>
              <Text style={styles.teamDescription}>{obj.venue.city}</Text>
              <Text style={styles.teamDescription}>{obj.venue.address}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "9%",
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    marginHorizontal: 9,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  gamesText: {
    fontFamily: "MontserratBold",
    fontSize: 20,
    color: "#1C374A",
    paddingLeft: 18,
    paddingRight: 12,
  },
  playerPhoto: {
    width: 50,
    height: 50,
  },
  teamCard: {
    flexDirection: "row",
    paddingLeft: 18,
    paddingTop: 10,
    paddingBottom: 6,
    backgroundColor: "rgba(255,255,255,0.5)",
    marginTop: 6,
    marginBottom: 6,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  playerDescription: {
    paddingLeft: 12,
  },
  teamDescription: {
    fontSize: 13,
    fontFamily: "MontserratSemiBold",
    color: "#36576e",
    paddingRight: 9,
  },
});

export default TeamsListComponent;
