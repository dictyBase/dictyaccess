import React, { Component } from "react"
import Circos from "circos"
import { withRouter } from "react-router-dom"
import { ReactSVGPanZoom } from "react-svg-pan-zoom"
import Grid from "@material-ui/core/Grid"

import LegendBox from "common/components/Legend/LegendBox"
import LegendHeader from "common/components/Legend/LegendHeader"
import LegendBody from "common/components/Legend/LegendBody"
import ImageVerticalGrid from "common/components/ImageVerticalGrid"
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

class CircosGraph extends Component {
  componentDidMount() {
    const { data, chr } = this.props
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
      container: "#stackChart",
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
  handleClick = component => {
    const { history, match, data } = this.props
    history.push(`/birdseye/${match.params.dataset}/${component}`)
  }
  render() {
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={8}>
            <br />
            <center>
              <ReactSVGPanZoom
                width={750}
                height={750}
                miniaturePosition="none"
                toolbarPosition="none"
                background="#fff">
                <svg width={750} height={750}>
                  <g id="stackChart" />
                </svg>
              </ReactSVGPanZoom>
            </center>
          </Grid>
          <Grid item xs={4}>
            <Dropdown dropDownData={dropDownData} />
            <LegendBox>
              <LegendHeader color="info" />
              <LegendBody>{this.props.description}</LegendBody>
            </LegendBox>
            <ImageVerticalGrid
              imageData={imageData}
              handleClick={this.handleClick}
            />
            {/* <svg viewBox="0 0 750 750" width="200" height="200">
              <use href="#stackChart" />
            </svg> */}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withRouter(CircosGraph)
