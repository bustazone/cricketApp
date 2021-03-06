import { SAVE_ROUTINE, SAVE_TASK } from './ActionConstants'
import { SaveRoutineActionInterface, SaveTaskActionInterface } from './Actions.Types'
import { Routine, Task } from 'models/day_routine'

export function saveRoutine(routine: Routine): SaveRoutineActionInterface {
  return {
    type: SAVE_ROUTINE,
    routine: routine,
  }
}

export function saveTask(routineId: string, task: Task): SaveTaskActionInterface {
  return {
    type: SAVE_TASK,
    routineId: routineId,
    task: task,
  }
}
