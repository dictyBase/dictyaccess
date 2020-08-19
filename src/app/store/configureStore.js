import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { routerMiddleware } from "connected-react-router"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import createRootReducer from "app/reducers/rootReducer"
import history from "common/utils/routerHistory"

const enhancer = composeWithDevTools(
  applyMiddleware(routerMiddleware(history), thunk),
)

const configureStore = (initialState) =>
  createStore(createRootReducer(history), initialState, enhancer)

export default configureStore
