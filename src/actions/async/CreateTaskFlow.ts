import { RootState } from 'reducers'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { RoutineTask } from 'models/day_routine'
import { saveTask } from 'actions/sync/Actions'

export function createTaskFlow(routineId: string, task: RoutineTask) {
  return (dispatch: ThunkDispatch<any, any, AnyAction>, _getState: () => RootState) => {
    // Save task in the routine
    dispatch(saveTask(routineId, task))
    // Inset Active task by routine values
  }
}
