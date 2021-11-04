import * as Font from "expo-font";

export default useFonts = async () => {
  await Font.loadAsync({
    PremierLeague: require("./assets/fonts/Barclays-Premier-League.ttf"),
    MontserratSemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    // All other fonts here
  });
};
