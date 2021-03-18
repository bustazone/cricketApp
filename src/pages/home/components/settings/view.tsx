import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CalendarGrid from 'pages/home/components/calendar_grid'
import { DayOfTheWeek } from 'models/day_routine'
import ActionModules from 'pages/home/components/actions_modules'
import { goToRoutine } from 'support/navigation/service'

const SettingsView = () => {
  return (
    <View
      style={[
        {
          flex: 1,
          margin: 20,
          backgroundColor: 'pink',
        },
      ]}>
      <Text
        onPress={() => {
          goToRoutine('vvvv')
        }}>
        Navigate
      </Text>
    </View>
  )
}

export default SettingsView
