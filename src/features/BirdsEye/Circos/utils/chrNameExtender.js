// @flow

/**
 * This is a helper function to display the full name of chromosomes.
 */

const chrNameExtender = (id: string) => {
  switch (id) {
    case "chr1":
      return "Chromosome 1"
    case "chr2":
      return "Chromosome 2"
    case "chr3":
      return "Chromosome 3"
    case "chr4":
      return "Chromosome 4"
    case "chr5":
      return "Chromosome 5"
    case "chr6":
      return "Chromosome 6"
    default:
      return id
  }
}

export default chrNameExtender
