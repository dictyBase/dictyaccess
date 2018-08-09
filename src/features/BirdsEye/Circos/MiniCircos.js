import React, { Component } from "react"
import Circos from "circos"

class MiniCircos extends Component {
  componentDidMount() {
    const { data, chr, name } = this.props
    const posStrand = data
      .filter(item => item.attributes.strand === "+")
      .map(d => {
        return {
          block_id: d.attributes.block_id,
          end: d.attributes.end,
          start: d.attributes.start,
          strand: d.attributes.strand,
        }
      })
    const negStrand = data
      .filter(item => item.attributes.strand === "-")
      .map(d => {
        return {
          block_id: d.attributes.block_id,
          end: d.attributes.end,
          start: d.attributes.start,
          strand: d.attributes.strand,
        }
      })
    let myCircos = new Circos({
      width: 750,
      height: 750,
      container: `#${name}`,
    })
    myCircos.layout(
      [
        {
          id: chr.attributes.id,
          len: chr.attributes.length,
          label: chr.attributes.name,
          color: "#85a9e5",
        },
      ],
      {
        innerRadius: 290,
        outerRadius: 310,
        gap: 0,
        labels: {
          display: true,
        },
        ticks: { display: true, labels: false, spacing: 10000 },
      },
    )
    myCircos.stack("negative-strands", negStrand, {
      innerRadius: 250,
      outerRadius: 290,
      thickness: 10,
      margin: 0.01 * chr.attributes.length,
      direction: "in",
      strokeWidth: 0,
      color: "blue",
      tooltipContent: d => {
        return `${d.block_id}:${d.start}-${d.end}`
      },
      logScale: true,
    })
    myCircos.stack("positive-strands", posStrand, {
      innerRadius: 320,
      outerRadius: 360,
      thickness: 10,
      margin: 0.01 * chr.attributes.length,
      direction: "out",
      strokeWidth: 0,
      color: "red",
      tooltipContent: d => {
        return `${d.block_id}:${d.start}-${d.end}`
      },
      logScale: true,
    })
    myCircos.render()
  }
  render() {
    const { name } = this.props
    const reference = `#${name}`
    return (
      <div>
        <svg viewBox="0 0 750 750" width="200" height="200">
          <g id={name}>
            <use href={reference} />
          </g>
        </svg>
      </div>
    )
  }
}

export default MiniCircos
