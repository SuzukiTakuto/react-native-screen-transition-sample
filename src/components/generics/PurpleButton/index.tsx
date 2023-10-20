import React from "react"
import PurpleButtonPresenter from "./presenter"

export type Props = {
  title: string
  style?: any
}

const PurpleButton = ({ style, title }: Props) => {
  return (
    <PurpleButtonPresenter
      url={undefined}
      style={style}
      title={title}
    />
  )
}

export default PurpleButton
