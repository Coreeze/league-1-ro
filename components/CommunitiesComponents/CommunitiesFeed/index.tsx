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
  RefreshControl,
} from "react-native";
import shortPosts from "../../../data/shortPosts";
import ShortPost from "../PostComponent";
import * as firebase from "firebase/compat";
import "firebase/firestore";
import { initializeApp } from "@firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

const { StatusBarManager } = NativeModules;

const db = getFirestore();
const chatsRef = query(collection(db, "community"));

export default function CommunitiesFeed() {
  var postsTest: any = [];
  const [posts, setPosts] = useState([]);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getPosts();
      setRefreshing(false);
    }, 2000);
    // wait(2000).then(() => {setRefreshing(false)});
  }, []);

  function getPosts() {
    const unsubscribe = onSnapshot(chatsRef, (querySnapshot) => {
      const messagesFirestore = querySnapshot
        .docChanges()
        .filter(({ type }) => type === "added")
        .map(({ doc }) => {
          const message = doc.data();
          const _id = Math.random().toString(36).substring(7);
          // console.log(message.post);
          return {
            content: message.post.content,
            createdAt: message.post.createdAt.nanoseconds,
            _id: message.post.id,
            user: message.post.user,
          };
        });
      // .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      // appendPosts(messagesFirestore);
      setPosts(messagesFirestore);
      // console.log(messagesFirestore);
    });
    return () => unsubscribe();
  }

  useEffect(() => {
    // readUser();
    console.log("useEffect");
    getPosts();
  }, []);

  const appendPosts = useCallback(
    (posts) => {
      // console.log("posts: " + posts);
      // console.log(previousPosts)
      setPosts((previousPosts) => postsTest.append(previousPosts, posts));
    },
    [posts]
  );

  // console.log(posts);

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
        style={{ width: "100%" }}
        data={posts}
        renderItem={({ item }) => <ShortPost shortPost={item} />}
        keyExtractor={(item) => item._id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
