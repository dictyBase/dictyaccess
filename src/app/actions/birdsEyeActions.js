import { types } from "common/constants/Types"
import { printError, createErrorObj } from "common/utils/actionHelpers"

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

const apiUrl = `${process.env.REACT_APP_API_SERVER}/dashboard/genomes/44689`

/**
 * All of the Redux actions related to the Bird's Eye Dashboard
 */

const fetchChromosomeDataRequest = () => ({
  type: FETCH_CHROMOSOME_DATA_REQUEST,
  payload: {
    isFetching: true,
  },
})

const fetchChromosomeDataSuccess = (data: Array<Object>) => ({
  type: FETCH_CHROMOSOME_DATA_SUCCESS,
  payload: {
    isFetching: false,
    data,
  },
})

const fetchChromosomeDataFailure = error => ({
  type: FETCH_CHROMOSOME_DATA_FAILURE,
  payload: {
    isFetching: false,
    error,
  },
})

const fetchGeneDataRequest = () => ({
  type: FETCH_GENE_DATA_REQUEST,
  payload: {
    isFetching: true,
  },
})

const fetchGeneDataSuccess = (data: Array<Object>) => ({
  type: FETCH_GENE_DATA_SUCCESS,
  payload: {
    isFetching: false,
    data,
  },
})

const fetchGeneDataFailure = error => ({
  type: FETCH_GENE_DATA_FAILURE,
  payload: {
    isFetching: false,
    error,
  },
})

const fetchPseudogeneDataRequest = () => ({
  type: FETCH_PSEUDOGENE_DATA_REQUEST,
  payload: {
    isFetching: true,
  },
})

const fetchPseudogeneDataSuccess = (data: Array<Object>) => ({
  type: FETCH_PSEUDOGENE_DATA_SUCCESS,
  payload: {
    isFetching: false,
    data,
  },
})

const fetchPseudogeneDataFailure = error => ({
  type: FETCH_PSEUDOGENE_DATA_FAILURE,
  payload: {
    isFetching: false,
    error,
  },
})

const fetchSeqDataRequest = () => ({
  type: FETCH_SEQ_DATA_REQUEST,
  payload: {
    isFetching: true,
  },
})

const fetchSeqDataSuccess = (data: Array<Object>) => ({
  type: FETCH_SEQ_DATA_SUCCESS,
  payload: {
    isFetching: false,
    data,
  },
})

const fetchSeqDataFailure = error => ({
  type: FETCH_SEQ_DATA_FAILURE,
  payload: {
    isFetching: false,
    error,
  },
})

const fetchSpatialExpressionDataRequest = () => ({
  type: FETCH_SPATIAL_EXPRESSION_DATA_REQUEST,
  payload: {
    isFetching: true,
  },
})

const fetchSpatialExpressionDataSuccess = (data: Array<Object>) => ({
  type: FETCH_SPATIAL_EXPRESSION_DATA_SUCCESS,
  payload: {
    isFetching: false,
    data,
  },
})

const fetchSpatialExpressionDataFailure = error => ({
  type: FETCH_SPATIAL_EXPRESSION_DATA_FAILURE,
  payload: {
    isFetching: false,
    error,
  },
})

const noRefetch = () => ({
  type: CHROMOSOME_DATA_NO_REFETCH,
})

export const fetchChromosomeData = () => async (
  dispatch: Function,
  getState: Function,
) => {
  // if (getState().birdseye.chromosomes.data) {
  //   return noRefetch()
  // }
  try {
    dispatch(fetchChromosomeDataRequest())
    const res = await fetch(`${apiUrl}/chromosomes`)

    const json = await res.json()
    // check if res.ok (https://developer.mozilla.org/en-US/docs/Web/API/Response/ok)
    // and that the json doesn't contain an error
    if (res.ok && !json.status) {
      dispatch(fetchChromosomeDataSuccess(json))
      await dispatch(changeBirdsEyeTab(2))
      await dispatch(fetchGeneData(`${apiUrl}/genes`))
      await dispatch(fetchPseudogeneData(`${apiUrl}/pseudogenes`))
      await dispatch(fetchSeqData(`${process.env.REACT_APP_SEQ_JSON}`))
      await dispatch(
        fetchSpatialExpressionData(
          `${process.env.REACT_APP_MID_CULMINANT_JSON}`,
        ),
      )
    } else {
      dispatch(
        fetchChromosomeDataFailure(createErrorObj(json.status, json.title)),
      )
      if (process.env.NODE_ENV !== "production") {
        printError(res, json)
      }
    }
  } catch (error) {
    dispatch(
      fetchChromosomeDataFailure(createErrorObj("Network", error.message)),
    )
    if (process.env.NODE_ENV !== "production") {
      console.error(`Network error: ${error.message}`)
    }
  }
}

export const fetchGeneData = (url: string) => async (
  dispatch: Function,
  getState: Function,
) => {
  if (getState().birdseye.genes.data) {
    return noRefetch()
  }
  try {
    dispatch(fetchGeneDataRequest())
    const res = await fetch(url)
    const json = await res.json()

    if (res.ok && !json.status) {
      dispatch(fetchGeneDataSuccess(json))
    } else {
      dispatch(fetchGeneDataFailure(createErrorObj(json.status, json.title)))
      if (process.env.NODE_ENV !== "production") {
        printError(res, json)
      }
    }
  } catch (error) {
    dispatch(fetchGeneDataFailure(createErrorObj("Network", error.message)))
    if (process.env.NODE_ENV !== "production") {
      console.error(`Network error: ${error.message}`)
    }
  }
}

export const fetchSeqData = (url: string) => async (
  dispatch: Function,
  getState: Function,
) => {
  if (getState().birdseye.sequence.data) {
    return noRefetch()
  }
  try {
    dispatch(fetchSeqDataRequest())
    const res = await fetch(url)
    const json = await res.json()

    if (res.ok && !json.status) {
      dispatch(fetchSeqDataSuccess(json))
    } else {
      dispatch(fetchSeqDataFailure(createErrorObj(json.status, json.title)))
      if (process.env.NODE_ENV !== "production") {
        printError(res, json)
      }
    }
  } catch (error) {
    dispatch(fetchSeqDataFailure(createErrorObj("Network", error.message)))
    if (process.env.NODE_ENV !== "production") {
      console.error(`Network error: ${error.message}`)
    }
  }
}

export const fetchPseudogeneData = (url: string) => async (
  dispatch: Function,
  getState: Function,
) => {
  if (getState().birdseye.pseudogenes.data) {
    return noRefetch()
  }
  try {
    dispatch(fetchPseudogeneDataRequest())
    const res = await fetch(url)
    const json = await res.json()

    if (res.ok && !json.status) {
      dispatch(fetchPseudogeneDataSuccess(json))
    } else {
      dispatch(
        fetchPseudogeneDataFailure(createErrorObj(json.status, json.title)),
      )
      if (process.env.NODE_ENV !== "production") {
        printError(res, json)
      }
    }
  } catch (error) {
    dispatch(
      fetchPseudogeneDataFailure(createErrorObj("Network", error.message)),
    )
    if (process.env.NODE_ENV !== "production") {
      console.error(`Network error: ${error.message}`)
    }
  }
}

export const fetchSpatialExpressionData = (url: string) => async (
  dispatch: Function,
  getState: Function,
) => {
  if (getState().birdseye.spatial.data) {
    return noRefetch()
  }
  try {
    dispatch(fetchSpatialExpressionDataRequest())
    const res = await fetch(url)
    const json = await res.json()

    if (res.ok && !json.status) {
      dispatch(fetchSpatialExpressionDataSuccess(json))
    } else {
      dispatch(
        fetchSpatialExpressionDataFailure(
          createErrorObj(json.status, json.title),
        ),
      )
      if (process.env.NODE_ENV !== "production") {
        printError(res, json)
      }
    }
  } catch (error) {
    dispatch(
      fetchSpatialExpressionDataFailure(
        createErrorObj("Network", error.message),
      ),
    )
    if (process.env.NODE_ENV !== "production") {
      console.error(`Network error: ${error.message}`)
    }
  }
}

export const changeBirdsEyeTab = (tab: string) => ({
  type: CHANGE_BIRDS_EYE_TAB,
  payload: {
    tab,
  },
})
