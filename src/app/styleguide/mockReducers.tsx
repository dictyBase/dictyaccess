import { combineReducers } from "redux"
import birdsEyeReducer from "../reducers/birdsEyeReducer"

export default (history) =>
  combineReducers({
    birdseye: birdsEyeReducer,
  })
