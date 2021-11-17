import { StyleSheet } from "react-native";
import constants from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 10,
  },
  container2: {
    marginVertical: "6%",
    borderRadius: 15,
    backgroundColor: constants.cardBlurBackground,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
  },
  title: {
    fontFamily: "MontserratBold",
    alignSelf: "center",
    fontSize: 20,
    color: "#1C374A",
    paddingVertical: 9,
    borderColor: "lightgrey",
    borderBottomWidth: 4,
  },
  button: {
    flexDirection: "row",
    paddingTop: 9,
    paddingBottom: 3,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  details: {
    fontFamily: "MontserratBold",
    justifyContent: "center",
    marginRight: 6,
    fontSize: 12,
    color: "grey",
  },
});

export default styles;
