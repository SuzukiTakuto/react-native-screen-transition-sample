import React from "react"
import { Text, View } from "react-native"
import styles from "./style"
import PurpleButton from "../../../components/generics/PurpleButton"
import { Props as ContainerProps } from "./index"

type Props = {
  onClick: () => void
} & ContainerProps

const GameHaderPresenter = ({ props, onClick }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      {props.nowPhase === 0 ? (
        <PurpleButton
          onClick={onClick}
          title={"次へ"}
          style={styles.purpleButton}
        />
      ) : (
        <View>
          <Text>timer</Text>
        </View>
      )}
    </View>
  )
}

export default GameHaderPresenter
