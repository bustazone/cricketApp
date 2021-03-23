import { ScrollView, Text, View } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import TextInput from 'components/text_input'
import { RoutineViewProps, RoutineViewState } from 'pages/create_edit_routine/view.types'
import { TouchableOpacity } from 'react-native-gesture-handler'
import BubbleInputView from 'components/bubble_input'
import { DaysOfTheWeekEnum, Routine } from 'models/day_routine'
import Button from "components/button";

const CreateEditRoutineView: FC<RoutineViewProps> = (props: RoutineViewProps) => {
  const [state, setState] = useState<RoutineViewState>({
    currentRoutine: {},
  })
  function setData(field: keyof Routine) {
    return (value: any) => {
      setState(s => ({ ...s, currentRoutine: { ...s.currentRoutine, [field]: value } }))
    }
  }
  useEffect(() => {
    setState(s => ({ ...s, currentRoutine: props.routine || {} }))
  }, [props.routine])
  return (
    <View>
      <Text onPress={() => {}}>{JSON.stringify(state.currentRoutine)}</Text>
      <TextInput
        label={'Name'}
        value={state.currentRoutine?.name}
        onTextChange={setData('name')}
        // errorText={emailError}
      />
      <BubbleInputView
        label={'Days'}
        value={state.currentRoutine.days?.map(i => i.toString())}
        items={[...Array(7).keys()].map(it => {
          return {
            valueId: it.toString(),
            label: DaysOfTheWeekEnum[it],
          }
        })}
        type={'multi'}
        onSelectionChanged={setData('days')}
      />
      <BubbleInputView
        label={'Color'}
        value={state.currentRoutine.color ? [state.currentRoutine.color] : []}
        items={[
          { valueId: '#F00', color: '#F00' },
          { valueId: '#0F0', color: '#0F0' },
          { valueId: '#00F', color: '#00F' },
          { valueId: '#808080', color: '#808080' },
        ]}
        type={'single'}
        onSelectionChanged={value => setData('color')(value[0])}
      />
      <ScrollView horizontal>
        <TouchableOpacity
          onPress={() => props.goToTask(undefined)}
          style={{ backgroundColor: 'yellow', width: 150, margin: 10 }}>
          <Text>Add</Text>
        </TouchableOpacity>
        {state.currentRoutine.tasks?.map(taskId => {
          const task = props.tasks.find(it => it.id === taskId)
          return (
            <TouchableOpacity
              onPress={() => props.goToTask(taskId)}
              style={{ backgroundColor: state.currentRoutine?.color, width: 250, margin: 10 }}>
              <Text>{task?.name}</Text>
              <Text>Mute</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
      <Button label={'SAVE'} onPress={() => {}} />
      <Button label={'delete'} onPress={() => {}} />
    </View>
  )
}

export default CreateEditRoutineView
