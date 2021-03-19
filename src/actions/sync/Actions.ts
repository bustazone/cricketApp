import { SAVE_ROUTINE, SAVE_TASK, SAVE_ACTIVE_TASK } from './ActionConstants'
import {
  SaveRoutineActionInterface,
  SaveTaskActionInterface,
  SaveActiveTaskActionInterface,
} from './Actions.Types'
import { ActiveTask, Routine, RoutineTask } from 'models/day_routine'

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

export function saveActiveTasks(list: ActiveTask[]): SaveActiveTaskActionInterface {
  return {
    type: SAVE_ACTIVE_TASK,
    list: list,
  }
}
