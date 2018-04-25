// @flow
import React from "react"
import { Responsive, WidthProvider } from "react-grid-layout"
import InfoBox from "common/components/InfoBox"
import Orders from "features/StockCenter/Charts/Orders"
import StrainsList from "features/StockCenter/Tables/StrainsList"
import PlasmidsList from "features/StockCenter/Tables/PlasmidsList"
import LatestStrains from "features/StockCenter/Lists/LatestStrains"
import LatestPlasmids from "features/StockCenter/Lists/LatestPlasmids"
import Poll from "@material-ui/icons/Poll"
import Public from "@material-ui/icons/Public"
import Whatshot from "@material-ui/icons/Whatshot"
import LibraryBooks from "@material-ui/icons/LibraryBooks"
import deepPurple from "material-ui/colors/deepPurple"
import data from "common/data/data"

// necessary CSS for react-grid-layout
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

const ResponsiveGridLayout = WidthProvider(Responsive)

const layouts = {
  lg: [
    { i: "a", x: 0, y: 0, w: 3, h: 1 },
    { i: "b", x: 3, y: 0, w: 3, h: 1 },
    { i: "c", x: 6, y: 0, w: 3, h: 1 },
    { i: "d", x: 9, y: 0, w: 3, h: 1 },
    { i: "e", x: 0, y: 5, w: 6, h: 2.5 },
    { i: "f", x: 6, y: 5, w: 6, h: 2.5 },
    { i: "g", x: 0, y: 10, w: 3, h: 2 },
    { i: "h", x: 3, y: 10, w: 3, h: 2 },
    { i: "i", x: 6, y: 10, w: 6, h: 2 }
  ],
  md: [
    { i: "a", x: 0, y: 0, w: 3, h: 1 },
    { i: "b", x: 3, y: 0, w: 3, h: 1 },
    { i: "c", x: 6, y: 0, w: 3, h: 1 },
    { i: "d", x: 9, y: 0, w: 3, h: 1 },
    { i: "e", x: 0, y: 5, w: 6, h: 2.5 },
    { i: "f", x: 6, y: 5, w: 6, h: 2.5 },
    { i: "g", x: 0, y: 10, w: 3, h: 2 },
    { i: "h", x: 3, y: 10, w: 3, h: 2 },
    { i: "i", x: 6, y: 10, w: 6, h: 2 }
  ]
}

/**
 * This is the draggable layout component for the Stock Center dashboard. It uses React-Grid-Layout for responsiveness and draggability.
 */

const DscDraggableDashboard = () => {
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}>
      <div key="a">
        <InfoBox
          Icon={Poll}
          iconBackgroundColor={deepPurple[900]}
          textBackgroundColor={deepPurple[50]}
          title="Strains"
          value="1927"
        />
      </div>
      <div key="b">
        <InfoBox
          Icon={Public}
          iconBackgroundColor={deepPurple[900]}
          textBackgroundColor={deepPurple[50]}
          title="Plasmids"
          value="882"
        />
      </div>
      <div key="c">
        <InfoBox
          Icon={Whatshot}
          iconBackgroundColor={deepPurple[900]}
          textBackgroundColor={deepPurple[50]}
          title="Antibodies"
          value="12"
        />
      </div>
      <div key="d">
        <InfoBox
          Icon={LibraryBooks}
          iconBackgroundColor={deepPurple[900]}
          textBackgroundColor={deepPurple[50]}
          title="Genomic Libraries"
          value="1"
        />
      </div>
      <div key="e">
        <StrainsList data={data.tables.latestGenes} color={deepPurple[700]} />
      </div>
      <div key="f">
        <PlasmidsList
          data={data.tables.mostUsedGenes}
          color={deepPurple[500]}
        />
      </div>
      <div key="g">
        <LatestStrains data={data.tables.latestGenes} color={deepPurple[400]} />
      </div>
      <div key="h">
        <LatestPlasmids
          data={data.tables.latestGenes}
          color={deepPurple[600]}
        />
      </div>
      <div key="i">
        <Orders data={data.charts.orders} color={deepPurple[300]} />
      </div>
    </ResponsiveGridLayout>
  )
}

export default DscDraggableDashboard
