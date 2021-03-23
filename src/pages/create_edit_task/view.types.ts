import { RoutineTask } from 'models/day_routine'

export type TaskViewState = { currentTask: Partial<RoutineTask> }
export type TaskViewInputProps = {
  task: RoutineTask | undefined
}
export type TaskViewEventProps = {}
export type TaskViewProps = TaskViewInputProps & TaskViewEventProps
