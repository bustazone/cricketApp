import { SAVE_ROUTINE, SAVE_TASK } from './ActionConstants'
import { SaveRoutineActionInterface, SaveTaskActionInterface } from './Actions.Types'
import { Routine, RoutineTask } from 'models/day_routine'

export function saveRoutine(routine: Routine): SaveRoutineActionInterface {
  return {
    type: SAVE_ROUTINE,
    routine: routine,
  }
}

export function saveTask(routineId: string, task: RoutineTask): SaveTaskActionInterface {
  return {
    type: SAVE_TASK,
    routineId: routineId,
    task: task,
  }
}
