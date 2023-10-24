import React from "react"
import TabbarIconPresenter from "./presenter"
import { ImageSourcePropType } from "react-native"

export type Props = {
  path: ImageSourcePropType
  title: string
  index: number
  onClick: (index: number) => void
  isGame: boolean
}

const TabbarIcon = ({ path, title, index, onClick, isGame }: Props) => {
  return (
    <TabbarIconPresenter
      path={path}
      title={title}
      index={index}
      isGame={isGame}
      onClick={onClick}
    />
  )
}

export default TabbarIcon
