import React from "react"
import { Text, View, Button } from "react-native"
import { RTCView } from "react-native-webrtc"

type Props = {
  connectHandler: () => void
  callHandler: () => void
}

const SocketPresentational: React.FC<Props> = ({
  connectHandler,
  callHandler
}) => {
  return (
    <View>
      <Text>Chat</Text>
      <Button title="connection" onPress={connectHandler} />
      <Button title="call" onPress={callHandler} />
    </View>
  )
}

export default SocketPresentational
