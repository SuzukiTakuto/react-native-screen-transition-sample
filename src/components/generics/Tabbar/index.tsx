import React from "react"
import TabbarPresenter from "./presenter"
import { ImageSourcePropType } from "react-native"

type Props = {
  isInfoVisible?: boolean
  setIsOpenInfo?: any
  isGame: boolean
}
const Tabbar = ({ isInfoVisible, setIsOpenInfo, isGame }: Props) => {
  const icons = [
    { path: require("./icons/mic.png"), title: "" },
    { path: require("./icons/scenario.png"), title: "情報" },
    { path: require("./icons/chat.png"), title: "チャット" },
    { path: require("./icons/setting.png"), title: "設定" }
  ]

  if (isInfoVisible) {
    //icons[1].path = require("./icons/scenario_active.png")
  }

  const onClick = (index: number) => {
    if (index === 1 && isInfoVisible) {
      setIsOpenInfo(true)
    }
  }
  return (
    <TabbarPresenter
      icons={icons}
      setIsOpenInfo={setIsOpenInfo}
      onClick={onClick}
      isGame={isGame}
    />
  )
}

export default Tabbar
