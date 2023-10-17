import React from "react"
import TabbarIconPresenter from "./presenter"
import { ImageSourcePropType } from "react-native"

export type Props = {
  path: ImageSourcePropType
  title: string
  index: number
}

const TabbarIcon = ({ path, title, index }: Props) => {
  return <TabbarIconPresenter path={path} title={title} index={index} />
}

export default TabbarIcon
