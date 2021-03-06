import { RootState } from 'reducers'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { Routine } from 'models/day_routine'
import { saveRoutine } from 'actions/sync/Actions'

export function createRoutineFlow(routine: Routine) {
  return (dispatch: ThunkDispatch<any, any, AnyAction>, _getState: () => RootState) => {
    // Save routime
    dispatch(saveRoutine(routine))
  }
}
