// @flow
const chrIDs = {
  "1": "DDB0232428",
  "2": "DDB0232429",
  "3": "DDB0232430",
  "4": "DDB0232431",
  "5": "DDB0232432",
  "6": "DDB0232433",
}

/**
 * This is a helper function to get chromosome IDs based on their names.
 */

const chrNameMapper = (id: string) => chrIDs[id]

export default chrNameMapper
