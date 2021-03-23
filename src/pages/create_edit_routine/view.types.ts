import { Routine, RoutineTask } from 'models/day_routine'

export type RoutineViewState = {
  currentRoutine: Partial<Routine>
}
export type RoutineViewInputProps = {
  routine?: Routine
  tasks: RoutineTask[]
}
export type RoutineViewEventProps = {
  goToTask: (taskId: number | undefined) => void
}
export type RoutineViewProps = RoutineViewInputProps & RoutineViewEventProps
