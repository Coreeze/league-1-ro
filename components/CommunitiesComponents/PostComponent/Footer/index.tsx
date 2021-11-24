import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import colors from "../../../../constants/colors";
import {
  collection,
  getFirestore,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

export type FooterProps = {
  numberOfLikes: number;
  id: string;
};

const Footer = ({ numberOfLikes, id }: FooterProps) => {
  const [likesCounter, setLikesCounter] = useState(numberOfLikes);
  const [likePressed, setLikePressed] = useState(false);

  const db = getFirestore();

  // const postRef = collection(db, "community", "1637841237103");

  async function updateDbLikeCounter() {
    const postRef = doc(db, "community", JSON.stringify(id));

    // await updateDoc(postRef, {
    //   "post.noOfLikes": likesCounter,
    // });

    // const docSnap = await getDoc(postRef);
    // if (docSnap.exists()) {
    //   console.log(docSnap.data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }
    // const docSnap = await getDoc(postRef);
    // if (docSnap.exists()) {
    //   // console.log("Document data:", docSnap.data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }
  }

  useEffect(() => {
    updateDbLikeCounter();
  }, [likesCounter]);

  function likeFunction() {
    if (likePressed) {
      setLikePressed(false);
      setLikesCounter(likesCounter - 1);
    } else {
      setLikePressed(true);
      setLikesCounter(likesCounter + 1);
      // console.log(likesCounter);
    }
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingTop: 10,
      }}
      onPress={likeFunction}
    >
      <FontAwesome name="soccer-ball-o" size={24} color={colors.appDarkBlue} />
      <Text style={{ marginLeft: 5 }}>{likesCounter}</Text>
    </TouchableOpacity>
  );
};

export default Footer;
