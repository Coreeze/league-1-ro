import React from "react";
import { View } from "react-native";

import { ShortPostType } from "../../../types";
import DownContainer from "./DownContainer";
import styles from "./styles";
import PictureContainer from "./PictureContainer";
import Footer from "./Footer";

export type ShortPostProps = {
  shortPost: ShortPostType;
};

const ShortPost = ({ shortPost }: ShortPostProps) => {
  // console.log(shortPost);
  return (
    <View style={styles.container}>
      <PictureContainer
        image={shortPost.user.image}
        user={shortPost.user}
        fan={shortPost.fan}
        date={shortPost.createdAt}
      />
      <DownContainer content={shortPost.content} image={shortPost.image} />
      <Footer numberOfLikes={shortPost.numberOfLikes} />
    </View>
  );
};

export default ShortPost;
