import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const historyScreenSytle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: getStatusBarHeight(),
  },
  scrollview: {
    width: "100%",
    marginBottom: 10,
  },
  writingContainer: {
    paddingHorizontal: 9,
    backgroundColor: "transparent",
  },
  titleContainer: {
    marginTop: 5,
    marginBottom: 18,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  titleText: {
    fontSize: 23,
    fontFamily: "MontserratBold",
    color: "#8CB0CF",
  },
  subTitleText: {
    fontSize: 17,
    fontFamily: "MontserratSemiBold",
    color: "#8CB0CF",
  },
  descriptionContainer: {
    backgroundColor: "transparent",
    marginBottom: 20,
    marginTop: 20,
  },
  descriptionText1: {
    color: "#8CB0CF",
    fontFamily: "MontserratSemiBold",
  },
  descriptionText2: {
    color: "#8CB0CF",
    fontFamily: "MontserratSemiBold",
    paddingTop: 10,
  },
  menuItem: {
    marginVertical: 2,
    height: 40,
    backgroundColor: "white",
  },
  menuText: {
    marginVertical: 10,
    marginLeft: 10,
    fontSize: 15,
    fontFamily: "MontserratBold",
    color: "#294861",
  },
  containerTeams: {
    backgroundColor: "transparent",
    marginTop: 10,
  },
  containerTeamsTitle: {
    fontFamily: "MontserratBold",
    fontSize: 15,
    color: "#8CB0CF",
    paddingBottom: 10,
    paddingTop: 20,
  },
});

export default historyScreenSytle;
