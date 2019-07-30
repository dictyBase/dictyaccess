// @flow
const chrIDs = {
  "1": "DDB0232428",
  "2": "DDB0232429",
  "3": "DDB0232430",
  "4": "DDB0232431",
  "5": "DDB0232432",
  "6": "DDB0232433",
  "2F": "DDB0215018",
  M: "DDB0169550",
  BF: "DDB0220052",
  "3F": "DDB0215151",
  DDB0232428: "DDB0232428",
  DDB0232429: "DDB0232429",
  DDB0232430: "DDB0232430",
  DDB0232431: "DDB0232431",
  DDB0232432: "DDB0232432",
  DDB0232433: "DDB0232433",
  DDB0215018: "DDB0215018",
  DDB0169550: "DDB0169550",
  DDB0220052: "DDB0220052",
  DDB0215151: "DDB0215151",
}

/**
 * This is a helper function to get chromosome IDs based on their names.
 */

const chrNameMapper = (id: string) => chrIDs[id]

export default chrNameMapper
