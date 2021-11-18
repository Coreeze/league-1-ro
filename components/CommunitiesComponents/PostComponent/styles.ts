import { StyleSheet } from "react-native";
import constants from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 6,
    marginHorizontal: 6,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: constants.cardBlurBackground,
    borderRadius: 15,
  },
});

export default styles;
