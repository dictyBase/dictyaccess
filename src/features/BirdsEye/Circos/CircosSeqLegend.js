// @flow
import React from "react"
import chrNameExtender from "./utils/chrNameExtender"

/** Circos RNA Sequences Description */

const CircosSeqLegend = ({ id }: string) => (
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
        <span style={{ color: "#191560", backgroundColor: "#90EE90" }}>
          Light Green
        </span>{" "}
        = Protein spatial expression
      </li>
      <li>
        <span style={{ color: "#4b3c8e", backgroundColor: "#3CB371" }}>
          Dark Green
        </span>{" "}
        = RNA spatial expression
      </li>
      <li>
        <span style={{ color: "black" }}>Black Outer</span> = RNAseq 20 hours
        dev.
      </li>
      <li>
        <span style={{ color: "black" }}>Black Inner</span> = RNAseq all time
        points combined
      </li>
    </ul>
  </div>
)

export default CircosSeqLegend
