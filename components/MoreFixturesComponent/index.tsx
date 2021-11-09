import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { configureFonts } from "react-native-paper";
import useFonts from "../../useFonts";
import styles from "./styles";

const MoreFixturesComponent = () => {
  const [fixtures, setFixtures] = useState(Array);
  const [shouldGetFixtures, setShouldGetFixtures] = useState(true);

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
  getToday();
  getEndOfWeek();

  function getFixtures() {
    fetch(
      "https://v3.football.api-sports.io/fixtures?league=283&season=2021&from=" +
        getToday() +
        "&to=" +
        getEndOfWeek(),
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
        console.log("Fixtures fetched");
        var fixtObjs: any[] = [];
        json.response.map((fixture: any, i: any) => {
          var fixtureObject = [];
          fixtObjs.push({
            timestamp: fixture.fixture.timestamp,
            date: fixture.fixture.date,
            teams: fixture.teams,
          });
        });
        // console.log(fixtObjs);
        var sortedFix = fixtObjs.sort(function (x, y) {
          return x.timestamp - y.timestamp;
        });
        setFixtures(sortedFix);

        // TODO: add check for what happens when api requests are full
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (shouldGetFixtures) {
    getFixtures();
    setShouldGetFixtures(false);
  }
  // fixtures.map((obj, i) => console.log(obj));

  return (
    <LinearGradient
      colors={["#0E1C26", "#CEFF00"]}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 0.5, y: 0.5 }}
      locations={[0, 1]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollContainer}>
        <LinearGradient
          colors={["#ff4778", "#CEFF00"]}
          start={{ x: 0.3, y: 0.9 }}
          end={{ x: 0.8, y: 1.0 }}
          locations={[0.6, 1]}
          style={{ width: "90%", height: 4, alignSelf: "center" }}
        ></LinearGradient>
        <Text style={styles.title}>Meciuri în următoarele 21 de zile</Text>
        <Text style={styles.subTitle}>
          Data si ora acestor meciuri este posibil sa nu fie inca stabilite, iar
          acestea pot varia. Le vom aduce la curent pe masura ce se apropie.
          Vizualizare placuta!
        </Text>
        {fixtures.length != 0 ? (
          fixtures.map((fixture, i: number) => (
            <View style={styles.fixture} key={i}>
              <View style={styles.teamHome}>
                <Image
                  source={{
                    uri: fixture.teams.home.logo,
                  }}
                  style={styles.logoHome}
                />
                <Text style={styles.teamText}>
                  {fixture.teams.home.name.length > 9
                    ? fixture.teams.home.name.substring(0, 10) + "."
                    : fixture.teams.home.name}
                </Text>
              </View>
              <View style={styles.time}>
                <Text style={styles.timeText}>
                  {getFixtureDate(fixture.date)}
                </Text>
                <Text style={styles.timeText}>
                  {getFixtureHour(fixture.timestamp)}
                </Text>
              </View>
              <View style={styles.teamAway}>
                <Image
                  source={{
                    uri: fixture.teams.away.logo,
                  }}
                  style={styles.logoAway}
                />
                <Text style={styles.teamText}>
                  {fixture.teams.away.name.length > 9
                    ? fixture.teams.away.name.substring(0, 10) + "."
                    : fixture.teams.away.name}
                </Text>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.subTitle}>Nu sunt meciuri</Text>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

function showMoreFixtures() {
  console.log("show more fixtures");
}

function getFixtureHour(timestamp: number) {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString();
  const hour = humanDateFormat.slice(11, 16);

  return hour;
}

function getFixtureDate(inputFormat: string) {
  // console.log(inputFormat);
  function pad(s: number) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
}

function getToday() {
  var today = new Date();

  function pad(s: number) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(today);
  let todayString = [
    d.getFullYear(),
    pad(d.getMonth() + 1),
    pad(d.getDate()),
  ].join("-");

  return todayString;
}

function getEndOfWeek() {
  // const today = new Date();
  var next7days = new Date();
  next7days.setDate(next7days.getDate() + 21);

  function pad(s: number) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(next7days);
  let next7daysString = [
    d.getFullYear(),
    pad(d.getMonth() + 1),
    pad(d.getDate()),
  ].join("-");

  // console.log(next7daysString);
  return next7daysString;
}

export default MoreFixturesComponent;
