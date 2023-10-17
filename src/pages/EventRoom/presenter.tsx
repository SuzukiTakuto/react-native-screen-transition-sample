import React, { FC } from "react"
import { View, ScrollView } from "react-native"
import { colorCode } from "../../styles/general"
import InteractiveCircularIcon from "../../components/generics/InteractiveCircularIcon"
import Tabbar from "../../components/generics/Tabbar"

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
          {[0, 1, 2, 3, 4, 5].map((i) => {
            return (
              <InteractiveCircularIcon
                key={i}
                url={{ image: require("./yamashita.png") }}
                name={"yamashita"}
              />
            )
          })}
        </ScrollView>
        <Tabbar />
      </View>
    </>
  )
}

export default EventRoomPresenter
