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
import dataStrandFilter from "./utils/dataStrandFilter"
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

type Props = {
  /** Genes data */
  genes: Array<{
    type: string,
    id: string,
    attributes: {
      block_id: string,
      end: string,
      start: string,
      strand: string,
    },
  }>,
  /** Pseudogenes data */
  pseudogenes: Array<{
    type: string,
    id: string,
    attributes: {
      block_id: string,
      end: string,
      start: string,
      strand: string,
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
      Circos visualization for canonical gene models of <em>D.discoideum</em>{" "}
      {chrNameExtender(match.params.id)}.
    </p>
    <ul>
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
    </ul>
  </div>
)

/**
 * This is the Circos display component for chromosome genes.
 */

const CircosGenesDisplay = (props: Props) => {
  const { match, genes, pseudogenes, chr } = props

  const description = <Description match={match} />

  const posStrand = dataStrandFilter(genes, "+")
  const negStrand = dataStrandFilter(genes, "-")
  const pseudogenesNegStrand = dataStrandFilter(pseudogenes, "-")
  const pseudogenesPosStrand = dataStrandFilter(pseudogenes, "+")

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
                type: "stack",
                id: "negative-strands",
                data: negStrand,
                config: {
                  innerRadius: 265,
                  outerRadius: 295,
                  thickness: 10,
                  margin: 500,
                  direction: "in",
                  strokeWidth: 0,
                  color: "blue",
                  tooltipContent: d => `${d.block_id}:${d.start}-${d.end}`,
                  logScale: true,
                },
              },
              {
                type: "stack",
                id: "positive-strands",
                data: posStrand,
                config: {
                  innerRadius: 235,
                  outerRadius: 265,
                  thickness: 10,
                  margin: 500,
                  direction: "in",
                  strokeWidth: 0,
                  color: "red",
                  tooltipContent: d => `${d.block_id}:${d.start}-${d.end}`,
                  logScale: true,
                },
              },
              {
                type: "stack",
                id: "pseudogenes-negative-strands",
                data: pseudogenesNegStrand,
                config: {
                  innerRadius: 195,
                  outerRadius: 235,
                  thickness: 10,
                  margin: 0.0009 * chr.attributes.length,
                  direction: "in",
                  strokeWidth: 1,
                  strokeColor: "indigo",
                  color: "indigo",
                  tooltipContent: d => `${d.block_id}:${d.start}-${d.end}`,
                },
              },
              {
                type: "stack",
                id: "pseudogenes-positive-strands",
                data: pseudogenesPosStrand,
                config: {
                  innerRadius: 155,
                  outerRadius: 195,
                  thickness: 10,
                  margin: 0.001 * chr.attributes.length,
                  direction: "in",
                  strokeWidth: 1,
                  strokeColor: "blueviolet",
                  color: "blueviolet",
                  tooltipContent: d => `${d.block_id}:${d.start}-${d.end}`,
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

export default withRouter(CircosGenesDisplay)
