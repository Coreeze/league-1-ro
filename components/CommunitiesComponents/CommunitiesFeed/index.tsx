import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import * as React from "react";

import {
  Platform,
  StyleSheet,
  Image,
  NativeModules,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import shortPosts from "../../../data/shortPosts";
import ShortPost from "../PostComponent";
const { StatusBarManager } = NativeModules;

export default function CommunitiesFeed() {
  return (
    <LinearGradient
      colors={["#CEFF00", "#113b59"]}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 0.5, y: 0.7 }}
      locations={[0, 1]}
      style={styles.container}
    >
      <Image
        style={{
          position: "relative",
          top: Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT,
          width: "100%",
          height: 100,
        }}
        source={require("../../../assets/images/header14.png")}
        resizeMode="cover"
      />
      <FlatList
        data={shortPosts}
        renderItem={({ item }) => <ShortPost shortPost={item} />}
        keyExtractor={(item) => item.id}
        // refreshing={loading}
        // onRefresh={fetchShortPosts}
      />
      {/* {communities.map((community, i) => (
            <TouchableOpacity
              style={styles.communityContainer}
              key={community}
              activeOpacity={0.8}
            >
              <Text style={styles.communityText}>{community}</Text>
              <FontAwesome5 name="arrow-right" size={15} color="#1C374A" />
            </TouchableOpacity>
          ))} */}

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
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
