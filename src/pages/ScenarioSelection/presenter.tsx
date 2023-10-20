import React from "react"
import IconScroll from "../../components/generics/IconScroll"
import Tabbar from "../../components/generics/Tabbar"
import { ScrollView, View } from "react-native"
import TopHeader from "./TopHeader"
import styles from "./style"
import SearchBar from "./SearchBar"
import ScenarioSelector from "./ScenarioSelector"
import PurpleButton from "../../components/generics/PurpleButton"

const ScenarioSelectionPresenter = () => {
  return (
    <View style={{ flex: 1 }}>
      <TopHeader />
      <IconScroll />

      <View style={styles.searchBarContainer}>
        <SearchBar />
        <PurpleButton title={"絞り込み"} style={styles.purpleButton}></PurpleButton>
      </View>

      <ScrollView style={styles.container}>
        <ScenarioSelector title="メンバー募集中のシナリオ" />
        <ScenarioSelector title="新着シナリオ" />
        <ScenarioSelector title="ランキング" />
      </ScrollView>

      <Tabbar />
    </View>
  )
}

export default ScenarioSelectionPresenter
