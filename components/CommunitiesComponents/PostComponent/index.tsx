import React from "react";
import { View } from "react-native";

import { ShortPostType } from "../../../types";
import UpContainer from "./UpContainer/index";
import DownContainer from "./DownContainer";
import styles from "./styles";
import PictureContainer from "./PictureContainer";
import Footer from "./Footer";

export type ShortPostProps = {
  shortPost: ShortPostType;
};

const ShortPost = ({ shortPost }: ShortPostProps) => (
  <View style={styles.container}>
    <PictureContainer image={shortPost.user.image} user={shortPost.user} />
    {/* <UpContainer user={shortPost.user} createdAt={shortPost.createdAt} /> */}
    <DownContainer content={shortPost.content} image={shortPost.image} />
    <Footer
      numberOfShares={shortPost.numberOfShares}
      numberOfLikes={shortPost.numberOfLikes}
    />
  </View>
);

export default ShortPost;
