// @flow
const chrIDs = {
  chr1: "DDB0232428",
  chr2: "DDB0232429",
  chr3: "DDB0232430",
  chr4: "DDB0232431",
  chr5: "DDB0232432",
  chr6: "DDB0232433",
}

/**
 * This is a helper function to get chromosome IDs based on their names.
 */

const chrNameMapper = (id: string) => chrIDs[id]

export default chrNameMapper
