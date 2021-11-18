import React from "react";
import { Image } from "react-native";

export type ProfilePictureProps = {
  image?: string;
  size?: number;
};

const ProfilePicture = ({ image, size = 33 }: ProfilePictureProps) => {
  // console.log(image)
  return (
    <Image
      source={
        image != "" || undefined || null
          ? { uri: image }
          : require("../../../assets/images/no_profile_pic.jpg")
      }
      style={{
        width: size,
        height: size,
        borderRadius: size,
      }}
    />
  );
};

export default ProfilePicture;
