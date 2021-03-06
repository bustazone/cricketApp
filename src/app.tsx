import React from 'react'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux'
import { persistor, store } from 'store'
import RootNav from 'support/navigation/handler'
import AppStateHandler from 'support/app_state/handler'
import { appStateActiveFlow } from 'actions/async/OnAppTurnedActiveFlow'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppStateHandler onGoingForeground={appStateActiveFlow} />
        <RootNav />
      </PersistGate>
    </Provider>
  )
}

export default App
