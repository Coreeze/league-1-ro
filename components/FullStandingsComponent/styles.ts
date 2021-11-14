import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 9,
    width: "100%",
    paddingBottom: 20,
  },
  table: {
    backgroundColor: "white",
    marginTop: 9,
    borderRadius: 15,
  },
  title: {
    paddingVertical: 9,
    paddingLeft: 15,
    fontSize: 15,
    fontFamily: "MontserratBold",
    color: "#1C374A",
  },
  header: {
    backgroundColor: "lightgrey",
  },
  titleText: {
    fontFamily: "MontserratSemiBold",
    fontSize: 13,
  },
  tableText: {
    fontFamily: "MontserratSemiBold",
    fontSize: 13,
    color: "#1C374A",
  },
  row: {
    borderColor: "grey",
    borderBottomWidth: 1,
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
    fontSize: 13,
    padding: 6,
  },
});

export default styles;
