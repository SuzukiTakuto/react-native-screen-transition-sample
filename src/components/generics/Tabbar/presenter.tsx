import React from "react"
import { Image, ImageSourcePropType, Text, View } from "react-native"
import styles from "./style"
import TabbarIcon from "../TabbarIcon"

type Props = {
  icons: { path: ImageSourcePropType; title: string }[]
  setIsOpenInfo?: any
  onClick: (index: number) => void
  isGame: boolean
}

const TabbarPresenter = ({ icons, onClick, isGame }: Props) => {
  return (
    <View style={styles.container}>
      {icons.map((icon, index) => {
        return (
          <TabbarIcon
            path={icon.path}
            title={icon.title}
            index={index}
            isGame={isGame}
            onClick={onClick}
          />
        )
      })}
    </View>
  )
}

export default TabbarPresenter
