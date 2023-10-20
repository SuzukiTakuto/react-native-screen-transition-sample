import { StyleSheet } from "react-native"
import { colorCode } from "../../../styles/general"

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: colorCode.secondlyBackground,
    borderRadius: 10,
    paddingBottom: 10
  },
  headerText: {
    marginTop: 15,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 20
  },
  subText: {
    color: "#898F99",
    fontWeight: "bold",
    fontSize: 15,
    marginVertical: 5,
    marginLeft: 20
  },
  red: {
    color: "red"
  }
})

export default styles
