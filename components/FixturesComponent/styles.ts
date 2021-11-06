import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: "9%",
    flex: 1,
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    width: "100%",
    paddingLeft: 12,
    color: "#1C374A",
    paddingVertical: 9,
    fontSize: 15,
    fontFamily: "MontserratBold",
    borderColor: "lightgrey",
    borderBottomWidth: 4,
  },
  fixture: {
    flexDirection: "row",
    paddingVertical: 9,
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
    // backgroundColor: "blue",
    // height: 50,
    minWidth: 50,
    maxWidth: 100,
  },
  timeText: {
    borderColor: "grey",
    borderRadius: 2,
    backgroundColor: "lightgrey",
    padding: 5,
    fontFamily: "sans-serif-medium",
    color: "#1C374A",
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
    fontSize: 15,
    color: "#1C374A",
  },
});

export default styles;
