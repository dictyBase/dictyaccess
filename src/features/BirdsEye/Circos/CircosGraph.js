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
    myCircos.render()
  }
  handleClick = component => {
    const { history, match } = this.props
    history.push(`/birdseye/${match.params.dataset}/${component}`)
  }
  render() {
    console.log(chromosomes.data[0])
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
