import React from "react"
import { Image, ImageSourcePropType, Text, View } from "react-native"
import { Props as ContainerProps } from "./index"
import styles from "./style"

type Props = {} & ContainerProps

const TabbarIconPresenter = ({ path, title, index }: Props) => {
  return (
    <View
      style={[
        styles.iconContainer,
        title === "" ? styles.micIconContainer : null
      ]}
    >
      <Image key={index} source={path} />
      {title !== "" && <Text style={styles.title}>{title}</Text>}
    </View>
  )
}

export default TabbarIconPresenter
