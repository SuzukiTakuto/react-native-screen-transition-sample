import React from "react"
import ServerCardPresenter from "./presenter"

export type Props = {
  test: string
  serverName: string
  serverId: string
}

const ServerCard = ({ test, serverName }: Props) => {
  return (
    <ServerCardPresenter
      test={test}
      url={undefined}
      serverName={serverName}
      serverId={""}
    />
  )
}

export default ServerCard
