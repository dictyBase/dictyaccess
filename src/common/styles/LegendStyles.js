const successBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)",
}

const warningBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)",
}

const dangerBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)",
}

const primaryBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)",
}
const infoBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)",
}

const successCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #66bb6a, #43a047)",
  ...successBoxShadow,
}
const dangerCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ef5350, #e53935)",
  ...dangerBoxShadow,
}

const warningCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ffa726, #fb8c00)",
  ...warningBoxShadow,
}

const infoCardHeader = {
  color: "#fff",
  background: "#004080",
  ...infoBoxShadow,
}
const primaryCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
  ...primaryBoxShadow,
}

export const LegendStyle = theme => ({
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    width: "100%",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear",
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none",
  },
  cardCarousel: {
    overflow: "hidden",
  },
})

export const LegendHeaderStyle = theme => ({
  cardHeader: {
    borderRadius: "3px",
    padding: "1rem 15px",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    border: "0",
    marginBottom: "0",
  },
  cardHeaderPlain: {
    marginLeft: "0px",
    marginRight: "0px",
  },
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
})

export const LegendBodyStyle = theme => ({
  cardBody: {
    padding: "0.9375rem 1.875rem",
    flex: "1 1 auto",
  },
})
