import React, { FunctionComponent } from 'react'
import { View, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { TasksViewProps } from 'pages/home/components/tasks/view.types'

const TasksView: FunctionComponent<TasksViewProps> = props => {
  return (
    <View
      style={[
        {
          flex: 1,
          margin: 20,
          backgroundColor: 'pink',
        },
      ]}>
      <Text>Routines</Text>
      <ScrollView horizontal>
        <TouchableOpacity
          onPress={() => props.goToRoutine(undefined)}
          style={{ backgroundColor: 'yellow', width: 150, margin: 10 }}>
          <Text>Add</Text>
        </TouchableOpacity>
        {props.routines.map(routine => {
          return (
            <TouchableOpacity
              onPress={() => props.goToRoutine(routine.id)}
              style={{ backgroundColor: routine.color, width: 250, margin: 10 }}>
              <Text>{routine.name}</Text>
              <Text>Mute</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
      <Text>Each Time Alarms</Text>
      <ScrollView horizontal>
        <TouchableOpacity
          onPress={props.newRecurringTask}
          style={{ backgroundColor: 'yellow', width: 150, margin: 10 }}>
          <Text>Add</Text>
        </TouchableOpacity>
        <View style={{ backgroundColor: 'yellow', width: 250, margin: 10 }}>
          <Text>Each x seconds</Text>
          <Text>Mute</Text>
        </View>
        <View />
      </ScrollView>
      <Text>Temporizer</Text>
      <ScrollView horizontal>
        <TouchableOpacity
          onPress={props.newTemporizerTasks}
          style={{ backgroundColor: 'yellow', width: 150, margin: 10 }}>
          <Text>Add</Text>
        </TouchableOpacity>
        <View style={{ backgroundColor: 'yellow', width: 250, margin: 10 }}>
          <Text>In x seconds/minutes</Text>
          <Text>Delete</Text>
        </View>
      </ScrollView>
      <Text>Time Alarm</Text>
      <ScrollView horizontal>
        <TouchableOpacity
          onPress={props.newUniqueTasks}
          style={{ backgroundColor: 'yellow', width: 150, margin: 10 }}>
          <Text>Add</Text>
        </TouchableOpacity>
        <View style={{ backgroundColor: 'yellow', width: 250, margin: 10 }}>
          <Text>Each x seconds</Text>
          <Text>Delete</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default TasksView
