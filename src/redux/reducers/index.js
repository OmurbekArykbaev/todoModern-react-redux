import { combineReducers } from "redux"
import taskReducer from "./reduce"

const reducers = combineReducers({
  tasks: taskReducer,
})

export default reducers
