import React from "react"
import { Pressable, View, Text } from "react-native"
import styles from "./style"
import { Props } from "./index"
import LinearGradient from "react-native-linear-gradient"

const PrimaryButtonPresenter = ({ onPress, text }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <LinearGradient
          colors={["#238EA6", "#23A68E"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.buttonContainer}
        >
          <Text style={styles.text}>{text}</Text>
        </LinearGradient>
      </Pressable>
    </View>
  )
}

export default PrimaryButtonPresenter
