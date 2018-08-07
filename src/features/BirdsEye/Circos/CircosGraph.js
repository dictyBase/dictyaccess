import React, { Component } from "react"
import Circos from "circos"
import { withRouter } from "react-router-dom"
import { ReactSVGPanZoom } from "react-svg-pan-zoom"
import Grid from "@material-ui/core/Grid"
import LegendBox from "common/components/LegendBox"
import ImageHorizontalGrid from "common/components/ImageHorizontalGrid"
import Dropdown from "common/components/Dropdown"
import { imageData } from "common/data/circosImageData"
import chromosomes from "common/data/circos/chromosomes.json"
import chr1genes from "common/data/circos/chr1genes.json"

const posStrand = chr1genes.data
  .filter(item => item.attributes.strand === "+")
  .map(d => {
    return {
      block_id: "DDB0232428",
      end: d.attributes.end,
      start: d.attributes.start,
      strand: d.attributes.strand,
    }
  })
const negStrand = chr1genes.data
  .filter(item => item.attributes.strand === "-")
  .map(d => {
    return {
      block_id: "DDB0232428",
      end: d.attributes.end,
      start: d.attributes.start,
      strand: d.attributes.strand,
    }
  })

const dropDownData = [
  {
    name: "Chr 1",
    data: chromosomes.data[0],
  },
  {
    name: "Chr 2",
    data: chromosomes.data[1],
  },
  {
    name: "Chr 3",
    data: chromosomes.data[2],
  },
  {
    name: "Chr 4",
    data: chromosomes.data[3],
  },
  {
    name: "Chr 5",
    data: chromosomes.data[4],
  },
  {
    name: "Chr 6",
    data: chromosomes.data[5],
  },
]

const description = "This is a placeholder description."

class CircosGraph extends Component {
  componentDidMount() {
    let myCircos = new Circos({
      width: 800,
      height: 800,
      container: "#scatter",
    })
    myCircos.layout(
      [
        {
          id: chromosomes.data[0].attributes.id,
          len: chromosomes.data[0].attributes.length,
          label: chromosomes.data[0].attributes.name,
          color: "#00b8d4",
        },
      ],
      {
        innerRadius: 350,
        outerRadius: 370,
        labels: {
          display: true,
        },
        ticks: { display: true, labels: false, spacing: 10000 },
      },
    )
    myCircos.stack("stack", negStrand, {
      innerRadius: 0.7,
      outerRadius: 1,
      thickness: 4,
      margin: 0.01 * chromosomes.data[0].attributes.length,
      direction: "out",
      strokeWidth: 0,
      color: d => {
        if (d.end - d.start > 150000) {
          return "#006064"
        } else if (d.end - d.start > 120000) {
          return "#00acc1"
        } else if (d.end - d.start > 90000) {
          return "#00838f"
        } else if (d.end - d.start > 60000) {
          return "#0097a7"
        } else if (d.end - d.start > 30000) {
          return "#00acc1"
        }
      },
      tooltipContent: d => {
        return `${d.block_id}:${d.start}-${d.end}`
      },
    })
    // myCircos.stack("stack", posStrand, {
    //   innerRadius: 0.7,
    //   outerRadius: 1,
    //   thickness: 4,
    //   margin: 0.01 * chromosomes.data[0].attributes.length,
    //   direction: "in",
    //   strokeWidth: 0,
    //   color: d => {
    //     if (d.end - d.start > 150000) {
    //       return "#006064"
    //     } else if (d.end - d.start > 120000) {
    //       return "#00acc1"
    //     } else if (d.end - d.start > 90000) {
    //       return "#00838f"
    //     } else if (d.end - d.start > 60000) {
    //       return "#0097a7"
    //     } else if (d.end - d.start > 30000) {
    //       return "#00acc1"
    //     }
    //   },
    //   tooltipContent: d => {
    //     return `${d.block_id}:${d.start}-${d.end}`
    //   },
    // })
    myCircos.render()
  }
  handleClick = component => {
    const { history, match } = this.props
    history.push(`/birdseye/${match.params.dataset}/${component}`)
  }
  render() {
    console.log(chromosomes)
    return (
      <Grid container spacing={16}>
        <Grid item xs={4}>
          <Dropdown dropDownData={dropDownData} />
          <br />
          <LegendBox description={description} />
        </Grid>
        <Grid item xs={8}>
          <ReactSVGPanZoom width={800} height={800}>
            <svg width={800} height={800}>
              <g id="scatter" />
            </svg>
          </ReactSVGPanZoom>
        </Grid>
        <Grid item xs={12}>
          <ImageHorizontalGrid
            imageData={imageData}
            handleClick={this.handleClick}
          />
          {/* use viewport, not the use element */}
          {/* <svg width={200} height={200}>
            <use href="#scatter" />
          </svg> */}
        </Grid>
      </Grid>
    )
  }
}

export default withRouter(CircosGraph)
