import React from "react"
import ServerCardPresenter from "./presenter"

export type Props = {
  serverName: string
  serverId: string
  userList: string[]
}

const ServerCard = ({ serverName, serverId, userList }: Props) => {
  return (
    <ServerCardPresenter
      url={undefined}
      serverName={serverName}
      serverId={serverId}
      userList={userList}
    />
  )
}

export default ServerCard
