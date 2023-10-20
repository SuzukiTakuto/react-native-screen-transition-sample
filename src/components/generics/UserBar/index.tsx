import React from "react"
import UserBarPresenter from "./presenter"

export type Props = {
  test: string
  name: string
}

const UserBar = ({ test, name }: Props) => {
  return <UserBarPresenter test={test} url={undefined} name={name} />
}

export default UserBar
