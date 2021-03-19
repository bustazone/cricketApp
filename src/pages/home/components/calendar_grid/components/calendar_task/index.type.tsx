import { RoutineTask } from 'models/day_routine'

export type CalendarTaskPropsType = {
  type: 'day' | 'week'
  task: RoutineTask
  totalColumsCount?: number
  currentColumn?: number
}
