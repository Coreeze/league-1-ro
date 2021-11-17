import { StyleSheet } from "react-native";
import constants from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 9,
    width: "100%",
    paddingBottom: 20,
  },
  table: {
    backgroundColor: constants.cardBlurBackground,
    marginTop: 9,
    borderRadius: 15,
  },
  title: {
    paddingVertical: 9,
    paddingLeft: 15,
    fontSize: 18,
    fontFamily: "MontserratBold",
    color: "#1C374A",
    textAlign: "center",
  },
  header: {
    backgroundColor: "white",
    borderRadius: 9,
    borderBottomWidth: 0,
  },
  titleText: {
    fontFamily: "MontserratSemiBold",
    fontSize: 15,
  },
  tableText: {
    fontFamily: "MontserratSemiBold",
    fontSize: 15,
    color: "#1C374A",
  },
  row: {
    borderRadius: 25,
    borderBottomWidth: 0,
  },
  club: {
    flex: 4,
    // paddingRight: 5,
  },
  avatar: {
    backgroundColor: "white",
  },
  button: {
    flexDirection: "row",
    paddingVertical: 6,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  details: {
    paddingRight: 9,
    fontWeight: "bold",
    color: "grey",
  },
  accordionText: {
    fontFamily: "MontserratSemiBold",
    color: "#1C374A",
    fontSize: 15,
    padding: 6,
  },
});

export default styles;
