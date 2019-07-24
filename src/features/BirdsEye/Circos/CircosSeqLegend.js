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
        <span style={{ color: "#4b3c8e", backgroundColor: "#ebe97a" }}>
          Yellow Background
        </span>{" "}
        <ul>
          <li>Outer = Protein</li>
          <li>Inner = RNA Expression</li>
        </ul>
      </li>
      <li>
        <span style={{ color: "#222222", backgroundColor: "#efefef" }}>
          Grey Background
        </span>
        <ul>
          <li>Outer = 20 hours development</li>
          <li>Inner = 24 hours development</li>
        </ul>
      </li>
    </ul>
  </div>
)

export default CircosSeqLegend
