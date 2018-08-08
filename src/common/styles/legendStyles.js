import {
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
} from "./material-kit-react.jsx"

export const legendStyle = {
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
}

export const legendHeaderStyle = {
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
}

export const legendBodyStyle = {
  cardBody: {
    padding: "0.9375rem 1.875rem",
    flex: "1 1 auto",
  },
}
