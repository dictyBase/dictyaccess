import React from "react"
import { render } from "@testing-library/react"
import CircosJS from "circos"
import Circos from "./Circos"

jest.mock("circos")

const layoutMock = jest.fn()
const renderMock = jest.fn()

const chordsMock = jest.fn()
const heatmapMock = jest.fn()
const highlightMock = jest.fn()
const histogramMock = jest.fn()
const lineMock = jest.fn()
const scatterpMock = jest.fn()
const stackMock = jest.fn()
const textMock = jest.fn()
CircosJS.mockImplementation(() => ({
  layout: layoutMock,
  render: renderMock,

  chords: chordsMock,
  heatmap: heatmapMock,
  highlight: highlightMock,
  histogram: histogramMock,
  line: lineMock,
  scatter: scatterpMock,
  stack: stackMock,
  text: textMock,
}))

describe("Circos", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it("should call circos.layout with expected props", () => {
    const layout = []
    const config = {}
    render(<Circos layout={layout} config={config} tracks={[]} size={750} />)
    expect(layoutMock.mock.calls.length).toEqual(1)
    expect(layoutMock.mock.calls[0][0]).toBe(layout)
    expect(layoutMock.mock.calls[0][1]).toBe(config)
  })
  it("should use {} as default config for circos.layout", () => {
    render(<Circos layout={[]} tracks={[]} size={750} />)
    expect(layoutMock.mock.calls.length).toEqual(1)
    expect(layoutMock.mock.calls[0][1]).toEqual({})
  })
  it("should call circos.render", () => {
    render(<Circos layout={[]} tracks={[]} size={750} />)
    expect(renderMock.mock.calls.length).toEqual(1)
  })

  describe("tracks", () => {
    const tracks = [
      { type: "chords", mock: chordsMock },
      { type: "heatmap", mock: heatmapMock },
      { type: "highlight", mock: highlightMock },
      { type: "histogram", mock: histogramMock },
      { type: "line", mock: lineMock },
      { type: "scatter", mock: scatterpMock },
      { type: "stack", mock: stackMock },
      { type: "text", mock: textMock },
    ]
    tracks.forEach(({ mock, ...track }) => {
      it(`[${track.type}] should call circos.${track.type}`, () => {
        render(
          <Circos layout={[]} tracks={[{ data: [], ...track }]} size={750} />,
        )
        expect(mock.mock.calls.length).toEqual(1)
      })
    })
  })
})
