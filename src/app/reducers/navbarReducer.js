// @flow
import { types } from "common/constants/Types"

const {
  FETCH_NAVBAR_REQUEST,
  FETCH_NAVBAR_SUCCESS,
  FETCH_NAVBAR_FAILURE,
} = types

const initialState = {}

const navbarReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case FETCH_NAVBAR_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_NAVBAR_SUCCESS:
      return {
        ...state,
        isFetching: false,
        links: action.payload.links,
      }
    case FETCH_NAVBAR_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}

export default navbarReducer
