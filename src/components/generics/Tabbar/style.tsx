import { StyleSheet } from "react-native"
import { colorCode } from "../../../styles/general"

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: "#000000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 7,
    paddingBottom: 31
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30
  },
  red: {
    color: "red"
  }
})

export default styles
