import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SettingsPage } from "../../pages/Settings"
import { HomePage } from "../../pages/Home"
import { LoginPage } from "../../pages/Login"
import { SignUpPage } from "../../pages/SignUp"
import { ChatPage } from "../../pages/Chat"
import VoiceChatPage from "../../pages/VoiceChat"
import Agora from "../../pages/Agora"
import { EventRoomPage } from "../../pages/EventRoom"
import ScenarioSelectionPage from "../../pages/ScenarioSelection"
import ScenarioDetailsPage from "../../pages/ScenarioDetails"

const Stack = createNativeStackNavigator<RootRoutesParamList>()

export type RootRoutesParamList = {
  HomePage: undefined
  DetailPage: undefined
  LoginPage: undefined
  SignUpPage: undefined
  ChatPage: undefined
  VoiceChatPage: undefined
  Agora: undefined
  EventRoomPage: undefined
  ScenarioSelectionPage: undefined
  ScenarioDetailsPage: {
    thumbnail: any
    title: string
    rating: number
    numberOfPeople: number
    timeLimit: string
  }
}

export const RootRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomePage}
        name="HomePage"
        options={{ title: "Home" }}
      />
      <Stack.Screen
        component={SettingsPage}
        name="DetailPage"
        options={{ title: "Detail" }}
      />
      <Stack.Screen
        component={VoiceChatPage}
        name="VoiceChatPage"
        options={{ title: "VoiceChat" }}
      />
      <Stack.Screen
        component={LoginPage}
        name="LoginPage"
        options={{ title: "Detail" }}
      />
      <Stack.Screen
        component={SignUpPage}
        name="SignUpPage"
        options={{ title: "SignUp" }}
      />
      <Stack.Screen
        component={ChatPage}
        name="ChatPage"
        options={{ title: "Chat" }}
      />
      <Stack.Screen
        component={Agora}
        name="Agora"
        options={{ title: "Agora" }}
      />
      <Stack.Screen
        component={EventRoomPage}
        name="EventRoomPage"
        options={{ title: "EventRoom" }}
      />
      <Stack.Screen
        component={ScenarioSelectionPage}
        name="ScenarioSelectionPage"
        options={{ title: "ScenarioSelection" }}
      />
      <Stack.Screen
        component={ScenarioDetailsPage}
        name="ScenarioDetailsPage"
        options={{ title: "ScenarioDetails" }}
      />
    </Stack.Navigator>
  )
}
