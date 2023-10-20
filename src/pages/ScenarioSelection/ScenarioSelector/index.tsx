import React from "react"
import { View } from "react-native"
import ScenarioSelectorPresenter from "./presenter"

type Props = {
  title: string
}

const ScenarioSelector = ({ title }: Props) => {
  return <ScenarioSelectorPresenter title={title} />
}

export default ScenarioSelector
