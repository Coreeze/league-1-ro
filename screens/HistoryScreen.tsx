import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { useState } from "react";
import { ScrollView, Image, TouchableOpacity } from "react-native";
import { Transition, Transitioning } from "react-native-reanimated";

import EditScreenInfo from "../components/EditScreenInfo";
import styles from "../components/ShortStandingsComponent/stlyes";
import { Text, View } from "../components/Themed";
import { historyData, historyTeams } from "../data/history";
import historyScreenSytle from "./styles";

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export default function HistoryScreen() {
  const [dataIndex, setDataIndex] = useState(null);
  const [teamIndex, setTeamIndex] = useState(null);
  const ref = React.useRef();

  return (
    <LinearGradient
      colors={["#0E1C26", "#294861"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.4, y: 1 }}
      locations={[0, 1]}
      style={historyScreenSytle.container}
    >
      <Transitioning.View ref={ref} style={{ backgroundColor: "transparent" }}>
        {/* TODO: animated transitions */}
        <ScrollView style={historyScreenSytle.scrollview}>
          <Image
            style={{
              position: "relative",
              width: "100%",
              height: 100,
            }}
            source={require("../assets/images/header10.png")}
            resizeMode="contain"
          />
          <View style={historyScreenSytle.writingContainer}>
            <Image
              style={{
                marginTop: 15,
                position: "relative",
                width: "100%",
                height: 200,
              }}
              source={require("../assets/images/istoric.jpg")}
              resizeMode="contain"
            />
            <View style={historyScreenSytle.titleContainer}>
              <Text style={historyScreenSytle.titleText}>
                Istoria fotbalului românesc
              </Text>
              <Text style={historyScreenSytle.subTitleText}>
                - din 1890 până în prezent -
              </Text>
            </View>
            <LinearGradient
              colors={["#E2597D", "#0E1C26"]}
              start={{ x: 0.3, y: 0.3 }}
              end={{ x: 0.5, y: 0.5 }}
              locations={[0, 1]}
              style={{ width: "100%", height: 6 }}
            ></LinearGradient>
            <View style={historyScreenSytle.descriptionContainer}>
              <Text style={historyScreenSytle.descriptionText1}>
                Fotbalul este cel mai popular sport în România. Federația Română
                de Fotbal (FRF), membră a UEFA, este forul național de guvernare
                al sportului.
              </Text>
              <Text style={historyScreenSytle.descriptionText2}>
                Se spune că la Arad, în 1888, un grup de tineri bătea mingea.
                Aradul nu era în graniţele României atunci şi nici cuvântul
                fotbal nu era specificat clar în respectivul articol publicat în
                presa vremii.
              </Text>
            </View>

            {historyData.map((item, i) => (
              <TouchableOpacity
                style={historyScreenSytle.menuItem}
                activeOpacity={0.9}
                key={i}
                onPress={() => {
                  ref.current.animateNextTransition();
                  setDataIndex(i === dataIndex ? null : i);
                }}
              >
                <LinearGradient
                  colors={["#0E1C26", "#E2597D"]}
                  start={{ x: 0.3, y: 0.3 }}
                  end={{ x: 0.5, y: 0.5 }}
                  locations={[0, 1]}
                  style={{ width: "100%", height: 3 }}
                ></LinearGradient>
                <Text style={historyScreenSytle.menuText}>{item.title}</Text>
                {i === dataIndex && (
                  <Text style={styles.itemDescription}>{item.content}</Text>
                )}
              </TouchableOpacity>
            ))}
            <Text style={historyScreenSytle.containerTeamsTitle}>Echipe</Text>
            {historyTeams.map((item, i) => (
              <TouchableOpacity
                style={historyScreenSytle.menuItem}
                activeOpacity={0.7}
                key={i}
                onPress={() => {
                  // ref.current.animateNextTransition();
                  setTeamIndex(i === teamIndex ? null : i);
                }}
              >
                <LinearGradient
                  colors={["#0E1C26", "#E2597D"]}
                  start={{ x: 0.3, y: 0.3 }}
                  end={{ x: 0.5, y: 0.5 }}
                  locations={[0, 1]}
                  style={{ width: "100%", height: 3 }}
                ></LinearGradient>
                <Text style={historyScreenSytle.menuText}>{item.title}</Text>
                {i === teamIndex && (
                  <Text style={styles.itemDescription}>{item.content}</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </Transitioning.View>
    </LinearGradient>
  );
}
