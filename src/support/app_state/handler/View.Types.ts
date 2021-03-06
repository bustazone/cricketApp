import { AppStateStatus } from 'react-native'

export type AppStateHandlerViewInputProps = {}

export type AppStateHandlerViewEventProps = {
  onGoingForeground: () => void
}

export type AppStateHandlerViewProps = AppStateHandlerViewInputProps & AppStateHandlerViewEventProps

export interface AppStateHandlerViewState {
  appState: AppStateStatus
}
