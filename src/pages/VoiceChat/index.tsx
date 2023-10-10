import React, { useState, useEffect, FC } from "react"
import type { RootRoutesParamList } from "../../routes/Root"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import SocketPresentational from "./SocketPresentational"
import { Device } from "mediasoup-client"
import { Transport } from "mediasoup-client/lib/Transport"
import { Producer } from "mediasoup-client/lib/Producer"
import { MediaStream, mediaDevices, registerGlobals } from "react-native-webrtc"

registerGlobals()

let device: Device
let stream: MediaStream
let sendTransport: Transport
let recvTransport: Transport
let producerId: string

let ws: WebSocket

const SOCKET_DEV = "ws://192.168.0.20:8080"

type Props = NativeStackScreenProps<RootRoutesParamList, "VoiceChatPage">

const VoiceChatPage: FC<Props> = () => {
  const emit = (data: {}) => {
    ws.send(JSON.stringify(data))
  }

  const setCapabilities = async (data: any) => {
    const routerRtpCapabilities = data.routerRtpCapabilities
    await device.load({ routerRtpCapabilities })
    emit({ type: "transport" }) // 設定が終わったらtransportを要求
  }

  const setTransport = async (data: any) => {
    sendTransport = await createTransport(data.sendTransport, "send")
    recvTransport = await createTransport(data.recvTransport, "recv")
    await produceMedia()
  }

  const setProduce = async (data: any) => {
    producerId = data.id
  }

  const setConsume = async (data: any) => {
    const option = data

    const consumer = await recvTransport.consume({
      id: option.id,
      producerId: producerId,
      kind: option.kind,
      rtpParameters: option.rtpParameters
    })

    console.log(consumer.track)
  }

  const createTransport = async (
    data: any,
    type: string
  ): Promise<Transport> => {
    let transport: Transport | undefined = undefined
    switch (type) {
      case "send":
        transport = device.createSendTransport(data)
        break
      case "recv":
        transport = device.createRecvTransport(data)
        break
    }

    if (!transport) {
      throw new Error("Failed to create transport")
    }

    transport.on("connect", async ({ dtlsParameters }, callback) => {
      emit({
        type: "connect",
        id: transport?.id,
        dtlsParameters: dtlsParameters
      })
      callback()
    })

    transport.on("produce", async (parameters, callback) => {
      emit({ type: "produce", id: transport?.id, parameters })
    })

    return transport
  }

  const produceMedia = async () => {
    const track = stream.getAudioTracks()[0]
    const producer = await sendTransport.produce({ track })
  }

  const connectHandler = async () => {
    stream = await mediaDevices.getUserMedia({
      audio: true,
      video: false
    })
    device = new Device()

    //SOCKET_URLの中身のところに接続を要求
    ws = new WebSocket(SOCKET_DEV)

    ws.onopen = () => {
      console.log("WebSocket Client Connected")
      emit({ type: "capabilities" })
    }

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data)
      switch (data.type) {
        case "capabilities":
          setCapabilities(data.data)
          break
        case "transport":
          setTransport(data)
          break
        case "produce":
          setProduce(data)
          break
        case "consume":
          setConsume(data)
          break
      }
    }
  }

  const callHandler = () => {
    emit({
      type: "consume",
      id: recvTransport.id,
      producerId: producerId,
      rtpCapabilities: device.rtpCapabilities
    })
  }

  return (
    <SocketPresentational
      connectHandler={connectHandler}
      callHandler={callHandler}
    />
  )
}

export default VoiceChatPage
