import React from "react"
import { Image } from "react-native"
import styles from "./style"

type Props = {
  url: any
  styles: any
}

const CircularIconPresenter = (props: Props) => {
  console.log({...styles.circularImage, styles})
  return <Image source={props.url.image} style={[styles.circularImage, props.styles]} />
}

export default CircularIconPresenter
