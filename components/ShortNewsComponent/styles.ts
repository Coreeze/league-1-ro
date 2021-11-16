import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,0.8)",
    marginTop: "9%",
    borderRadius: 15,
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    marginHorizontal: 9,
    paddingHorizontal: 10,
    marginBottom: 20,
    paddingBottom: 10,
  },
  container2: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontFamily: "MontserratBold",
    alignSelf: "center",
    fontSize: 20,
    color: "#1C374A",
    paddingVertical: 9,
    borderColor: "lightgrey",
    borderBottomWidth: 4,
  },
  button: {
    flexDirection: "row",
    paddingTop: 9,
    paddingBottom: 3,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  details: {
    fontFamily: "MontserratBold",
    justifyContent: "center",
    marginRight: 6,
    fontSize: 12,
    color: "#1C374A",
  },
});

export default styles;
