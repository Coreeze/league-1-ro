import * as Font from "expo-font";

export default useFonts = async () => {
  await Font.loadAsync({
    Radikal: require("./assets/fonts/Radikal-W03-Regular.ttf"),
    PremierLeague: require("./assets/fonts/Barclays-Premier-League.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    MontserratSemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    // All other fonts here
  });
};
