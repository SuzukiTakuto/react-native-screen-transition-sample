import { StyleSheet } from "react-native"
import { colorCode, staticSizeValue } from "../../styles/general"

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorCode.primaryBackground
  },
  searchBarContainer: {
    backgroundColor: colorCode.primaryBackground,
    flexDirection: "row",
    alignItems: "center"
  },
  purpleButton: {
    marginLeft: 20
  }
})

export default styles
