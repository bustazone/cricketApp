import { StyleProp, ViewStyle } from 'react-native'
import { ActiveTask, DaysOfTheWeekEnum } from 'models/day_routine'

export type CalendarGridPropsType = {
  day?: DaysOfTheWeekEnum
  tasks: ActiveTask[]
  style?: StyleProp<ViewStyle>
}
