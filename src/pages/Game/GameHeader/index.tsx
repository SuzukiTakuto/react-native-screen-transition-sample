import React from "react"
import GameHaderPresenter from "./presenter"

export type Props = {
  props: {
    title: string
    navigation: any
    nowPhase: number
    setNowPhase: React.Dispatch<React.SetStateAction<number>>
  }
}

const GameHeader = ({ props }: Props) => {
  const onClick = () => {
    props.setNowPhase((prev: number) => prev + 1)
  }
  return <GameHaderPresenter props={props} onClick={onClick} />
}

export default GameHeader
