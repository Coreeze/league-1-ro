import { StyleSheet, Dimensions } from "react-native";

const dimensions = Dimensions.get("window");

const styles = StyleSheet.create({
  logoutContainer: {
    backgroundColor: "#c93030",
    width: "100%",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 10,
    marginVertical: 18,
  },
  logouText: {
    // backgroundColor: colors.appNeonGreen,
    fontSize: 18,
    fontFamily: "MontserratBold",
    color: "#1C374A",
  },
});

export default styles;
