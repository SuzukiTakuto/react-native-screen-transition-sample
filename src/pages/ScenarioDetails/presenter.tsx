import React, { FC } from "react"
import { View, Text, Image, ScrollView } from "react-native"
import TopHeader from "../../components/generics/TopHeader"
import IconScroll from "../../components/generics/IconScroll"
import Tabbar from "../../components/generics/Tabbar"
import Evaluation from "../../components/generics/Evaluation"
import styles from "./style"

type Props = {
  thumbnail: any
  title: string
  rating: number
  numberOfPeople: number
  timeLimit: string
  author: string
  authorIcon: any
}

const ScenarioDetailsPresenter: FC<Props> = ({
  thumbnail,
  title,
  rating,
  numberOfPeople,
  timeLimit
}) => {
  return (
    <View style={{ flex: 1 }}>
      <TopHeader />
      <IconScroll />

      <ScrollView style={styles.container}>
        <Image source={thumbnail} style={styles.image} />

        <View style={styles.card}>
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

        <View></View>
      </ScrollView>

      <Tabbar />
    </View>
  )
}

export default ScenarioDetailsPresenter
