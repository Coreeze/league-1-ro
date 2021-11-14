import { Dimensions, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const dimensions = Dimensions.get("window");
const imageWidth = dimensions.width;

export const historyScreenSytle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: getStatusBarHeight(),
  },
  scrollview: {
    width: "100%",
    flex: 1,
    alignSelf: "stretch",
    marginBottom: 10,
  },
  writingContainer: {
    paddingHorizontal: 9,
    backgroundColor: "transparent",
  },
  titleContainer: {
    marginTop: "15%",
    marginBottom: "18%",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  titleText: {
    fontSize: 23,
    fontFamily: "MontserratBold",
    color: "#fff",
  },
  subTitleText: {
    fontSize: 17,
    fontFamily: "MontserratSemiBold",
    color: "#fff",
  },
  descriptionContainer: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 15,
    marginBottom: 20,
  },
  descriptionText2: {
    color: "#000",
    fontFamily: "MontserratSemiBold",
    padding: 10,
  },
  menuItem: {
    alignItems: "center",
    flexGrow: 1,
    borderRadius: 15,
    marginVertical: 4,
    backgroundColor: "white",
  },
  menuText: {
    marginVertical: 10,
    marginLeft: 10,
    fontSize: 15,
    fontFamily: "MontserratBold",
    color: "#000",
  },
  containerTeams: {
    backgroundColor: "transparent",
    marginTop: 10,
  },
  containerTeamsTitle: {
    fontFamily: "MontserratBold",
    fontSize: 20,
    color: "#fff",
    paddingBottom: 10,
    paddingTop: 20,
    alignSelf: "center",
  },
});

export const teamDetailsScreen = StyleSheet.create({
  container: {
    flex: 1,
  },
  stadionImg: {
    marginTop: 15,
    position: "absolute",
    width: imageWidth,
    height: imageWidth / 3,
  },
  logo: {
    margin: 15,
    width: imageWidth / 3,
    height: imageWidth / 3,
  },
  stadionContainer: {
    paddingLeft: 9,
    marginTop: 9,
    paddingBottom: 18,
    marginHorizontal: 9,
    borderRadius: 15,
    paddingVertical: 6,
    backgroundColor: "white",
  },
  title: {
    fontFamily: "MontserratBold",
    color: "#1C374A",
    paddingVertical: 6,
    fontSize: 24,
  },
  stadionDescription: {
    fontFamily: "MontserratSemiBold",
    fontSize: 15,
    color: "#1C374A",
  },
});
