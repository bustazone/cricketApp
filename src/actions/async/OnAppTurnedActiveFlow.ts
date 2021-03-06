import { RootState } from 'reducers'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

export function appStateActiveFlow(
  _dispatch: ThunkDispatch<any, any, AnyAction>,
  _getState: () => RootState,
) {
  // Fill activeTasks by routine values
}
