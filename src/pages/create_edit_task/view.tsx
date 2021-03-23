import { Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TextInput from 'components/text_input'
import DateInput from 'components/date_input'
import { TaskViewProps, TaskViewState } from 'pages/create_edit_task/view.types'
import { RoutineTask } from 'models/day_routine'
import Button from 'components/button'

const CreateEditTaskView = (props: TaskViewProps) => {
  const [state, setState] = useState<TaskViewState>({
    currentTask: {},
  })
  function setData(field: keyof RoutineTask) {
    return (value: any) => {
      setState(s => ({ ...s, currentTask: { ...s.currentTask, [field]: value } }))
    }
  }
  useEffect(() => {
    setState(s => ({ ...s, currentTask: props.task || {} }))
  }, [props.task])
  return (
    <View>
      <Text onPress={() => {}}>{JSON.stringify(state.currentTask)}</Text>
      <TextInput
        label={'Name'}
        value={state.currentTask.name}
        // errorText={emailError}
        onTextChange={setData('name')}
      />
      <TextInput
        label={'Message'}
        value={state.currentTask.message}
        // errorText={emailError}
        onTextChange={setData('message')}
        // type={'email'}
        // disabled={props.loading}
      />
      <DateInput
        label={'Start Time'}
        mode={'time'}
        value={state.currentTask.hourStart ? new Date(state.currentTask?.hourStart) : undefined}
        onDateChanged={date => {
          setData('hourStart')(date.toString())
        }}
      />
      <TextInput
        label={'Duration'}
        value={state.currentTask.durationMinutes?.toString()}
        // errorText={emailError}
        onTextChange={setData('durationMinutes')}
        type={'numeric'}
        // disabled={props.loading}
      />
      <TextInput
        label={'Notes'}
        value={state.currentTask.notes}
        // errorText={emailError}
        onTextChange={setData('notes')}
        // type={'email'}
        // disabled={props.loading}
      />
      <Button label={'SAVE'} onPress={() => {}} />
      <Button label={'delete'} onPress={() => {}} />
    </View>
  )
}

export default CreateEditTaskView
