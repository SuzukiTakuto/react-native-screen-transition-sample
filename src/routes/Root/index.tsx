import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SettingsPage } from "../../pages/Settings"
import { HomePage } from "../../pages/Home"
import { LoginPage } from "../../pages/Login"
import { SignUpPage } from "../../pages/SignUp"
import { ChatPage } from "../../pages/Chat"
import Agora from "../../pages/Agora"
import { EventRoomPage } from "../../pages/EventRoom"
import ScenarioSelectionPage from "../../pages/ScenarioSelection"
import ScenarioDetailsPage from "../../pages/ScenarioDetails"
import { ServerSelectPage } from "../../pages/ServerSelect"
import GamePage from "../../pages/Game"

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
  ServerSelect: undefined
  GamePage: undefined
}

export const RootRoutes = () => {
  return (
    // screenOptions={{headerShown: false}}
    <Stack.Navigator>
      <Stack.Screen
        component={ServerSelectPage}
        name="ServerSelect"
        options={{ title: "ServerSelect" }}
      />
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

      <Stack.Screen
        component={GamePage}
        name="GamePage"
        options={{ title: "Game" }}
      />
    </Stack.Navigator>
  )
}
