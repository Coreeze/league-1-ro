import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: "9%",
    flex: 1,
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    marginHorizontal: 9,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  gamesText: {
    fontFamily: "MontserratBold",
    fontSize: 20,
    color: "#1C374A",
    // paddingTop: 9,
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
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
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
