import { combineReducers } from "redux"
import authReducer from "app/reducers/authReducer"

// root reducer created to be used in store by combining all individual reducers

const rootReducer = combineReducers({
  auth: authReducer,
})

export default rootReducer
