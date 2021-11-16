import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { useState } from "react";
import { ScrollView, Image, TouchableOpacity, Dimensions } from "react-native";
import { Transition, Transitioning } from "react-native-reanimated";

import EditScreenInfo from "../components/EditScreenInfo";
import styles from "../components/ShortStandingsComponent/stlyes";
import { Text, View } from "../components/Themed";
import { historyData, historyTeams } from "../data/history";
// import historyScreenSytle from "./styles";
import { historyScreenSytle } from "./styles";

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

  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;

  console.log(dimensions);

  return (
    <LinearGradient
      colors={["#CEFF00", "#113b59"]}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 0.5, y: 0.7 }}
      locations={[0, 1]}
      style={historyScreenSytle.container}
    >
      <Transitioning.View ref={ref} style={{ backgroundColor: "transparent" }}>
        {/* TODO: animated transitions */}
        <ScrollView style={historyScreenSytle.scrollview}>
          <Image
            style={{
              position: "relative",
              width: imageWidth,
              height: 100,
            }}
            source={require("../assets/images/header12.png")}
            resizeMode="cover"
          />
          <View style={historyScreenSytle.writingContainer}>
            <Image
              style={{
                marginTop: 15,
                position: "relative",
                width: "100%",
                height: 200,
                borderRadius: 15,
              }}
              source={require("../assets/images/istoric.jpg")}
              resizeMode="contain"
            />
            <View style={historyScreenSytle.titleContainer}>
              <Text style={historyScreenSytle.titleText}>
                Istoria fotbalului românesc
              </Text>
              <Text style={historyScreenSytle.subTitleText}>
                din 1890 până în prezent
              </Text>
            </View>
            <View style={historyScreenSytle.descriptionContainer}>
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
                  colors={["#ff4778", "#CEFF00"]}
                  start={{ x: 0.3, y: 0.9 }}
                  end={{ x: 0.8, y: 1.0 }}
                  locations={[0.6, 1]}
                  style={{ width: "90%", height: 4 }}
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
                  colors={["#ff4778", "#CEFF00"]}
                  start={{ x: 0.3, y: 0.9 }}
                  end={{ x: 0.8, y: 1.0 }}
                  locations={[0.6, 1]}
                  style={{ width: "90%", height: 4 }}
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
