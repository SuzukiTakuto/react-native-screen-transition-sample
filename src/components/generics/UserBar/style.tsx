import { StyleSheet } from "react-native"
import { colorCode } from "../../../styles/general"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colorCode.secondlyBackground,
    borderColor: colorCode.border,
    borderWidth: 0.5
  },
  icon: {
    marginLeft: 20,
    marginRight: 20,
    marginVertical: 10
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 15
  }
})

export default styles
