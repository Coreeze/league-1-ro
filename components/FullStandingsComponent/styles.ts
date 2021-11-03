import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 9,
    width: "100%",
  },
  table: {
    backgroundColor: "white",
    // paddingVertical: 10,
    marginTop: 12,
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
    flex: 3,
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
});

export default styles;
