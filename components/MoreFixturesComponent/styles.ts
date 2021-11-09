import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // marginTop: "9%",
    // flex: 1,
    // width: "100%",
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "rgba(255,255,255,1)",
    // borderRadius: 15,
    // marginHorizontal: 6,
    paddingHorizontal: 10,
  },
  scrollContainer: {
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: "9%",
    marginBottom: "3%",
  },
  title: {
    width: "100%",
    textAlign: "center",
    paddingLeft: 12,
    color: "#1C374A",
    paddingVertical: 9,
    fontSize: 15,
    fontFamily: "MontserratBold",
    borderColor: "lightgrey",
    borderBottomWidth: 4,
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
