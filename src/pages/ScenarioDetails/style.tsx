import { StyleSheet } from "react-native"
import { colorCode, staticSizeValue } from "../../styles/general"

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorCode.primaryBackground
  },
  image: {
    width: "100%"
  },
  card: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 16
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    paddingTop: 8,
    paddingBottom: 4
  },
  evaluation: {
    flexDirection: "row"
  },
  rating: {
    fontSize: 11,
    color: "#FFC148",
    paddingRight: 4
  },
  info: {
    flexDirection: "row",
    paddingTop: 4
  },
  infoText: {
    fontSize: 13,
    color: "#DADEE1"
  }
})

export default styles
