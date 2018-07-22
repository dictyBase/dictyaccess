import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { connectRouter, routerMiddleware } from "connected-react-router"
import rootReducer from "app/reducers/rootReducer"
import history from "common/utils/routerHistory"

const configureStore = () => {
  const store = createStore(
    connectRouter(history)(rootReducer),
    applyMiddleware(routerMiddleware(history), thunk),
  )
  return store
}

export default configureStore
