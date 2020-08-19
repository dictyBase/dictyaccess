import chrNameMapper from "features/BirdsEye/Circos/utils/chrNameMapper"

/** Function to filter data by specified strand */
const dataStrandFilter = (data, strand) =>
  data
    .filter((item) => item.attributes.strand === strand)
    .map((d) => ({
      block_id: chrNameMapper(d.attributes.block_id),
      end: d.attributes.end,
      start: d.attributes.start,
      strand: d.attributes.strand,
      id: d.id,
    }))

export default dataStrandFilter
