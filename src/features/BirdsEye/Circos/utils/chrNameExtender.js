// @flow
const chrNames = {
  chr1: "Chromosome 1",
  chr2: "Chromosome 2",
  chr3: "Chromosome 3",
  chr4: "Chromosome 4",
  chr5: "Chromosome 5",
  chr6: "Chromosome 6",
}

/**
 * This is a helper function to display the full name of chromosomes.
 */

const chrNameExtender = (id: string) => chrNames[id]

export default chrNameExtender
