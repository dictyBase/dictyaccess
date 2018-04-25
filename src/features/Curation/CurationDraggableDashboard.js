// @flow
import React from "react"
import { Responsive, WidthProvider } from "react-grid-layout"
import CuratedPapers from "features/Curation/Charts/CuratedPapers"
import PapersByYear from "features/Curation/Charts/PapersByYear"
import LatestNews from "features/Curation/News/LatestNews"
import LatestPaperAnnotations from "features/Curation/Lists/LatestPaperAnnotations"
import red from "material-ui/colors/red"
import data from "common/data/data"

// necessary CSS for react-grid-layout
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

const ResponsiveGridLayout = WidthProvider(Responsive)

const layouts = {
  lg: [
    { i: "a", x: 0, y: 0, w: 6, h: 2.5 },
    { i: "b", x: 6, y: 0, w: 6, h: 2.5 },
    { i: "c", x: 0, y: 5, w: 8, h: 2.5 },
    { i: "d", x: 6, y: 5, w: 4, h: 2.5 }
  ],
  md: [
    { i: "a", x: 0, y: 0, w: 6, h: 2.5 },
    { i: "b", x: 6, y: 0, w: 6, h: 2.5 },
    { i: "c", x: 0, y: 5, w: 8, h: 2.5 },
    { i: "d", x: 6, y: 5, w: 4, h: 2.5 }
  ]
}

/**
 * This is the draggable layout component for the Curation dashboard. It uses React-Grid-Layout for responsiveness and draggability.
 */

const CurationDraggableDashboard = () => {
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}>
      <div key="a">
        <CuratedPapers data={data.charts.orders} color={red[600]} />
      </div>
      <div key="b">
        <PapersByYear data={data.charts.papersByYear} color={red[700]} />
      </div>
      <div key="c">
        <LatestNews data={data.news} color={red[900]} />
      </div>
      <div key="d">
        <LatestPaperAnnotations
          data={data.annotations.papers}
          color={red[800]}
        />
      </div>
    </ResponsiveGridLayout>
  )
}

export default CurationDraggableDashboard
