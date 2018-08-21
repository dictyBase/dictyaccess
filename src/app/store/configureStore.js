import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { connectRouter, routerMiddleware } from "connected-react-router"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import { manageStateStorage } from "dicty-components-redux"
import rootReducer from "app/reducers/rootReducer"
import history from "common/utils/routerHistory"
import { types } from "common/constants/Types"

const authArg = {
  save_action: types.LOGIN_SUCCESS,
  remove_action: types.LOGOUT_SUCCESS,
  key: "auth",
  namespace: "auth",
}

const roleArg = {
  save_action: types.FETCH_ROLE_SUCCESS,
  remove_action: types.LOGOUT_SUCCESS,
  key: "auth",
  namespace: "auth",
}
const permArg = {
  save_action: types.FETCH_PERMISSION_SUCCESS,
  remove_action: types.LOGOUT_SUCCESS,
  key: "auth",
  namespace: "auth",
}

const enhancer = composeWithDevTools(
  applyMiddleware(
    routerMiddleware(history),
    thunk,
    manageStateStorage(authArg),
    manageStateStorage(roleArg),
    manageStateStorage(permArg),
  ),
)

const configureStore = initialState => {
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    enhancer,
  )
  return store
}

export default configureStore
