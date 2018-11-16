import React from "react"
import { shallow } from "enzyme"
import CircosLoader from "./CircosLoader"
import CircularProgress from "@material-ui/core/CircularProgress"

describe("CircosLoader", () => {
  const wrapper = shallow(<CircosLoader />)
  const loader = wrapper.dive().find(CircularProgress)

  it("always renders one CircularProgress component", () => {
    expect(loader.length).toBe(1)
  })
})
