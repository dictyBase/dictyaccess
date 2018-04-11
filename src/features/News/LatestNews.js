// @flow
import React from "react"
import { PaperStyle, HeaderStyle, ItemStyle } from "./NewsStyles"

type Props = {
  /** The news data to be displayed */
  data: Object
}

const LatestNews = (props: Props) => {
  return (
    <PaperStyle>
      <HeaderStyle variant="title">Latest Dicty News</HeaderStyle>
      {props.data.map(item => (
        <ItemStyle key={item.content}>
          <h4>{item.date}</h4>
          <p>{item.content}</p>
        </ItemStyle>
      ))}
    </PaperStyle>
  )
}

export default LatestNews
