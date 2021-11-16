import { StyleSheet } from "react-native";
import constants from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    paddingHorizontal: 10,
  },
  scrollContainer: {
    borderRadius: 15,
    backgroundColor: constants.cardBlurBackground,
    marginTop: "9%",
    marginBottom: "3%",
  },
  title: {
    width: "100%",
    textAlign: "center",
    paddingLeft: 12,
    color: "#1C374A",
    paddingVertical: 9,
    fontSize: 18,
    fontFamily: "MontserratBold",
  },
  subTitle: {
    width: "100%",
    textAlign: "center",
    paddingLeft: 12,
    color: "#1C374A",
    paddingVertical: 9,
    fontSize: 13,
    fontFamily: "MontserratSemiBold",
  },
  fixture: {
    flexDirection: "row",
    paddingVertical: 9,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  teamHome: {
    width: 130,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    paddingRight: 5,
  },
  time: {
    alignItems: "center",
    minWidth: 50,
    maxWidth: 100,
  },
  timeText: {
    borderColor: "grey",
    borderRadius: 2,
    backgroundColor: "white",
    padding: 5,
    fontFamily: "sans-serif-medium",
    color: "#1C374A",
    fontSize: 15,
  },
  dateText: {
    borderColor: "grey",
    borderRadius: 2,
    backgroundColor: "lightgrey",
    padding: 5,
    fontFamily: "sans-serif-medium",
    color: "#1C374A",
    // marginBottom: 15,
  },
  teamAway: {
    // backgroundColor: "yellow",
    flexDirection: "row",
    alignItems: "center",
    width: 130,
  },
  logoHome: {
    // size: 5,
    width: 20,
    height: 20,
    marginRight: 6,
  },
  logoAway: {
    // size: 5,
    width: 20,
    height: 20,
    marginRight: 6,
    marginLeft: 10,
  },
  teamText: {
    fontFamily: "MontserratSemiBold",
    fontSize: 17,
    color: "#1C374A",
  },
  button: {
    flexDirection: "row",
    paddingVertical: 6,
    paddingRight: 9,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  details: {
    alignSelf: "flex-end",
    fontFamily: "MontserratBold",
    paddingRight: 6,
    paddingVertical: 9,
    fontSize: 12,
    color: "grey",
  },
});

export default styles;
