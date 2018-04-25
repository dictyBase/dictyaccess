// @flow
import React from "react"
import { Responsive, WidthProvider } from "react-grid-layout"
import BrowserUsage from "features/Analytics/Charts/BrowserUsage"
import blue from "material-ui/colors/blue"
import data from "common/data/data"

// necessary CSS for react-grid-layout
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

const ResponsiveGridLayout = WidthProvider(Responsive)

const layouts = {
  lg: [{ i: "a", x: 0, y: 0, w: 6, h: 2.5 }],
  md: [{ i: "a", x: 0, y: 0, w: 6, h: 2.5 }]
}

/**
 * This is the draggable layout component for the Analytics dashboard. It uses React-Grid-Layout for responsiveness and draggability.
 */

const AnalyticsDraggableDashboard = () => {
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}>
      <div key="a">
        <BrowserUsage data={data.charts.browsers} color={blue[600]} />
      </div>
    </ResponsiveGridLayout>
  )
}

export default AnalyticsDraggableDashboard
