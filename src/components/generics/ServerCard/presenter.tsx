import React from "react"
import { Text, View } from "react-native"
import { Props as ContainerProps } from "./index"
import styles from "./style"
import UserBar from "../UserBar"

type Props = {
  url: any
} & ContainerProps

const ServerCardPresenter = ({ url, serverName, serverId }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{serverName}のサーバ</Text>
      <Text style={styles.subText}>ID : {serverId}</Text>
      <UserBar test={""} name={"yamashita"}></UserBar>
      <UserBar test={""} name={"yamashita"}></UserBar>
      <UserBar test={""} name={"yamashita"}></UserBar>
      <UserBar test={""} name={"yamashita"}></UserBar>
    </View>
  )
}

export default ServerCardPresenter
