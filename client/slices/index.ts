import { combineReducers } from '@reduxjs/toolkit'
import todoReducer from './todo'

export default combineReducers({
  todos: todoReducer,
})
