import * as Font from "expo-font";

export default useFonts = async () => {
  await Font.loadAsync({
    Radikal: require("./assets/fonts/Radikal-W03-Regular.ttf"),
    // All other fonts here
  });
};
