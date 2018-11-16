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
import { imageData } from "common/data/chrGeneModels"

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
  data: Array<{
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

/**
 * This is the Circos display component for chromosome genes.
 */

const CircosGenesDisplay = (props: Props) => {
  const { match, data, chr } = props

  const description = `Circos visualization for canonical gene models of D.discoideum ${chrNameExtender(
    match.params.id,
  )}. The blue and red tracks represent genes from negative and positive strands respectively.`

  const posStrand = dataStrandFilter(data, "+")
  const negStrand = dataStrandFilter(data, "-")

  return (
    <Grid container spacing={16}>
      <CircosPageHeader title={`${chrNameExtender(match.params.id)} Genes`} />
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
                  innerRadius: 250,
                  outerRadius: 290,
                  thickness: 10,
                  margin: 0.01 * chr.attributes.length,
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
                  innerRadius: 185,
                  outerRadius: 250,
                  thickness: 10,
                  margin: 0.01 * chr.attributes.length,
                  direction: "in",
                  strokeWidth: 0,
                  color: "red",
                  tooltipContent: d => `${d.block_id}:${d.start}-${d.end}`,
                  logScale: true,
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
        <ImageVerticalGrid imageData={imageData} title="Other Chromosomes" />
      </Grid>
    </Grid>
  )
}

export default withRouter(CircosGenesDisplay)
