// @flow

/**
 * This is a helper function to get chromosome IDs based on their names.
 */

const chrNameMapper = (id: string) => {
  switch (id) {
    case "chr1":
      return "DDB0232428"
    case "chr2":
      return "DDB0232429"
    case "chr3":
      return "DDB0232430"
    case "chr4":
      return "DDB0232431"
    case "chr5":
      return "DDB0232432"
    case "chr6":
      return "DDB0232433"
    default:
      return id
  }
}

export default chrNameMapper
