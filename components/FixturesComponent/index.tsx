import AppLoading from "expo-app-loading";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useState } from "react";
import { View, Text, Image } from "react-native";
import useFonts from "../../useFonts";
import styles from "./styles";

const FixturesComponent = () => {
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

  //   getRound();
  if (shouldGetFixtures) {
    getFixtures();
    setShouldGetFixtures(false);
  }
  // fixtures.map((obj, i) => console.log(obj));

  return (
    // TODO add check for when there are no fixtures in the next 7 days
    <View style={styles.container}>
      <LinearGradient
        colors={["#931F1D", "#465775"]}
        start={{ x: 0.3, y: 0.3 }}
        end={{ x: 0.5, y: 0.5 }}
        locations={[0, 1]}
        style={{ width: "100%", height: 6 }}
      ></LinearGradient>
      <Text style={styles.title}>Meciuri în următoarele 7 zile</Text>
      {fixtures.map((fixture, i: number) => (
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
            <Text style={styles.timeText}>{getFixtureDate(fixture.date)}</Text>
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
  next7days.setDate(next7days.getDate() + 7);

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

export default FixturesComponent;
