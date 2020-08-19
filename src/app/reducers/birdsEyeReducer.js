import { types } from "common/constants/Types"

const {
  CHANGE_BIRDS_EYE_TAB,
  FETCH_CHROMOSOME_DATA_REQUEST,
  FETCH_CHROMOSOME_DATA_FAILURE,
  FETCH_CHROMOSOME_DATA_SUCCESS,
  FETCH_GENE_DATA_REQUEST,
  FETCH_GENE_DATA_FAILURE,
  FETCH_GENE_DATA_SUCCESS,
  FETCH_SEQ_DATA_REQUEST,
  FETCH_SEQ_DATA_FAILURE,
  FETCH_SEQ_DATA_SUCCESS,
  FETCH_PSEUDOGENE_DATA_REQUEST,
  FETCH_PSEUDOGENE_DATA_FAILURE,
  FETCH_PSEUDOGENE_DATA_SUCCESS,
  FETCH_SPATIAL_EXPRESSION_DATA_REQUEST,
  FETCH_SPATIAL_EXPRESSION_DATA_FAILURE,
  FETCH_SPATIAL_EXPRESSION_DATA_SUCCESS,
  CHROMOSOME_DATA_NO_REFETCH,
} = types

/**
 * All of the Redux reducers related to the Summary tab
 */

const initialState = {
  currentTab: 0,
  chromosomes: [],
  genes: [],
  pseudogenes: [],
  sequence: [],
  spatial: [],
}

const summaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHROMOSOME_DATA_REQUEST:
    case FETCH_GENE_DATA_REQUEST:
    case FETCH_SEQ_DATA_REQUEST:
    case FETCH_PSEUDOGENE_DATA_REQUEST:
    case FETCH_SPATIAL_EXPRESSION_DATA_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_CHROMOSOME_DATA_SUCCESS:
      return {
        ...state,
        chromosomes: action.payload.data,
        isFetching: false,
      }
    case FETCH_GENE_DATA_SUCCESS:
      return {
        ...state,
        genes: action.payload.data,
        isFetching: false,
      }
    case FETCH_SEQ_DATA_SUCCESS:
      return {
        ...state,
        sequence: action.payload.data,
        isFetching: false,
      }
    case FETCH_PSEUDOGENE_DATA_SUCCESS:
      return {
        ...state,
        pseudogenes: action.payload.data,
        isFetching: false,
      }
    case FETCH_SPATIAL_EXPRESSION_DATA_SUCCESS:
      return {
        ...state,
        spatial: action.payload.data,
        isFetching: false,
      }
    case FETCH_CHROMOSOME_DATA_FAILURE:
    case FETCH_GENE_DATA_FAILURE:
    case FETCH_SEQ_DATA_FAILURE:
    case FETCH_PSEUDOGENE_DATA_FAILURE:
    case FETCH_SPATIAL_EXPRESSION_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      }
    case CHANGE_BIRDS_EYE_TAB:
      return {
        ...state,
        currentTab: action.payload.tab,
      }
    case CHROMOSOME_DATA_NO_REFETCH:
      return state
    default:
      return state
  }
}

export default summaryReducer
