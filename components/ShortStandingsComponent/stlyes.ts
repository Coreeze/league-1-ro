import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: "9%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 15,
    marginHorizontal: 9,
    paddingHorizontal: 10,
  },
  title: {
    paddingVertical: 9,
    fontSize: 18,
    fontFamily: "MontserratBold",
    color: "#1C374A",
    alignSelf: "center",
  },
  header: {
    backgroundColor: "white",
    borderBottomWidth: 0,
    height: 33,
    alignItems: "center",
    borderRadius: 9,
  },
  titleText: {
    fontFamily: "MontserratSemiBold",
    fontSize: 15,
  },
  tableText: {
    fontFamily: "MontserratSemiBold",
    fontSize: 15,
    color: "#1C374A",
  },
  row: {
    borderColor: "white",
    borderBottomWidth: 0,
    borderRadius: 15,
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
    color: "#1C374A",
  },

  itemDescription: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    fontFamily: "MontserratSemiBold",
    fontSize: 13,
    color: "#1C374A",
  },
  accordionText: {
    fontFamily: "MontserratSemiBold",
    color: "#1C374A",
    fontSize: 14,
    padding: 6,
  },
  tableHeader: {
    backgroundColor: "white",
    borderRadius: 9,
    borderBottomWidth: 0,
  },
  tableTitle: {
    fontFamily: "MontserratSemiBold",
    fontSize: 15,
  },
});

export default styles;
