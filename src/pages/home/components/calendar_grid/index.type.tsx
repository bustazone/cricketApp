import { StyleProp, ViewStyle } from 'react-native'
import { ActiveTask, DaysOfTheWeekEnum, RoutineTask } from 'models/day_routine'

export type CalendarGridPropsType = {
  day?: DaysOfTheWeekEnum
  activedTasks: ActiveTask[]
  tasks: RoutineTask[]
  style?: StyleProp<ViewStyle>
}
