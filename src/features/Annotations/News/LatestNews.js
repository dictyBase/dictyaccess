// @flow
import React from "react"
import { PaperStyle, HeaderStyle, ItemStyle } from "common/styles/NewsStyles"

type Props = {
  /** The news data to be displayed */
  data: Array<Object>,
  /** The Material-UI color palette selected */
  color: Object,
}

/**
 * This displays the latest Dicty news.
 */

const LatestNews = (props: Props) => {
  return (
    <PaperStyle>
      <HeaderStyle style={{ backgroundColor: props.color }} variant="title">
        Latest Dicty News
      </HeaderStyle>
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
