import { Dispatch } from 'redux'
import { RootState } from 'reducers'

export interface AppStateHandlerOwnProps {
  onGoingForeground: (dispatch: Dispatch, getState: () => RootState) => void
}
