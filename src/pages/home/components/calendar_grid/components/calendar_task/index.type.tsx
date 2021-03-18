import { ActiveTask } from 'models/day_routine'

export type CalendarTaskPropsType = {
  type: 'day' | 'week'
  task: ActiveTask
  totalColumsCount?: number
  currentColumn?: number
}
