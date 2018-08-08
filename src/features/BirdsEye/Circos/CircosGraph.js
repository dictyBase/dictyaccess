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
import chromosomes from "common/data/circos/chromosomes.json"
import chr1genes from "common/data/circos/chr1genes.json"
// import genes from "common/data/circos/genes.json"

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
      width: 750,
      height: 750,
      container: "#stackChart",
    })
    myCircos.layout(
      [
        {
          id: chromosomes.data[0].attributes.id,
          len: chromosomes.data[0].attributes.length,
          label: chromosomes.data[0].attributes.name,
          color: "#244928",
        },
      ],
      {
        innerRadius: 330,
        outerRadius: 350,
        labels: {
          display: true,
        },
        ticks: { display: false, labels: false, spacing: 10000 },
      },
    )
    myCircos.stack("negative-strands", negStrand, {
      innerRadius: 280,
      outerRadius: 320,
      thickness: 4,
      margin: 1,
      direction: "center",
      strokeWidth: 0,
      color: "#fd6a62",
      tooltipContent: d => {
        return `${d.block_id}:${d.start}-${d.end}`
      },
    })
    myCircos.stack("positive-strands", posStrand, {
      innerRadius: 351,
      outerRadius: 370,
      thickness: 4,
      margin: 1,
      direction: "out",
      strokeWidth: 0,
      color: "#fd6a62",
      tooltipContent: d => {
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
      <div>
        <Grid container spacing={16}>
          <Grid item xs={8}>
            <br />
            <center>
              <ReactSVGPanZoom
                width={750}
                height={750}
                miniaturePosition="none"
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
              <LegendBody>{description}</LegendBody>
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
