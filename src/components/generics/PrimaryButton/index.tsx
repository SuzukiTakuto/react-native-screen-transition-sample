import React from "react"
import PrimaryButtonPresenter from "./presenter"

export type Props = {
  onPress: () => void
  text: string
}

const PrimaryButton = ({ onPress, text }: Props) => {
  return <PrimaryButtonPresenter onPress={onPress} text={text} />
}

export default PrimaryButton
