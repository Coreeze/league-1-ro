import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text,
  Dimensions,
} from "react-native";

// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import useFonts from "../../useFonts";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";

// import styles from "../components/StandingsComponent/stlyes";

export default function TeamsListButton() {
  const navigation = useNavigation();

  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;

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

  function showAllTeams() {
    navigation.navigate("TeamsList");
  }

  return (
    // TODO: add loading spinner for EVERYTHING
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={showAllTeams}
    >
      <LinearGradient
        colors={["#ff4778", "#CEFF00"]}
        start={{ x: 0.3, y: 0.9 }}
        end={{ x: 0.8, y: 1.0 }}
        locations={[0.6, 1]}
        style={{ width: "90%", height: 4 }}
      ></LinearGradient>
      <View style={styles.button}>
        <Text style={styles.text}>Echipe Liga 1</Text>
        <FontAwesome5 name="arrow-right" size={15} color="#1C374A" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "9%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 15,
    marginHorizontal: 9,
    paddingHorizontal: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontFamily: "MontserratBold",
    color: "#1C374A",
    fontSize: 18,
    paddingVertical: 10,
    marginRight: 10,
  },
});
