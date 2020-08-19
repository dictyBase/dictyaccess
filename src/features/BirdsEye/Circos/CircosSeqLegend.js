import React from "react"
import chrNameExtender from "./utils/chrNameExtender"

/** Circos RNA Sequences Description */

const CircosSeqLegend = ({ id }) => (
  <div>
    <p>
      Circos visualization for RNA sequences of <em>D.discoideum</em>{" "}
      {chrNameExtender(id)}.
    </p>
    <ul>
      <li>
        <span style={{ color: "red" }}>Red</span> = Positive gene strands
      </li>
      <li>
        <span style={{ color: "blue" }}>Blue</span> = Negative gene strands
      </li>
      <li>
        <span style={{ color: "#88e388" }}>Light Green</span> = Protein spatial
        expression
      </li>
      <li>
        <span style={{ color: "#3CB371" }}>Dark Green</span> = RNA spatial
        expression
      </li>
      <li>
        <span style={{ color: "black" }}>Black Outer</span> = RNAseq vegetative
        cells
      </li>
      <li>
        <span style={{ color: "black" }}>Black Inner</span> = RNAseq 24 hours
        dev. combined
      </li>
    </ul>
  </div>
)

export default CircosSeqLegend
