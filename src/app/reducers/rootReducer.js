import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import birdsEyeReducer from "app/reducers/birdsEyeReducer"

// root reducer created to be used in store by combining all individual reducers

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    birdseye: birdsEyeReducer,
  })
