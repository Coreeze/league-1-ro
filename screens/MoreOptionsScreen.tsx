import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { getAuth } from "firebase/auth";
import * as React from "react";
import {
  NativeModules,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LogOutComponent from "../components/Authetication/LogOutComponent";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import colors from "../constants/colors";

export default function MoreOptionsScreen() {
  const navigation = useNavigation();
  function goToHistory() {
    navigation.navigate("History");
  }

  const auth: any = getAuth();
  const user = auth.currentUser;
  console.log(user.displayName);
  return (
    <LinearGradient
      colors={["#CEFF00", "#113b59"]}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 0.5, y: 0.7 }}
      locations={[0, 1]}
      style={styles.container}
    >
      <View
        style={{
          paddingHorizontal: 20,
          flex: 1,
          backgroundColor: "transparent",
        }}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Salutare, {"\n"}
            {user.displayName}!
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            // paddingHorizontal: 20,
            backgroundColor: "transparent",
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={goToHistory}
            style={styles.historyContainer}
            activeOpacity={0.8}
          >
            <Text style={styles.historyText}>
              Vezi istoria fotbalului romanesc
            </Text>
          </TouchableOpacity>
          <LogOutComponent />
        </View>
      </View>
    </LinearGradient>
  );
}

const { StatusBarManager } = NativeModules;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  titleContainer: {
    paddingTop: Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 42,
    fontFamily: "MontserratBold",
    color: "#1C374A",
    paddingTop: 30,
  },
  historyContainer: {
    marginVertical: 10,
    backgroundColor: colors.cardBlurBackground,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  historyText: {
    // backgroundColor: colors.appNeonGreen,
    fontSize: 18,
    fontFamily: "MontserratBold",
    color: "#1C374A",
  },
});
