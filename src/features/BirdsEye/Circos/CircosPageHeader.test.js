import React from "react"
import { shallow } from "enzyme"
import CircosPageHeader from "./CircosPageHeader"

describe("CircosPageHeader", () => {
  const props = {
    title: "Chromosome 1 Genes",
  }

  const wrapper = shallow(<CircosPageHeader {...props} />)

  it("always renders one h1 element", () => {
    expect(wrapper.find("h1").length).toBe(1)
  })

  it("displays the correct text", () => {
    expect(wrapper.find("h1").contains("Chromosome 1 Genes")).toBe(true)
  })
})
