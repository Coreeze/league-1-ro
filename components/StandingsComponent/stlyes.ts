import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginBottom: 60,
    width: "100%",
    backgroundColor: "white",
  },
  title: {
    paddingVertical: 9,
    fontSize: 15,
    fontFamily: "MontserratBold",
    color: "#1C374A",
  },
  header: {
    backgroundColor: "lightgrey",
    height: 33,
    alignItems: "center",
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
    fontFamily: "MontserratBold",
    paddingRight: 6,
    paddingVertical: 9,
    fontSize: 12,
    color: "grey",
  },
});

export default styles;
