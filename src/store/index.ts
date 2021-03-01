import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import RootReducer from 'reducers'

const logger = createLogger()

const getMiddlewares = () => {
  if (__DEV__) {
    return applyMiddleware(thunk, logger)
  }
  return applyMiddleware(thunk)
}

export const store = createStore(RootReducer, getMiddlewares())

// @ts-ignore (until https://github.com/rt2zz/redux-persist/pull/1085 will be merged)
export const persistor = persistStore(store)
