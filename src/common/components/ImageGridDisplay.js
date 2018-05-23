import React from "react"
import Grid from "@material-ui/core/Grid"

const images = ["", "", ""]

const ImageGridDisplay = props => {
  return (
    <Grid container>
      <Grid item>
        <h1>Images</h1>
        {images.map((item, i) => {
          return <img key={i} src={item} />
        })}
      </Grid>
    </Grid>
  )
}

export default ImageGridDisplay
