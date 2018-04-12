// @flow
import React from "react"
import ExpandMore from "@material-ui/icons/ExpandMore"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ChevronRight from "@material-ui/icons/ChevronRight"
import ChevronLeft from "@material-ui/icons/ChevronLeft"

const data = {
  tables: {
    latestGenes: [
      {
        descriptor: "acaA-",
        names: "aca-, acaA-(r)",
        id: "DBS0252577"
      },
      {
        descriptor: "dfbcdsaB4-",
        names: "AK00010",
        id: "DBS032350146"
      },
      {
        descriptor: "dfdscB4-",
        names: "dhjf44",
        id: "DBS038350146"
      },
      {
        descriptor: "sdasda33-",
        names: "jfgkhjs3",
        id: "DBS03350146"
      },
      {
        descriptor: "sada2332-",
        names: "kjsjks4",
        systemic: "KFDJR48",
        id: "DBS02350146"
      }
    ],
    mostUsedGenes: [
      {
        descriptor: "sada2332-",
        names: "kjsjks4",
        id: "DBS02350146"
      },
      {
        descriptor: "dfbcdsaB4-",
        names: "AK00010",
        id: "DBS032350146"
      },
      {
        descriptor: "dfdscB4-",
        names: "dhjf44",
        id: "DBS038350146"
      },
      {
        descriptor: "acaA-",
        names: "aca-, acaA-(r)",
        id: "DBS0252577"
      },
      {
        descriptor: "sdasda33-",
        names: "jfgkhjs3",
        id: "DBS03350146"
      }
    ]
  },
  charts: {
    orders: [
      { month: "January", orders: 20 },
      { month: "February", orders: 25 },
      { month: "March", orders: 11 },
      { month: "April", orders: 22 },
      { month: "May", orders: 14 },
      { month: "June", orders: 9 },
      { month: "July", orders: 33 }
    ],
    browsers: [
      {
        name: "Chrome",
        value: 700,
        color: "rgb(0, 172, 193)",
        icon: <ExpandLess />
      },
      {
        name: "Firefox",
        value: 400,
        color: "rgb(216, 27, 96)",
        icon: <ChevronRight />
      },
      {
        name: "Safari",
        value: 300,
        color: "rgb(142, 36, 170)",
        icon: <ExpandMore />
      },
      {
        name: "Edge",
        value: 100,
        color: "#f48fb1",
        icon: <ChevronLeft />
      }
    ]
  },
  news: [
    {
      date: "February 13, 2018",
      content:
        "After Northwestern moved our servers from one campus to the other recently our Blast from the Front - and all Gene Pages, as well as the Genome Browser (including snapshot on gene page) are down. We and Northwestern IT staff are working on the problem. Meanwhile for Blast use the Genome Server, the Blast server which is available from the other genome sites we house. Thanks for your patience!"
    },
    {
      date: "February 07, 2018",
      content:
        "Dicty in the News: New evidence using Dictyostelium discoideum suggests a role for curcumin and related compounds in the treatment of cancer and Alzheimer's disease. Reported in Medical Xpress with comments from Professor Robin SB Williams."
    }
  ],
  annotations: {
    genes: ["abprtA", "trgrB1", "tgrC1", "tacA"],
    papers: ["25609090", "25546705", "25540127", "25596489"]
  }
}

export default data
