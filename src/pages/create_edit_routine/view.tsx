import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import TextInput from 'components/text_input'

const CreateEditRoutineView = () => {
  return (
    <View>
      <Text onPress={() => {}}>ACTIVE</Text>
      <TextInput
        label={'Label'}
        // value={email}
        // errorText={emailError}
        // onTextChange={setEmail}
        type={'email'}
        // disabled={props.loading}
      />
      <ScrollView>
        <Text />
      </ScrollView>
      <ScrollView horizontal>
        <Text />
      </ScrollView>
    </View>
  )
}

export default CreateEditRoutineView
