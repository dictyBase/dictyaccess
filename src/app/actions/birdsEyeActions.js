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
  FETCH_PSEUDOGENE_DATA_REQUEST,
  FETCH_PSEUDOGENE_DATA_FAILURE,
  FETCH_PSEUDOGENE_DATA_SUCCESS,
  CHROMOSOME_DATA_NO_REFETCH,
} = types

// const genomesUrl = `${
//   process.env.REACT_APP_API_SERVER
// }/dashboard/genomes`

// set url for fetching data
const chrUrl = process.env.REACT_APP_CHROMOSOMES_JSON
const genesUrl = process.env.REACT_APP_GENES_JSON

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

const noRefetch = () => ({
  type: CHROMOSOME_DATA_NO_REFETCH,
})

export const fetchChromosomeData = () => async (
  dispatch: Function,
  getState: Function,
) => {
  if (getState().birdseye.chromosomes.data) {
    return noRefetch()
  }
  try {
    dispatch(fetchChromosomeDataRequest())
    const res = await fetch(chrUrl, {
      headers: { Accept: "application/json" },
    })
    const json = await res.json()

    // check if res.ok (https://developer.mozilla.org/en-US/docs/Web/API/Response/ok)
    // and that the json doesn't contain an error
    if (res.ok && !json.status) {
      dispatch(fetchChromosomeDataSuccess(json))
      await dispatch(fetchGeneData(genesUrl))
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
    const res = await fetch(url, {
      headers: { Accept: "application/json" },
    })
    const json = await res.json()

    // check if res.ok (https://developer.mozilla.org/en-US/docs/Web/API/Response/ok)
    // and that the json doesn't contain an error
    if (res.ok && !json.status) {
      dispatch(fetchGeneDataSuccess(json))
      // await dispatch(fetchGoa(json.data.relationships.goa.links.related))
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

export const fetchPseudogeneData = (url: string) => async (
  dispatch: Function,
  getState: Function,
) => {
  if (getState().birdseye.pseudogenes.data) {
    return noRefetch()
  }
  try {
    dispatch(fetchPseudogeneDataRequest())
    const res = await fetch(url, {
      headers: { Accept: "application/json" },
    })
    const json = await res.json()

    // check if res.ok (https://developer.mozilla.org/en-US/docs/Web/API/Response/ok)
    // and that the json doesn't contain an error
    if (res.ok && !json.status) {
      dispatch(fetchPseudogeneDataSuccess(json))
      // await dispatch(fetchGoa(json.data.relationships.goa.links.related))
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

export const changeBirdsEyeTab = (tab: string) => ({
  type: CHANGE_BIRDS_EYE_TAB,
  payload: {
    tab,
  },
})
