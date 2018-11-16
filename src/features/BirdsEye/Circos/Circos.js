// @flow
import React, { Component } from "react"
import CircosJS from "circos"
import { ReactSVGPanZoom } from "react-svg-pan-zoom"

type Props = {
  /** The size of the Circos chart, represents both width and height */
  size: number,
  /** The array of data that describes the layout regions  */
  layout: Array<{
    /** Unique ID for data */
    id: string,
    /** Length of each individual piece of data */
    len: number,
    /** Color hex code to use for data */
    color: string,
    /** Label for data */
    label: string,
  }>,
  /** Configuration object that controls the format of the layout */
  config: ?Object,
  /** Array containing the different tracks and their data/config to display */
  tracks: Array<{
    /** Optional ID used to name the track */
    id: ?string,
    /** The data set to display in the track */
    data: Array<Object>,
    /** The configuration object for the data track */
    config: Object,
    /** The type of track to show (i.e. "stack", "heatmap", etc.) */
    type: string,
  }>,
  /** An ID name used for the Circos container */
  id: string,
}

/**
 * This is the main Circos component that renders the supplied data.
 */

class Circos extends Component<Props> {
  componentDidMount() {
    const { size, layout, config, tracks, id } = this.props

    let myCircos = new CircosJS({
      width: size,
      height: size,
      container: `#${id}`,
    })
    myCircos.layout(layout, config || {})
    tracks.forEach((track, index) => {
      const { id, data, config: trackConfig, type } = track

      myCircos[type.toLowerCase()](id || `track-${index}`, data, trackConfig)
    })

    myCircos.render()
  }

  render() {
    const { size, id } = this.props

    return (
      <ReactSVGPanZoom
        width={size}
        height={size}
        toolbarPosition="left"
        miniaturePosition="none"
        background="#fff">
        <svg width={size} height={size}>
          <g id={id} />
        </svg>
      </ReactSVGPanZoom>
    )
  }
}

export default Circos
