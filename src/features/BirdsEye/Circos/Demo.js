import React, { Component } from "react"
import Circos from "circos"
import { withRouter } from "react-router-dom"
import { ReactSVGPanZoom } from "react-svg-pan-zoom"
import Grid from "@material-ui/core/Grid"
import LegendBox from "../../../common/components/Legend/LegendBox"
import LegendHeader from "../../../common/components/Legend/LegendHeader"
import LegendBody from "../../../common/components/Legend/LegendBody"
import ImageVerticalGrid from "../../../common/components/ImageVerticalGrid"

import ImageHorizontalGrid from "common/components/ImageHorizontalGrid"
import Dropdown from "common/components/Dropdown"
import { imageData } from "common/data/circosImageData"

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

class Demo extends Component {
  componentDidMount() {
    let start = 1
    let length = 5062323
    let myCircos = new Circos({
      width: 750,
      height: 750,
      container: "#scatter",
    })
    myCircos.layout(
      [
        {
          id: "chr5",
          len: length,
          label: "chr5",
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
    return (
      <div>
        <Grid container spacing={8}>
          <Grid item xs={2}>
            <Dropdown dropDownData={dropDownData} />
            <br />
          </Grid>
        </Grid>
        <Grid container spacing={16}>
          <Grid item xs={8}>
            <center>
              <ReactSVGPanZoom
                width={750}
                height={750}
                onClick={event =>
                  console.log(event.x, event.y, event.originalEvent)
                }>
                <svg width={750} height={750}>
                  <g id="scatter" />
                </svg>
              </ReactSVGPanZoom>
            </center>
          </Grid>
          <Grid item xs={4}>
            <LegendBox>
              <LegendHeader color="info" />
              <LegendBody>
                Insert the content of the legend here. TODO: Adjust the height
                of the list of chromosomes below according to the height of the
                legend body (longer legend => shorter chromosome list & more
                scrolling) instead of having hard-coded height
              </LegendBody>
            </LegendBox>
            <ImageVerticalGrid
              imageData={imageData}
              handleClick={this.handleClick}
            />
            {/* use viewport, not the use element */}
            {/* <svg width={200} height={200}>
            <use href="#scatter" />
          </svg> */}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withRouter(Demo)
