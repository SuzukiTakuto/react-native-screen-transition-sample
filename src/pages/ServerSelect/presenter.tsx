import React from "react"
import UserBar from "../../components/generics/UserBar"
import ServerCard from "../../components/generics/ServerCard"
import { View } from "react-native"
import styles from "./style"

export const ServerSelectPagePresenter = () => {
  return (
    <View style={styles.container}>
      <UserBar test={""} name={"yamashita"}></UserBar>
      <UserBar test={""} name={"yamashita"}></UserBar>
      <UserBar test={""} name={"yamashita"}></UserBar>
      <UserBar test={""} name={"yamashita"}></UserBar>
      <ServerCard
        test={""}
        serverName={"yamashita"}
        serverId={"0801"}
      ></ServerCard>
    </View>
  )
}
