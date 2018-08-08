import React, { Component } from "react"
import Circos from "circos"
import { withRouter } from "react-router-dom"
import { ReactSVGPanZoom } from "react-svg-pan-zoom"
import Grid from "@material-ui/core/Grid"
import LegendBox from "common/components/LegendBox"
import ImageHorizontalGrid from "common/components/ImageHorizontalGrid"
import Dropdown from "common/components/Dropdown"
import { imageData } from "common/data/circosImageData"
// import GRCh37 from "common/data/circos/GRCh37.json"
// import cytobands from "common/data/circos/cytobands.json"
import segdup from "common/data/circos/segdup.json"

// let gieStainColor = {
//   gpos100: "rgb(0,0,0)",
//   gpos: "rgb(0,0,0)",
//   gpos75: "rgb(130,130,130)",
//   gpos66: "rgb(160,160,160)",
//   gpos50: "rgb(200,200,200)",
//   gpos33: "rgb(210,210,210)",
//   gpos25: "rgb(200,200,200)",
//   gvar: "rgb(220,220,220)",
//   gneg: "rgb(255,255,255)",
//   acen: "rgb(217,47,39)",
//   stalk: "rgb(100,127,164)",
//   select: "rgb(135,177,255)",
// }

const dropDownData = [
  {
    name: "Chr 1",
  },
  {
    name: "Chr 2",
  },
  {
    name: "Chr 3",
  },
  {
    name: "Chr 4",
  },
  {
    name: "Chr 5",
  },
  {
    name: "Chr 6",
  },
]

const description = "This is a placeholder description."

class Demo extends Component {
  componentDidMount() {
    // let cytobandsData = cytobands
    //   .filter(function(d) {
    //     return d.chrom === "chr9"
    //   })
    //   .map(function(d) {
    //     return {
    //       block_id: d.chrom,
    //       start: parseInt(d.chromStart, 10),
    //       end: parseInt(d.chromEnd, 10),
    //       gieStain: d.gieStain,
    //     }
    //   })
    let start = 39000000
    let length = 8000000
    let segdupData = segdup
      .filter(function(d) {
        return d.chr === "chr9" && d.start >= start && d.end <= start + length
      })
      .filter(function(d) {
        return d.end - d.start > 30000
      })
      .map(function(d) {
        d.block_id = d.chr
        d.start -= start
        d.end -= start
        return d
      })
    let myCircos = new Circos({
      width: 800,
      height: 800,
      container: "#scatter",
    })
    myCircos.layout(
      [
        {
          id: "chr9",
          len: length,
          label: "chr9",
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
    // myCircos.highlight("cytobands", cytobandsData, {
    //   innerRadius: 350,
    //   outerRadius: 370,
    //   opacity: 0.8,
    //   color: d => {
    //     return gieStainColor[d.gieStain]
    //   },
    // })
    myCircos.stack("stack", segdupData, {
      innerRadius: 0.7,
      outerRadius: 1,
      thickness: 4,
      margin: 0.01 * length,
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
      tooltipContent: function(d) {
        return `${d.block_id}:${d.start}-${d.end}`
      },
    })
    myCircos.render()
  }
  handleClick = component => {
    const { history, match } = this.props
    history.push(`/birdseye/${match.params.dataset}/${component}`)
  }
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={4}>
          <Dropdown dropDownData={dropDownData} />
          <br />
          <LegendBox description={description} />
        </Grid>
        <Grid item xs={8}>
          <ReactSVGPanZoom
            width={800}
            height={800}
            miniaturePosition="none"
            background="#fff">
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

export default withRouter(Demo)
