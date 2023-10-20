import React from "react"
import ServerCard from "../../components/generics/ServerCard"
import { ScrollView, View } from "react-native"
import styles from "./style"

export const ServerSelectPagePresenter = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <ServerCard
          test={""}
          serverName={"yamashita"}
          serverId={"0801"}
          userList={[
            "yamashita",
            "yamashita",
            "yamashita",
            "yamashita",
            "yamashita",
            "yamashita"
          ]}
        ></ServerCard>
        <ServerCard
          test={""}
          serverName={"yamashita"}
          serverId={"0801"}
          userList={[
            "yamashita",
            "yamashita",
            "yamashita",
            "yamashita",
            "yamashita",
            "yamashita"
          ]}
        ></ServerCard>
        <ServerCard
          test={""}
          serverName={"yamashita"}
          serverId={"0801"}
          userList={[
            "yamashita",
            "yamashita",
            "yamashita",
            "yamashita",
            "yamashita",
            "yamashita"
          ]}
        ></ServerCard>
      </ScrollView>
    </View>
  )
}
