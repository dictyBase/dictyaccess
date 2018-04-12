// @flow
import React from "react"
import { Timeline } from "react-twitter-widgets"

const LatestTweets = () => {
  return (
    <div>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "dictybase"
        }}
        options={{
          username: "dictybase",
          height: "400"
        }}
        onLoad={() => console.log("Timeline is loaded!")}
      />
    </div>
  )
}

export default LatestTweets
