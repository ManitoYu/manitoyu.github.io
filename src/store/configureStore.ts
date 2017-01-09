import { createStore, compose, applyMiddleware } from 'redux'
import * as createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducers from '../reducers'

export default function configureStore(initialState?: any) {
  const store = createStore(
    rootReducers,
    initialState,
    compose(
      applyMiddleware(thunk)
    )
  )

  return store
}