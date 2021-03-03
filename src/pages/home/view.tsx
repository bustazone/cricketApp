import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import * as Navigator from 'support/navigation/service'

const HomeView = () => {
  return (
    <View>
      <Text onPress={() => {
          Navigator.goToRoutine('')
      }}>ACTIVE</Text>
      <ScrollView>
        <Text />
      </ScrollView>
      <ScrollView horizontal>
        <Text />
      </ScrollView>
    </View>
  )
}

export default HomeView
