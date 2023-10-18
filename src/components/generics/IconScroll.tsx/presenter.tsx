import React from "react"
import { ScrollView, Text, View } from "react-native"
import { Props as ContainerProps } from "./index"
import styles from "./style"
import InteractiveCircularIcon from "../InteractiveCircularIcon"

type Props = {
  url: any
} & ContainerProps

const IconScrollPresenter = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={{ backgroundColor: "black" }}>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          return (
            <InteractiveCircularIcon
              key={i}
              url={{ image: require("./yamashita.png") }}
              name={"yamashita"}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default IconScrollPresenter
