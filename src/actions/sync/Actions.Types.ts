import { SAVE_ROUTINE, SAVE_TASK, SAVE_ACTIVE_TASK } from './ActionConstants'
import { ActiveTask, Routine, RoutineTask } from 'models/day_routine'

export interface SaveRoutineActionInterface {
  type: typeof SAVE_ROUTINE
  routine: Routine
}

export interface SaveTaskActionInterface {
  type: typeof SAVE_TASK
  routineId: string
  task: RoutineTask
}

export interface SaveActiveTaskActionInterface {
  type: typeof SAVE_ACTIVE_TASK
  list: ActiveTask[]
}
