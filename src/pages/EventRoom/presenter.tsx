import React, { FC } from "react"
import { View, ScrollView } from "react-native"
import { colorCode } from "../../styles/general"
import InteractiveCircularIcon from "../../components/generics/InteractiveCircularIcon"
import Tabbar from "../../components/generics/Tabbar"
import IconScroll from "../../components/generics/IconScroll.tsx"

type Props = {}

const EventRoomPresenter: React.FC<Props> = ({}) => {
  return (
    <>
      <View
        style={{
          backgroundColor: colorCode.primaryBackground
        }}
      >
        <ScrollView horizontal style={{ backgroundColor: "black" }}>
          <IconScroll />
        </ScrollView>
        <Tabbar />
      </View>
    </>
  )
}

export default EventRoomPresenter
