import { ActiveTask } from 'models/day_routine'

export type HomeViewState = {
  tab: string
}
export type HomeViewInputProps = {
  activeTasks: ActiveTask[]
}
export type HomeViewEventProps = {}
export type HomeViewProps = HomeViewInputProps & HomeViewEventProps
