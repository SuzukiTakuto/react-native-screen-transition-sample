import React from "react"
import { Button, Text, TouchableHighlight, View } from "react-native"
import { Props as ContainerProps } from "./index"
import styles from "./style"

type Props = {
  url: any
  style: any
} & ContainerProps

const PurpleButtonPresenter = ({ style, title }: Props) => {
  return (
    <TouchableHighlight style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  )
}

export default PurpleButtonPresenter
