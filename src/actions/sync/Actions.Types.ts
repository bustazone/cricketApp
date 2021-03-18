import { SAVE_ROUTINE, SAVE_TASK } from './ActionConstants'
import { Routine, RoutineTask } from 'models/day_routine'

export interface SaveRoutineActionInterface {
  type: typeof SAVE_ROUTINE
  routine: Routine
}

export interface SaveTaskActionInterface {
  type: typeof SAVE_TASK
  routineId: string
  task: RoutineTask
}
