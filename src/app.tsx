import React from 'react'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux'
import { persistor, store } from 'store'
import RootNav from 'support/navigation/handler'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootNav />
      </PersistGate>
    </Provider>
  )
}

export default App
