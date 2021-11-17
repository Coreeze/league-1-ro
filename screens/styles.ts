import { Dimensions, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import constants from "../constants/colors";

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
    backgroundColor: constants.cardBlurBackground,
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
    marginVertical: 3,
    backgroundColor: constants.cardBlurBackground,
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
    paddingLeft: 18,
    marginTop: 9,
    paddingBottom: 18,
    marginHorizontal: 9,
    borderRadius: 15,
    backgroundColor: constants.cardBlurBackground,
  },
  title: {
    fontFamily: "MontserratBold",
    color: "#1C374A",
    paddingTop: 6,
    fontSize: 24,
  },
  stadionDescription: {
    fontFamily: "MontserratSemiBold",
    fontSize: 15,
    color: "#1C374A",
  },
  statsTitle: {
    fontFamily: "MontserratBold",
    color: "#1C374A",
    paddingVertical: 15,
    fontSize: 24,
    paddingLeft: 18,
  },
  playersListContainer: {
    paddingLeft: 18,
    // marginTop: "9%",
    paddingTop: 9,
    paddingBottom: 18,
    marginHorizontal: 9,
    borderRadius: 15,
    paddingVertical: 6,
    backgroundColor: constants.cardBlurBackground,
    flexDirection: "row",
    alignItems: "center",
  },
  playersListText: {
    fontFamily: "MontserratBold",
    paddingRight: 9,
    fontSize: 20,
    color: "#1C374A",
  },
  formContainer: {
    paddingLeft: 18,
    marginTop: "9%",
    paddingBottom: 18,
    marginHorizontal: 9,
    borderRadius: 15,
    paddingVertical: 6,
    backgroundColor: constants.cardBlurBackground,
  },
  teamForm: {
    fontFamily: "MontserratBold",
    fontSize: 20,
    color: "#1C374A",
    paddingBottom: 9,
  },
  gamesContainer: {
    // paddingLeft: 18,
    marginTop: "9%",
    paddingBottom: 18,
    marginHorizontal: 9,
    borderRadius: 15,
    paddingVertical: 6,
    backgroundColor: constants.cardBlurBackground,
  },
  gamesText: {
    fontFamily: "MontserratBold",
    fontSize: 20,
    color: "#1C374A",
    // paddingTop: 9,
    paddingLeft: 18,
    paddingRight: 12,
    paddingBottom: 9,
  },
  formationContainer: {
    // paddingLeft: 18,
    marginTop: "9%",
    paddingBottom: 18,
    marginHorizontal: 9,
    borderRadius: 15,
    paddingVertical: 6,
    backgroundColor: constants.cardBlurBackground,
  },
  playersContainer: {
    // paddingLeft: 18,
    // marginTop: "9%",
    paddingBottom: 18,
    marginHorizontal: 9,
    borderRadius: 15,
    paddingVertical: 6,
    backgroundColor: "white",
    // flexDirection: "row",
  },
  playerPhoto: {
    width: 50,
    height: 50,
  },
  playerCard: {
    flexDirection: "row",
    paddingLeft: 18,
    paddingTop: 10,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  playerDescription: {
    paddingLeft: 12,
  },
  playerText: {
    fontSize: 13,
    fontFamily: "MontserratSemiBold",
    color: "#5685a6",
    paddingRight: 9,
  },
});
