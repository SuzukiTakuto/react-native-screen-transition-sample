import React from "react"
import { Text, View } from "react-native"
import { Props as ContainerProps } from "./index"
import styles from "./style"
import UserBar from "../UserBar"
import PurpleButton from "../PurpleButton"

type Props = {
  url: any
  userList: string[]
} & ContainerProps

const ServerCardPresenter = ({ serverName, serverId, userList }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{serverName}のサーバ</Text>
        <PurpleButton
          style={styles.headerButton}
          title={"入室申請"}
        ></PurpleButton>
      </View>
      <Text style={styles.subText}>ID : {serverId}</Text>
      {userList.map((user, index) => {
        return <UserBar name={user} key={index}></UserBar>
      })}
    </View>
  )
}

export default ServerCardPresenter
