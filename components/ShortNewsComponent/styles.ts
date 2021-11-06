import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    marginTop: 60,
    paddingBottom: 10,
    marginBottom: 20,
  },
  container2: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontFamily: "MontserratBold",
    fontSize: 15,
    color: "#1C374A",
    paddingTop: 12,
    borderColor: "lightgrey",
    borderBottomWidth: 4,
  },
  button: {
    flexDirection: "row",
    paddingTop: 9,
    paddingBottom: 3,
    justifyContent: "flex-end",
    alignItems: "center",
    borderColor: "lightgrey",
    borderTopWidth: 4,
  },
  details: {
    fontFamily: "MontserratBold",
    justifyContent: "center",
    marginRight: 6,
    fontSize: 12,
    color: "grey",
    // width: "100%",
  },
});

export default styles;
