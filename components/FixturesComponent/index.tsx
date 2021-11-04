import AppLoading from "expo-app-loading";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useState } from "react";
import { View, Text, Image } from "react-native";
import useFonts from "../../useFonts";
import styles from "./styles";

const FixturesComponent = () => {
  const [fixtures, setFixtures] = useState([]);
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

  function getRound() {
    fetch(
      "https://v3.football.api-sports.io/fixtures/rounds?season=2021&league=283&current=true",
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
        console.log("Fetching");

        // console.log(json.response[0]);
        // TODO: add check for what happens when api requests are full
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getFixtures() {
    // var today = new Date();
    // var date =
    //   today.getFullYear() +
    //   "-" +
    //   (today.getMonth() + 1) +
    //   "-" +
    //   today.getDate();
    // console.log("date: " + date);

    fetch(
      "https://v3.football.api-sports.io/fixtures?league=283&season=2021&from=2021-11-04&to=2021-11-06",
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
        console.log("Fetching");
        // console.log(json);
        setFixtures(json);
        // getDateAndTime(json);

        // TODO: add check for what happens when api requests are full
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //   getRound();
  if (shouldGetFixtures) {
    getFixtures();
    setShouldGetFixtures(false);
    // getDateAndTime(fixtures);
  }
  // console.log(fixtures);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#931F1D", "#465775"]}
        start={{ x: 0.3, y: 0.3 }}
        end={{ x: 0.5, y: 0.5 }}
        locations={[0, 1]}
        style={{ width: "100%", height: 6 }}
      ></LinearGradient>
      {fixtures.response?.map((fixture: Object, i: number) => (
        <View style={styles.fixture} key={i}>
          <View style={styles.teamHome}>
            <Image
              source={{
                uri: fixture.teams.home.logo,
              }}
              style={styles.logoHome}
            />
            <Text style={styles.teamText}>
              {fixture.teams.home.name.length > 10
                ? fixture.teams.home.name.substring(0, 11) + "."
                : fixture.teams.home.name}
            </Text>
          </View>
          <View style={styles.time}>
            <Text style={styles.timeText}>
              {getFixtureHour(fixture.fixture.timestamp)}
            </Text>
            <Text style={styles.timeText}>
              {getFixtureDate(fixture.fixture.date)}
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
              {fixture.teams.away.name.length > 10
                ? fixture.teams.away.name.substring(0, 11) + "."
                : fixture.teams.away.name}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

function getFixtureHour(timestamp: number) {
  // console.log(timestamp);
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString();
  const hour = humanDateFormat.slice(11, 16);

  // function convertDate(inputFormat: string) {
  //   function pad(s: number) {
  //     return s < 10 ? "0" + s : s;
  //   }
  //   var d = new Date(inputFormat);
  //   return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
  // }

  // const date = convertDate(json.response[0].fixture.date);
  // console.log(dateAndTime);

  return hour;
}

function getFixtureDate(inputFormat: string) {
  function pad(s: number) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
}

function endOfWeek() {
  const date = new Date();

  var lastday = date.getDate() - (date.getDay() - 1) + 6;
  return new Date(date.setDate(lastday));
}

export default FixturesComponent;
