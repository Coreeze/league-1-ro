import { StyleSheet } from "react-native";
import constants from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    marginTop: "3%",
    backgroundColor: "rgba(255,255,255,0)",
    borderRadius: 15,
    marginHorizontal: 9,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  gamesText: {
    fontFamily: "MontserratBold",
    fontSize: 20,
    color: "#5685a6",
    paddingLeft: 18,
    paddingRight: 12,
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
    backgroundColor: constants.cardBlurBackground,
    borderRadius: 15,
    marginTop: 6,
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

export default styles;
