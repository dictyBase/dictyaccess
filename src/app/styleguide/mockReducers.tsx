import { combineReducers } from "redux"
import birdsEyeReducer from "../reducers/birdsEyeReducer"

export default (history: any) =>
  combineReducers({
    birdseye: birdsEyeReducer,
  })
