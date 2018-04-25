// @flow
import React from "react"
import { Responsive, WidthProvider } from "react-grid-layout"
import MostUsedGenes from "features/Genomes/Tables/MostUsedGenes"
import GenesList from "features/Genomes/Tables/GenesList"
import ProteinsList from "features/Genomes/Tables/ProteinsList"
import GenomeCounts from "features/Genomes/Charts/GenomeCounts"
import GeneFeatures from "features/Genomes/Charts/GeneFeatures"
import data from "common/data/data"
import orange from "material-ui/colors/orange"

// necessary CSS for react-grid-layout
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

const ResponsiveGridLayout = WidthProvider(Responsive)

const layouts = {
  lg: [
    { i: "a", x: 0, y: 0, w: 6, h: 2.5 },
    { i: "b", x: 6, y: 0, w: 6, h: 2.5 },
    { i: "c", x: 0, y: 5, w: 6, h: 2.5 },
    { i: "d", x: 6, y: 5, w: 3, h: 2.5 },
    { i: "e", x: 9, y: 5, w: 3, h: 2.5 }
  ],
  md: [
    { i: "a", x: 0, y: 0, w: 6, h: 2.5 },
    { i: "b", x: 6, y: 0, w: 6, h: 2.5 },
    { i: "c", x: 0, y: 5, w: 6, h: 2.5 },
    { i: "d", x: 0, y: 5, w: 3, h: 2.5 },
    { i: "e", x: 6, y: 5, w: 3, h: 2.5 }
  ]
}

/**
 * This is the draggable layout component for the Genomes dashboard. It uses React-Grid-Layout for responsiveness and draggability.
 */

const GenomeDraggableDashboard = () => {
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}>
      <div key="a">
        <MostUsedGenes data={data.tables.mostUsedGenes} color={orange[600]} />
      </div>
      <div key="b">
        <GenomeCounts data={data.charts.genomeCounts} color={orange[700]} />
      </div>
      <div key="c">
        <GeneFeatures data={data.charts.geneFeatures} color={orange[900]} />
      </div>
      <div key="d">
        <GenesList data={data.tables.genesList} color={orange[800]} />
      </div>
      <div key="e">
        <ProteinsList data={data.tables.proteinsList} color={orange[400]} />
      </div>
    </ResponsiveGridLayout>
  )
}

export default GenomeDraggableDashboard
