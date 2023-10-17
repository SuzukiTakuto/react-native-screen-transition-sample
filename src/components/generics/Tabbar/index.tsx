import React from "react"
import TabbarPresenter from "./presenter"
import { ImageSourcePropType } from "react-native"

const icons = [
  { path: require("./icons/mic.png"), title: "" },
  { path: require("./icons/scenario.png"), title: "情報" },
  { path: require("./icons/chat.png"), title: "チャット" },
  { path: require("./icons/setting.png"), title: "設定" }
]

const Tabbar = () => {
  return <TabbarPresenter icons={icons} />
}

export default Tabbar
