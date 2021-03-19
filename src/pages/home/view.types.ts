import { ActiveTask, RoutineTask } from 'models/day_routine'

export type HomeViewState = {
  tab: string
}
export type HomeViewInputProps = {
  activeTasks: ActiveTask[]
  tasks: RoutineTask[]
}
export type HomeViewEventProps = {}
export type HomeViewProps = HomeViewInputProps & HomeViewEventProps
