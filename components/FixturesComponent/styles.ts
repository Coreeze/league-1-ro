import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: "9%",
    flex: 1,
    flexGrow: 1,

    // flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 15,
    marginHorizontal: 9,
    paddingHorizontal: 10,
  },
  title: {
    width: "100%",
    textAlign: "center",
    paddingLeft: 12,
    color: "#1C374A",
    paddingVertical: 18,
    fontSize: 18,
    fontFamily: "MontserratBold",
    borderColor: "rgba(255,255,255,0.5)",
    // borderBottomWidth: 3,
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
    // borderColor: "white",
    // borderBottomWidth: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  teamHome: {
    width: 130,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    paddingRight: 5,
  },
  time: {
    alignItems: "center",
    minWidth: 50,
    maxWidth: 100,
  },
  timeText: {
    borderColor: "white",
    borderRadius: 6,
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
  },
  teamAway: {
    // backgroundColor: "yellow",
    height: "80%",
    flexDirection: "row",
    alignItems: "center",
    width: 130,
  },
  logoHome: {
    // size: 5,
    width: 23,
    height: 23,
    marginRight: 6,
  },
  logoAway: {
    // size: 5,
    width: 23,
    height: 23,
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
  detailsMenu: {
    borderColor: "lightgrey",
    borderBottomWidth: 5,
  },
  details: {
    alignSelf: "flex-end",
    fontFamily: "MontserratBold",
    paddingRight: 6,
    paddingVertical: 9,
    fontSize: 12,
    color: "#1C374A",
  },
});

export default styles;
