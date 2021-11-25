import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    borderRadius: 15,
    marginTop: "3%",
    paddingHorizontal: 9,
    marginHorizontal: 9,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.cardBlurBackground,
  },
  title: {
    fontFamily: "MontserratBold",
    // paddingRight: 6,
    paddingVertical: 9,
    fontSize: 18,
    color: colors.appDarkBlue,
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
    paddingVertical: 6,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  details: {
    fontFamily: "MontserratBold",
    paddingRight: 6,
    paddingVertical: 9,
    fontSize: 12,
    color: "grey",
  },
});

export default styles;
