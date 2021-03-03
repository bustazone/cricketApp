import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootNavigatorProps } from './index.Types'
import * as Paths from 'support/navigation/route_constants'
import HomeScreen from 'pages/home'
import RoutineScreen from 'pages/create_edit_routine'
import TaskScreen from 'pages/create_edit_task'
import SettingsScreen from 'pages/settings'

const RootStack = createStackNavigator()

class RootNavigator extends Component<RootNavigatorProps> {
  constructor(props: RootNavigatorProps) {
    super(props)
  }

  render() {
    return (
      <RootStack.Navigator mode="modal" headerMode="screen">
        <RootStack.Screen
          name={Paths.HOME}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name={Paths.ROUTINE} component={RoutineScreen} />
        <RootStack.Screen name={Paths.TASK} component={TaskScreen} />
        <RootStack.Screen name={Paths.SETTINGS} component={SettingsScreen} />
      </RootStack.Navigator>
    )
  }
}

export default RootNavigator
