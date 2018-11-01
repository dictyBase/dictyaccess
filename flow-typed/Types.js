// styling
declare module "font-awesome/css/font-awesome.min.css" {
  declare module.exports: any
}

// images
declare module "images/sad-dicty.png" {
  declare module.exports: any
}

class process {
  static env: {
    REACT_APP_API_SERVER: string,
    REACT_APP_BASENAME: string,
    REACT_APP_NAVBAR_JSON: string,
    REACT_APP_FOOTER_JSON: string,
    REACT_APP_CHROMOSOMES_JSON: string,
    REACT_APP_GENES_JSON: string,
  }
}
