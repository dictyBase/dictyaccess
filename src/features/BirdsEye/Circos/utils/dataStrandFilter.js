// @flow

/** Function to filter data by specified strand */
const dataStrandFilter = (data: Array<Object>, strand: string) =>
  data.filter(item => item.attributes.strand === strand).map(d => ({
    block_id: d.attributes.block_id,
    end: d.attributes.end,
    start: d.attributes.start,
    strand: d.attributes.strand,
  }))

export default dataStrandFilter
