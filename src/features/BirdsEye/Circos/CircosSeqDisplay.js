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
import CircosSeqLegend from "./CircosSeqLegend"
import chrNameExtender from "./utils/chrNameExtender"
// import chrNameMapper from "features/BirdsEye/Circos/utils/chrNameMapper"
import { chrSpatialExpression } from "common/data/chrSpatialExpression"
import dataStrandFilter from "./utils/dataStrandFilter"

/** Main Circos config */
const circosConfig = {
  innerRadius: 310,
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
  /** Spatial expression data */
  spatial: Array<{
    type: string,
    id: string,
    attributes: {
      block_id: string,
      end: string,
      start: string,
      strand: string,
    },
  }>,
  /** React Router's match object */
  match: Object,
}

/**
 * This is the Circos display component for RNAseq.
 */

const scatterFilter = (data: Array<Object>) =>
  data.map(d => ({
    block_id: d.attributes.block_id,
    position:
      (parseInt(d.attributes.start, 10) + parseInt(d.attributes.end, 10)) / 2,
    start: d.attributes.start,
    end: d.attributes.end,
    value: d.attributes.start,
    id: d.id,
    protein: d.attributes.protein,
    rna: d.attributes.rna,
    name: d.attributes.gene_name,
    term: d.attributes.anatomy_term,
  }))

const hourFilter = (data: Array<Object>, hour: string) =>
  data.filter(item => item.attributes.hour === hour).map(d => ({
    block_id: d.attributes.chromosome,
    start: parseInt(d.attributes.start, 10),
    end: parseInt(d.attributes.end, 10),
    value: parseInt(d.attributes.value, 10),
  }))

const CircosSeqDisplay = (props: Props) => {
  const { match, sequence, genes, chr, spatial } = props

  const hour0 = hourFilter(sequence, "0")
  // const hour4 = hourFilter(sequence, "4")
  // const hour8 = hourFilter(sequence, "8")
  // const hour12 = hourFilter(sequence, "12")
  // const hour16 = hourFilter(sequence, "16")
  // const hour20 = hourFilter(sequence, "20")
  const hour24 = hourFilter(sequence, "24")
  const posStrand = dataStrandFilter(genes, "+")
  const negStrand = dataStrandFilter(genes, "-")
  const proteinFilter = scatterFilter(spatial).filter(d => d.protein === true)
  const rnaFilter = scatterFilter(spatial).filter(d => d.rna === true)

  return (
    <Grid container spacing={16}>
      <Grid item lg={9}>
        <center>
          <CircosPageHeader title={`${chrNameExtender(match.params.id)}`} />
          <br />
          <Circos
            size={750}
            id={`spatial-expression-${match.params.id}`}
            layout={[
              {
                id: chr.attributes.id,
                len: chr.attributes.length,
                label: chr.attributes.name,
                color: "#708090",
              },
            ]}
            config={circosConfig}
            tracks={[
              {
                type: "stack",
                id: "positive-strands",
                data: posStrand,
                config: {
                  innerRadius: 0.89,
                  outerRadius: 0.99,
                  thickness: 10,
                  margin: 500,
                  direction: "in",
                  strokeWidth: 0,
                  color: "red",
                  tooltipContent: d => `${d.id} - coords:${d.start}-${d.end}`,
                  logScale: true,
                  events: {
                    "click.open": (datum, index, nodes, event) => {
                      window.open(`/gene/${datum.id}`)
                    },
                  },
                },
              },
              {
                type: "stack",
                id: "negative-strands",
                data: negStrand,
                config: {
                  innerRadius: 0.78,
                  outerRadius: 0.88,
                  thickness: 10,
                  margin: 500,
                  direction: "in",
                  strokeWidth: 0,
                  color: "blue",
                  tooltipContent: d => `${d.id} - coords:${d.start}-${d.end}`,
                  logScale: true,
                  events: {
                    "click.open": (datum, index, nodes, event) => {
                      window.open(`/gene/${datum.id}`)
                    },
                  },
                },
              },
              {
                type: "scatter",
                id: "spatial-protein",
                data: proteinFilter,
                config: {
                  innerRadius: 0.75,
                  outerRadius: 0.77,
                  size: 10,
                  strokeColor: "#191560",
                  strokeWidth: 0,
                  color: "#191560",
                  shape: "triangle",
                  backgrounds: [
                    {
                      color: "#90EE90",
                      opacity: 0.4,
                      start: 0,
                      end: 6000000,
                    },
                  ],
                  tooltipContent: d =>
                    `${d.name} (${d.id}) - ${d.term} - protein`,
                  events: {
                    "click.open": (datum, index, nodes, event) => {
                      window.open(`/gene/${datum.id}`)
                    },
                  },
                },
              },
              {
                type: "scatter",
                id: "spatial-rna",
                data: rnaFilter,
                config: {
                  innerRadius: 0.72,
                  outerRadius: 0.74,
                  size: 10,
                  strokeColor: "#4b3c8e",
                  strokeWidth: 0,
                  color: "#4b3c8e",
                  shape: "triangle",
                  backgrounds: [
                    {
                      color: "#3CB371",
                      opacity: 0.4,
                      start: 0,
                      end: 6000000,
                    },
                  ],
                  tooltipContent: d => `${d.name} (${d.id}) - ${d.term} - RNA`,
                  events: {
                    "click.open": (datum, index, nodes, event) => {
                      window.open(`/gene/${datum.id}`)
                    },
                  },
                },
              },
              {
                type: "histogram",
                id: "hour-0",
                data: hour0,
                config: {
                  innerRadius: 0.61,
                  outerRadius: 0.71,
                  color: "#222222",
                  backgrounds: [
                    {
                      color: "#efefef",
                    },
                  ],
                  tooltipContent: d => `${d.start}-${d.end}`,
                },
              },
              {
                type: "histogram",
                id: "hour-24",
                data: hour24,
                config: {
                  innerRadius: 0.5,
                  outerRadius: 0.6,
                  maxGap: 1000000,
                  color: "#222222",
                  backgrounds: [
                    {
                      color: "#efefef",
                    },
                  ],
                  tooltipContent: d => `${d.start}-${d.end}`,
                },
              },
            ]}
          />
        </center>
      </Grid>
      <Grid item xs={12} md={12} lg={3}>
        <LegendBox>
          <LegendHeader color="info" />
          <LegendBody>
            <CircosSeqLegend id={match.params.id} />
          </LegendBody>
        </LegendBox>
        <ImageVerticalGrid
          imageData={chrSpatialExpression}
          title="Other Chromosomes"
        />
      </Grid>
    </Grid>
  )
}

export default withRouter(CircosSeqDisplay)
