import React from "react"
import { View, Image, Text } from "react-native"
import styles from "./style"
import Evaluation from "../Evaluation"

type Props = {
  thumbnail: any
  title: string
  rating: number
  numberOfPeople: number
  timeLimit: string
}

const ScenarioItemPresenter = ({
  thumbnail,
  title,
  rating,
  numberOfPeople,
  timeLimit
}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={thumbnail} style={styles.thumbnail} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.evaluation}>
        <Text style={styles.rating}>{rating.toFixed(1)}</Text>
        <Evaluation rating={rating} />
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>{numberOfPeople}人/</Text>
        <Text style={styles.infoText}>{timeLimit}</Text>
      </View>
    </View>
  )
}

export default ScenarioItemPresenter
