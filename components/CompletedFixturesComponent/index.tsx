import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { configureFonts } from "react-native-paper";
import colors from "../../constants/colors";
import useFonts from "../../useFonts";
import styles from "./styles";

const CompletedFixturesComponent = () => {
  const navigation = useNavigation();

  const [fixtures, setFixtures] = useState(Array);
  const [shouldGetFixtures, setShouldGetFixtures] = useState(true);

  const [showDetailsMenu, setShowDetailsMenu] = useState(null);

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
  //   getToday();
  //   getPastDate();

  function getFixtures() {
    fetch(
      "https://v3.football.api-sports.io/fixtures?league=283&season=2021&from=" +
        getPastDate(90) +
        "&to=" +
        getToday() +
        "&status=FT",
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
        console.log("Fixtures component fetch");
        var fixtObjs: any[] = [];
        json.response.map((fixture: any, i: any) => {
          fixtObjs.push({
            timestamp: fixture.fixture.timestamp,
            date: fixture.fixture.date,
            teams: fixture.teams,
            score: fixture.score,
          });
        });
        var sortedFix = fixtObjs.sort(function (x, y) {
          return y.timestamp - x.timestamp;
        });
        setFixtures(sortedFix);
        // console.log(sortedFix);

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

  function showMoreFixtures() {
    // @ts-ignore: Unreachable code error
    navigation.navigate("MoreFixtures");
  }
  function showTeamDetails(team: undefined) {
    // @ts-ignore: Unreachable code error
    navigation.navigate("TeamDetails", { team });
  }
  // console.log(fixtures[0]);

  return (
    // TODO add more details on click
    // TODO add last 7 days matches
    <LinearGradient
      colors={["#113b59", "#CEFF00"]}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 0.5, y: 0.7 }}
      locations={[0, 1]}
      style={{ backgroundColor: "rgba(255,255,255,1)", paddingHorizontal: 10 }}
    >
      <LinearGradient
        colors={["#ff4778", "#CEFF00"]}
        start={{ x: 0.3, y: 0.9 }}
        end={{ x: 0.8, y: 1.0 }}
        locations={[0.6, 1]}
        style={{
          width: "90%",
          height: 4,
          alignSelf: "center",
          marginTop: "9%",
        }}
      ></LinearGradient>
      <ScrollView>
        <Text style={styles.title}>
          Meciuri încheiate în ultimele 90 de zile
        </Text>
        {fixtures.length != 0 ? (
          fixtures.map((fixture: any, i: number) => (
            <View
              key={i}
              style={{
                backgroundColor: colors.cardBlurBackground,
                borderRadius: 15,
                marginVertical: 3,
              }}
            >
              <TouchableOpacity
                style={styles.fixture}
                activeOpacity={0.7}
                onPress={() => {
                  // @ts-ignore
                  setShowDetailsMenu(i === showDetailsMenu ? null : i);
                }}
              >
                <TouchableOpacity
                  style={styles.teamHome}
                  activeOpacity={0.7}
                  onPress={() => {
                    showTeamDetails(fixture.teams.home);
                  }}
                >
                  <Image
                    source={{
                      uri: fixture.teams.home.logo,
                    }}
                    style={styles.logoHome}
                  />
                  <Text style={styles.teamText}>
                    {fixture.teams.home.name.length > 7
                      ? fixture.teams.home.name.substring(0, 8) + "."
                      : fixture.teams.home.name}
                  </Text>
                </TouchableOpacity>
                <View style={styles.time}>
                  <Text style={styles.timeText}>
                    {getFixtureDate(fixture.date)}
                  </Text>
                  <Text style={styles.timeText}>
                    {fixture.score.fulltime.home}-{fixture.score.fulltime.away}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.teamAway}
                  activeOpacity={0.7}
                  onPress={() => {
                    showTeamDetails(fixture.teams.away);
                  }}
                >
                  <Image
                    source={{
                      uri: fixture.teams.away.logo,
                    }}
                    style={styles.logoAway}
                  />
                  <Text style={styles.teamText}>
                    {fixture.teams.away.name.length > 7
                      ? fixture.teams.away.name.substring(0, 8) + "."
                      : fixture.teams.away.name}
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
              {/* {i === showDetailsMenu && (
              <View style={styles.detailsMenu} key={i}>
                <Text>TEST</Text>
              </View>
            )} */}
            </View>
          ))
        ) : (
          <Text style={styles.subTitle}>Nu sunt meciuri</Text>
        )}
      </ScrollView>
    </LinearGradient>
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

function getPastDate(days: number) {
  // const today = new Date();
  var next7days = new Date();
  next7days.setDate(next7days.getDate() - days);

  function pad(s: number) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(next7days);
  let next7daysString = [
    d.getFullYear(),
    pad(d.getMonth() + 1),
    pad(d.getDate()),
  ].join("-");

  console.log(next7daysString);
  return next7daysString;
}

export default CompletedFixturesComponent;
