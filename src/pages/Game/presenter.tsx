import React, { useEffect } from "react"
import { ScrollView, Text, View } from "react-native"
import TopHeader from "../../components/generics/TopHeader"
import IconScroll from "../../components/generics/IconScroll"
import Tabbar from "../../components/generics/Tabbar"
import { Props as ContainerProps } from "./index"
import styles from "./style"
import Characters from "../../components/generics/Characters"
import GameHeader from "./GameHeader"
import SelectCharacterCard from "./SelectCharacterCard"

type Props = {
  isInfoVisible: boolean
  setIsInfoVisible: React.Dispatch<React.SetStateAction<boolean>>
  isChatVisible: boolean
  setIsChatVisible: React.Dispatch<React.SetStateAction<boolean>>
  isSettingsVisible: boolean
  setIsSettingsVisible: React.Dispatch<React.SetStateAction<boolean>>
  isOpenInfo: boolean
  setIsOpenInfo: React.Dispatch<React.SetStateAction<boolean>>
  nowPhase: number
  navigation: any
  setNowPhase: React.Dispatch<React.SetStateAction<number>>
} & ContainerProps

const GamePresenter = ({
  scenario,
  isInfoVisible,
  setIsInfoVisible,
  isChatVisible,
  setIsChatVisible,
  isSettingsVisible,
  setIsSettingsVisible,
  isOpenInfo,
  setIsOpenInfo,
  nowPhase,
  navigation,
  setNowPhase
}: Props) => {
  const renderContent = () => {
    switch (nowPhase) {
      case 0:
        return scenario.characters.map((character, index) => (
          <SelectCharacterCard key={index} character={character} />
        ))
      case 1:
        return (
          <Text style={{ color: "#fff" }}>
            画面下部の「情報」にキャラクターシートが配布されました。ミュートにした状態で読み込んで下さい。
          </Text>
        )
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <GameHeader
        props={{
          title: scenario.phase[nowPhase],
          navigation,
          nowPhase,
          setNowPhase
        }}
      />
      <IconScroll />
      <ScrollView style={styles.container}>{renderContent()}</ScrollView>
      <Tabbar
        isGame={true}
        isInfoVisible={isInfoVisible}
        setIsOpenInfo={setIsOpenInfo}
      />
      {isOpenInfo && (
        <View>
          <Text>sdfsdf</Text>
        </View>
      )}
    </View>
  )
}

export default GamePresenter
