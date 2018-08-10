// @flow
import React, { Component } from "react"
import Circos from "circos"

type Props = {
  /** Gene data */
  genes: Array<Object>,
  /** Chromosome data */
  chr: Object,
  /** Name of chromosome (i.e. chr1) */
  name: string,
  /** Width of scaled SVG */
  svgWidth: string,
  /** Height of scaled SVG */
  svgHeight: string,
}

/**
 * This component provides a scaled SVG thumbnail for a Circos graph.
 */

class MiniCircos extends Component<Props> {
  componentDidMount() {
    const { genes, chr, name } = this.props
    const posStrand = genes
      .filter((item: Object) => item.attributes.strand === "+")
      .map((d: Object) => {
        return {
          block_id: d.attributes.block_id,
          end: d.attributes.end,
          start: d.attributes.start,
          strand: d.attributes.strand,
        }
      })
    const negStrand = genes
      .filter((item: Object) => item.attributes.strand === "-")
      .map((d: Object) => {
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
      logScale: true,
    })
    myCircos.render()
  }
  render() {
    const { name, svgWidth, svgHeight } = this.props
    const reference = `#${name}`
    return (
      <div>
        <svg viewBox="0 0 750 750" width={svgWidth} height={svgHeight}>
          <g id={name}>
            <use href={reference} />
          </g>
        </svg>
      </div>
    )
  }
}

export default MiniCircos
