import React from 'react'
import { View, Text } from 'react-native'
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
