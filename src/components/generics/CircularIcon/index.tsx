import React from "react"
import CircularIconPresenter from "./presenter"

type Props = {
  url: any
}

const CircularIcon = ({ url }: Props) => {
  return <CircularIconPresenter url={url} />
}

export default CircularIcon
