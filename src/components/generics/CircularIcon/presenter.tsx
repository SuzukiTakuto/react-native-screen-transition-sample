import React from "react"
import { Image } from "react-native"
import styles from "./style"

type Props = {
  url: any
}

const CircularIconPresenter = ({ url }: Props) => {
  return <Image source={url.image} style={styles.circularImage} />
}

export default CircularIconPresenter
