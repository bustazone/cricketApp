import { StyleProp, ViewStyle } from 'react-native'
import { ActiveTask, DayOfTheWeek } from 'models/day_routine'

export type CalendarGridPropsType = {
  type: 'day' | 'week'
  day?: DayOfTheWeek
  tasks: ActiveTask[]
  style?: StyleProp<ViewStyle>
}
