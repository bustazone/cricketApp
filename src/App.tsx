import React from 'react'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux'
import { persistor, store } from 'store'
import HomeView from 'pages/home/view'

const App = async () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HomeView />
      </PersistGate>
    </Provider>
  )
}

export default App
