import React from "react"
import UserBarPresenter from "./presenter"

export type Props = {
  name: string
}

const UserBar = ({ name }: Props) => {
  return <UserBarPresenter url={undefined} name={name} />
}

export default UserBar
