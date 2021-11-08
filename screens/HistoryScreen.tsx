import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { ScrollView, Image, TouchableOpacity } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import historyScreenSytle from "./styles";

export default function HistoryScreen() {
  const menuItems = [
    "Cum a început",
    "Echipa națională",
    "Reușite",
    "Jucători de legendă",
    "Cluburi de legendă",
  ];
  const teams = ["FCSB", "Rapid", "Dinamo", "Politehnica Iași"];

  return (
    <LinearGradient
      colors={["#0E1C26", "#294861"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.4, y: 1 }}
      locations={[0, 1]}
      style={historyScreenSytle.container}
    >
      <ScrollView style={historyScreenSytle.scrollview}>
        {/* <Image
          style={{
            position: "relative",
            width: "100%",
            height: 100,
          }}
          source={require("../assets/images/header10.png")}
          resizeMode="contain"
        /> */}
        <View style={historyScreenSytle.writingContainer}>
          {/* <Image
            style={{
              marginTop: 15,
              position: "relative",
              width: "100%",
              height: 200,
            }}
            source={require("../assets/images/istoric.jpg")}
            resizeMode="contain"
          /> */}
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
              Aradul nu era în graniţele României atunci şi nici cuvântul fotbal
              nu era specificat clar în respectivul articol publicat în presa
              vremii.
            </Text>
          </View>

          {menuItems.map((item, i) => (
            <TouchableOpacity
              style={historyScreenSytle.menuItem}
              activeOpacity={0.7}
              key={i}
            >
              <LinearGradient
                colors={["#0E1C26", "#E2597D"]}
                start={{ x: 0.3, y: 0.3 }}
                end={{ x: 0.5, y: 0.5 }}
                locations={[0, 1]}
                style={{ width: "100%", height: 3 }}
              ></LinearGradient>
              <Text style={historyScreenSytle.menuText}>{item}</Text>
            </TouchableOpacity>
          ))}
          <Text style={historyScreenSytle.containerTeamsTitle}>Echipe</Text>
          {teams.map((item, i) => (
            <TouchableOpacity
              style={historyScreenSytle.menuItem}
              activeOpacity={0.7}
              key={i}
            >
              <LinearGradient
                colors={["#0E1C26", "#E2597D"]}
                start={{ x: 0.3, y: 0.3 }}
                end={{ x: 0.5, y: 0.5 }}
                locations={[0, 1]}
                style={{ width: "100%", height: 3 }}
              ></LinearGradient>
              <Text style={historyScreenSytle.menuText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
