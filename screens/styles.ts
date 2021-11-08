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
    marginVertical: 2.5,
    // height: 50,
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

export default historyScreenSytle;
