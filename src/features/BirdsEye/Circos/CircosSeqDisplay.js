// @flow
import React from "react"
import Circos from "./Circos"
import { withRouter } from "react-router-dom"
import Grid from "@material-ui/core/Grid"

import LegendBox from "common/components/Legend/LegendBox"
import LegendHeader from "common/components/Legend/LegendHeader"
import LegendBody from "common/components/Legend/LegendBody"
import ImageVerticalGrid from "common/components/ImageVerticalGrid"
import CircosPageHeader from "./CircosPageHeader"
import chrNameExtender from "./utils/chrNameExtender"
import { chrGeneModels } from "common/data/chrGeneModels"

/** Main Circos config */
const circosConfig = {
  innerRadius: 300,
  outerRadius: 320,
  gap: 0,
  labels: {
    display: false,
  },
  ticks: {
    display: true,
    color: "grey",
    spacing: 100000,
    labels: true,
    labelSpacing: 10,
    labelDisplay0: true,
    majorSpacing: 5,
    size: {
      minor: 2,
      major: 5,
    },
  },
}

const hourFilter = (data: Array<Object>, hour: string) =>
  data.filter(item => item.attributes.hour === hour).map(d => ({
    block_id: d.attributes.chromosome,
    position:
      (parseInt(d.attributes.start, 10) + parseInt(d.attributes.end, 10)) / 2,
    value: parseInt(d.attributes.value, 10),
  }))

type Props = {
  /** Sequence data */
  sequence: Array<{
    type: string,
    id: string,
    attributes: {
      chromosome: string,
      end: string,
      start: string,
      value: string,
    },
  }>,
  /** Chromosomes data */
  chr: {
    type: string,
    id: string,
    attributes: {
      end: number,
      id: string,
      length: number,
      name: string,
      start: number,
    },
  },
  /** React Router's match object */
  match: Object,
}

/** Gene Legend Description component */

const Description = ({ match }: Object) => (
  <div>
    <p>
      {/* Circos visualization for RNA sequences of <em>D.discoideum</em>{" "}
      {chrNameExtender(match.params.id)}. */}
      Description coming later
    </p>
    {/* <ul>
      <li>
        <span style={{ color: "blue" }}>Blue</span> = Negative gene strands
      </li>
      <li>
        <span style={{ color: "red" }}>Red</span> = Positive gene strands
      </li>
      <li>
        <span style={{ color: "indigo" }}>Indigo</span> = Negative pseudogene
        strands
      </li>
      <li>
        <span style={{ color: "blueviolet" }}>Violet</span> = Positive
        pseudogene strands
      </li>
    </ul> */}
  </div>
)

/**
 * This is the Circos display component for RNAseq.
 */

const CircosSeqDisplay = (props: Props) => {
  const { match, sequence, chr } = props

  const description = <Description match={match} />

  const hour0 = hourFilter(sequence, "0")
  const hour4 = hourFilter(sequence, "4")
  const hour8 = hourFilter(sequence, "8")
  const hour12 = hourFilter(sequence, "12")
  const hour16 = hourFilter(sequence, "16")
  const hour20 = hourFilter(sequence, "20")
  const hour24 = hourFilter(sequence, "24")

  return (
    <Grid container spacing={16}>
      <CircosPageHeader title={`${chrNameExtender(match.params.id)}`} />
      <Grid item xs={12} md={12} lg={9}>
        <br />
        <center>
          <Circos
            size={750}
            id={`${match.params.dataset}-${match.params.id}`}
            layout={[
              {
                id: chr.attributes.id,
                len: chr.attributes.length,
                label: chr.attributes.name,
                color: "#85a9e5",
              },
            ]}
            config={circosConfig}
            tracks={[
              {
                type: "line",
                id: "hour-0",
                data: hour0,
                config: {
                  innerRadius: 0.89,
                  outerRadius: 0.99,
                  maxGap: 1000000,
                  color: "#222222",
                  axes: [
                    {
                      position: 0.006,
                      color: "#f44336",
                    },
                  ],
                  backgrounds: [
                    {
                      color: "#b1ddb5",
                    },
                  ],
                  tooltipContent: null,
                },
              },
              {
                type: "line",
                id: "hour-8",
                data: hour8,
                config: {
                  innerRadius: 0.78,
                  outerRadius: 0.88,
                  maxGap: 1000000,
                  color: "#222222",
                  axes: [
                    {
                      position: 0.006,
                      color: "#f44336",
                    },
                  ],
                  backgrounds: [
                    {
                      color: "#b1ddb5",
                    },
                  ],
                  tooltipContent: null,
                },
              },
              {
                type: "line",
                id: "hour-24",
                data: hour24,
                config: {
                  innerRadius: 0.67,
                  outerRadius: 0.77,
                  maxGap: 1000000,
                  color: "#222222",
                  axes: [
                    {
                      position: 0.006,
                      color: "#f44336",
                    },
                  ],
                  backgrounds: [
                    {
                      color: "#b1ddb5",
                    },
                  ],
                  tooltipContent: null,
                },
              },
            ]}
          />
        </center>
      </Grid>
      <Grid item xs={12} md={12} lg={3}>
        <LegendBox>
          <LegendHeader color="info" />
          <LegendBody>{description}</LegendBody>
        </LegendBox>
        <ImageVerticalGrid
          imageData={chrGeneModels}
          title="Other Chromosomes"
        />
      </Grid>
    </Grid>
  )
}

export default withRouter(CircosSeqDisplay)
