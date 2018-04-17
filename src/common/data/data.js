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
    ],
    genesList: [
      {
        name: "DPU_G0051064",
        id: "DPU_G0051064"
      },
      {
        name: "DPU_G0051065",
        id: "DPU_G0051065"
      },
      {
        name: "DPU_G0051066",
        id: "DPU_G0051066"
      },
      {
        name: "DPU_G0051067",
        id: "DPU_G0051067"
      },
      {
        name: "DPU_G0051068",
        id: "DPU_G0051068"
      }
    ],
    proteinsList: [
      {
        id: "DPU1258995",
        length: "70 aa"
      },
      {
        id: "DPU1258996",
        length: "70 aa"
      },
      {
        id: "DPU1258997",
        length: "70 aa"
      },
      {
        id: "DPU1258998",
        length: "70 aa"
      },
      {
        id: "DPU1258999",
        length: "70 aa"
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
    ],
    genomeCounts: [
      {
        name: "supercontig",
        count: 838
      },
      {
        name: "EST",
        count: 36096
      },
      {
        name: "gene",
        count: 12410
      },
      {
        name: "polypeptide",
        count: 12410
      }
    ],
    geneFeatures: [
      {
        name: "Phenotypes",
        count: 499
      },
      {
        name: "RNA Expressions",
        count: 401
      },
      {
        name: "Alternative Transcripts",
        count: 347
      },
      {
        name: "Orthologs",
        count: 288
      }
    ],
    papersByYear: [
      { year: 1990, count: 19 },
      { year: 1991, count: 22 },
      { year: 1992, count: 31 },
      { year: 1993, count: 25 },
      { year: 1994, count: 15 },
      { year: 1995, count: 22 },
      { year: 1996, count: 30 },
      { year: 1997, count: 19 },
      { year: 1998, count: 29 },
      { year: 1999, count: 22 },
      { year: 2000, count: 23 },
      { year: 2001, count: 44 },
      { year: 2002, count: 38 },
      { year: 2003, count: 35 },
      { year: 2004, count: 14 },
      { year: 2005, count: 43 },
      { year: 2006, count: 20 },
      { year: 2007, count: 21 },
      { year: 2008, count: 18 },
      { year: 2009, count: 37 },
      { year: 2010, count: 42 },
      { year: 2011, count: 34 },
      { year: 2012, count: 33 },
      { year: 2013, count: 29 },
      { year: 2014, count: 25 },
      { year: 2015, count: 26 },
      { year: 2016, count: 19 },
      { year: 2017, count: 26 }
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
    papers: [
      "25609090",
      "25546705",
      "25540127",
      "25596489",
      "25552382",
      "25312441"
    ]
  }
}

export default data
