import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  fixture: {
    flexDirection: "row",
    paddingVertical: 15,
    borderColor: "lightgrey",
    borderBottomWidth: 1,
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
    width: 50,
    // backgroundColor: "blue",
  },
  timeText: {
    borderColor: "grey",
    borderRadius: 2,
    backgroundColor: "lightgrey",
    padding: 5,
    fontFamily: "sans-serif-medium",
    color: "#1C374A",
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
    fontSize: 15,
    color: "#1C374A",
  },
});

export default styles;
