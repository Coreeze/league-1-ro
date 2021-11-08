import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { StyleSheet } from "react-native";
import {
  Accordion,
  Item,
} from "react-native-paper/lib/typescript/components/List/List";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function StatsScreen() {
  return (
    <LinearGradient
      colors={["#CEFF00", "#000"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.4, y: 1 }}
      locations={[0, 1]}
      style={styles.container}
    >
      <Text>Statistici</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
