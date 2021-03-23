import { ActiveTask, Routine } from 'models/day_routine'

export type TasksViewInputProps = {
  routines: Routine[]
  recurringTasks: ActiveTask[]
  temporizerTasks: ActiveTask[]
  uniqueTasks: ActiveTask[]
}
export type TasksViewEventProps = {
  goToRoutine: (routineId: number | undefined) => void
  newRecurringTask: () => void
  newTemporizerTasks: () => void
  newUniqueTasks: () => void
}
export type TasksViewProps = TasksViewInputProps & TasksViewEventProps
