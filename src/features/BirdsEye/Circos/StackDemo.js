import React, { Component } from "react"
import Circos from "circos"
import LegendBox from "common/components/LegendBox"
import GRCh37 from "common/data/circos/GRCh37.json"
import cytobands from "common/data/circos/cytobands.csv"
import segdup from "common/data/circos/segdup.csv"

let configuration = {
  innerRadius: 350,
  outerRadius: 370,
  labels: {
    display: false
  },
  ticks: { display: true, labels: false, spacing: 10000 }
}

var gieStainColor = {
  gpos100: "rgb(0,0,0)",
  gpos: "rgb(0,0,0)",
  gpos75: "rgb(130,130,130)",
  gpos66: "rgb(160,160,160)",
  gpos50: "rgb(200,200,200)",
  gpos33: "rgb(210,210,210)",
  gpos25: "rgb(200,200,200)",
  gvar: "rgb(220,220,220)",
  gneg: "rgb(255,255,255)",
  acen: "rgb(217,47,39)",
  stalk: "rgb(100,127,164)",
  select: "rgb(135,177,255)"
}

const description = "Placeholder description"

let drawCircos = function(GRCh37, cytobands, segdup) {
  let data = [
    {
      id: "chr9",
      len: length,
      label: "chr9",
      color: "#FFCC00"
    }
  ]
  cytobands = cytobands
    .filter(function(d) {
      return d.chrom === "chr9"
    })
    .map(function(d) {
      return {
        block_id: d.chrom,
        start: parseInt(d.chromStart),
        end: parseInt(d.chromEnd),
        gieStain: d.gieStain
      }
    })

  var start = 39000000
  var length = 8000000
  data = segdup
    .filter(function(d) {
      return d.chr === "chr9" && d.start >= start && d.end <= start + length
    })
    .filter(function(d) {
      return d.end - d.start > 30000
    })
    .map(function(d) {
      d.block_id = d.chr
      d.start -= start
      d.end -= start
      return d
    })
}

class StackDemo extends Component {
  constructor(props) {
    super(props)
    this.circosRef = React.createRef()
  }
  componentDidMount() {
    let myCircos = new Circos({
      width: 800,
      height: 800,
      container: this.circosRef.current
    })
    myCircos.layout(GRCh37, configuration)
    myCircos.highlight("cytobands", cytobands, {
      innerRadius: 350,
      outerRadius: 370,
      opacity: 0.8,
      color: function(d) {
        return gieStainColor[d.gieStain]
      }
    })
    myCircos.stack("stack", drawCircos(GRCh37, cytobands, segdup), {
      innerRadius: 0.7,
      outerRadius: 1,
      thickness: 4,
      margin: 0.01, // * length
      direction: "out",
      strokeWidth: 0,
      color: function(d) {
        if (d.end - d.start > 150000) {
          return "red"
        } else if (d.end - d.start > 120000) {
          return "#333"
        } else if (d.end - d.start > 90000) {
          return "#666"
        } else if (d.end - d.start > 60000) {
          return "#999"
        } else if (d.end - d.start > 30000) {
          return "#BBB"
        }
      },
      tooltipContent: function(d) {
        return `${d.block_id}:${d.start}-${d.end}`
      }
    })
    myCircos.render()
  }
  render() {
    return (
      <center>
        <div ref={this.circosRef} />
        <LegendBox description={description} />
      </center>
    )
  }
}

export default StackDemo
