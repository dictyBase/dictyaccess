// @flow
import { types } from "common/constants/Types"

const { CHANGE_BIRDS_EYE_TAB } = types

/**
 * All of the Redux reducers related to the Summary tab
 */

const initialState = {
  currentTab: 0,
}

const summaryReducer = (
  state: Object = initialState,
  action: { type: string, payload: Object },
) => {
  switch (action.type) {
    case CHANGE_BIRDS_EYE_TAB:
      return {
        ...state,
        currentTab: action.payload.tab,
      }
    default:
      return state
  }
}

export default summaryReducer
