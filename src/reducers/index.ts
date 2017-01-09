import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const test = (state: Object = {}, action: string) => {
  return state
}

export default combineReducers({
  test,
  routing: routerReducer
})