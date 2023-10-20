import React from "react"
import { Text, View } from "react-native"
import { Props as ContainerProps } from "./index"
import styles from "./style"
import CircularIcon from "../CircularIcon"

type Props = {
  url: any
  name: string
} & ContainerProps

const UserBarPresenter = ({ name }: Props) => {
  return (
    <>
      <View style={styles.container}>
        <CircularIcon
          url={{ image: require("./yamashita.png") }}
          styles={styles.icon}
        ></CircularIcon>
        <Text style={styles.text}>{name}</Text>
      </View>
    </>
  )
}

export default UserBarPresenter
