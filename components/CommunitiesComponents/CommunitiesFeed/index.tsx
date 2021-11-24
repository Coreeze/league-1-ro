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
  ActivityIndicator,
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
  limit,
  orderBy,
  limitToLast,
  startAfter,
} from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import colors from "../../../constants/colors";

const { StatusBarManager } = NativeModules;

const db = getFirestore();

export default function CommunitiesFeed() {
  var postsTest: any = [];
  const [posts, setPosts] = useState([]);

  const isFocused = useIsFocused();

  const [loading, setLoading] = useState(false);

  const [lazyLoading, setLazyLoading] = useState({
    shouldGetMore: false,
    loading: false,
    lastVisible: null,
    limit: 10,
    data: [],
  });
  // const [getMore, setGetMore] = useState(false);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getPosts();
      setRefreshing(false);
    }, 2000);
  }, []);

  if (isFocused) {
    // getPosts();
  }
  useFocusEffect(
    React.useCallback(() => {
      getPosts();
    }, [])
  );

  async function getPosts() {
    setLoading(true);
    try {
      setLazyLoading({ ...lazyLoading, loading: true });

      const postsRef = query(
        collection(db, "community"),
        orderBy("post.createdAt"),
        // startAfter(1644262604449)
        limitToLast(500)
        // limit(lazyLoading.limit)
      );

      const unsubscribe = onSnapshot(postsRef, (querySnapshot) => {
        const messagesFirestore = querySnapshot
          .docChanges()
          .filter(({ type }) => type === "added")
          .map(({ doc }) => {
            const message = doc.data();
            const _id = Math.random().toString(36).substring(7);
            // console.log(message);
            return {
              content: message.post.content,
              createdAt: message.post.createdAt.toDate(),
              _id: message.post.id,
              user: message.post.user.username.split("|")[0],
              fan: message.post.user.username.split("|")[1],
              noOfLikes: message.post.noOfLikes,
            };
          })
          .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

        // console.log(messagesFirestore.length);

        // @ts-ignore
        setLazyLoading({ ...posts, data: messagesFirestore });
        // console.log(lazyLoading.data);
        setPosts(messagesFirestore);
      });
      setLoading(false);

      const documentSnapshots = await getDocs(postsRef);
      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1];
      // console.log(lastVisible.data());
      setLazyLoading({
        ...lazyLoading,
        // @ts-ignore
        lastVisible: lastVisible,
        loading: true,
      });

      return () => unsubscribe();
    } catch (error) {
      alert("Ne pare rau, a aparut o eroare (cod 400).");
      console.log(error);
    }
  }

  async function getMorePosts() {
    console.log("getting more posts");
    // try {
    setLazyLoading({ ...lazyLoading, loading: true });

    const postsRef = query(
      collection(db, "community"),
      orderBy("post.createdAt"),
      startAfter(lazyLoading?.lastVisible),
      // limitToLast(lazyLoading.limit)
      limit(lazyLoading.limit)
    );

    try {
      const unsubscribe = onSnapshot(postsRef, (querySnapshot) => {
        const messagesFirestore = querySnapshot
          .docChanges()
          .filter(({ type }) => type === "added")
          .map(({ doc }) => {
            const message = doc.data();
            const _id = Math.random().toString(36).substring(7);
            console.log("message: " + message);
            return {
              content: message.post.content,
              createdAt: message.post.createdAt.toDate(),
              _id: message.post.id,
              user: message.post.user.username.split("|")[0],
              fan: message.post.user.username.split("|")[1],
              noOfLikes: message.post.noOfLikes,
            };
          })
          .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

        // console.log(messagesFirestore);
        setLazyLoading({ ...posts, data: messagesFirestore });
        var oldPosts = posts;
        console.log("oldPosts.length: " + oldPosts.length);
        oldPosts.push(messagesFirestore[0]);

        setPosts(oldPosts);
      });
      return () => unsubscribe();
    } catch (error) {
      console.log(error);
      alert("Eroare la getMorePosts");
    }

    const documentSnapshots = await getDocs(postsRef);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLazyLoading({
      ...lazyLoading,
      // @ts-ignore
      lastVisible: lastVisible,
      loading: true,
    });
    // } catch (error) {
    //   alert("Ne pare rau, a aparut o eroare (cod 400).");
    //   console.log(error);
    // }
  }

  function renderFooter() {
    try {
      // Check If Loading
      if (lazyLoading.loading) {
        return <ActivityIndicator />;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    onRefresh;
    getPosts();
  }, []);

  const appendPosts = useCallback(
    (posts) => {
      setPosts((previousPosts) => postsTest.append(previousPosts, posts));
    },
    [posts]
  );

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
      {loading ? (
        <ActivityIndicator size="large" color={"white"} />
      ) : (
        <FlatList
          style={{ width: "100%" }}
          data={posts}
          renderItem={({ item }) => <ShortPost shortPost={item} />}
          // @ts-ignore
          keyExtractor={(item) => item._id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListFooterComponent={renderFooter()}
          // onEndReached={() => getMorePosts()}
          // How Close To The End Of List Until Next Data Request Is Made
          onEndReachedThreshold={0}
          bounces={true}
          showsVerticalScrollIndicator={false}
          // refreshing={true}
          // onRefresh={fetchShortPosts}
        />
      )}

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
