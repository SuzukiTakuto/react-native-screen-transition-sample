import React, { FC } from "react"
import type { RootRoutesParamList } from "../../routes/Root"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { ServerSelectPagePresenter } from "./presenter"

type Props = NativeStackScreenProps<RootRoutesParamList, "ServerSelect">
export const ServerSelectPage: FC<Props> = () => {
  return (
    <>
      <ServerSelectPagePresenter />
    </>
  )
}
