/** Need to remove features from ignore list as they are added to our app. */
const path = require("path")

module.exports = {
  styleguideDir: "styleguide",
  pagePerSection: true,
  components: "src/**/*.js",
  title: "DictyAccess",
  webpackConfig: require("react-scripts/config/webpack.config")("development"),
  ignore: [
    "**/*.test.{js,jsx,ts,tsx}",
    "**/*Actions.js",
    "**/*Constants.js",
    "**/*Reducer.js",
    "**/*Store.js",
    "**/*Styles.js",
    "src/common/components/withDataFetching.js",
    "src/features/BirdsEye/Circos/utils/*.js",
  ],
  sections: [
    {
      name: "Introduction",
      content: "src/README.md",
    },
    {
      name: "Common Components",
      components: "src/common/components/**/*.js",
      description:
        "This contains a list of components commonly used throughout the entire web application.",
    },
    {
      name: "Bird's Eye Dashboard",
      components: "src/features/BirdsEye/**/*.js",
      description: "All components used for the Bird's Eye Dashboard.",
    },
    // {
    //   name: "Error Displays",
    //   components: "src/features/Errors/*.tsx",
    //   description: "All components designed for handling errors."
    // },
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/app/styleguide/Wrapper"),
  },
  template: {
    favicon: "./public/favicon.ico",
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto",
        },
      ],
    },
  },
  theme: {
    maxWidth: "100%",
    color: {
      codeBackground: "#F5F5F5;",
      ribbonBackground: "#004080",
    },
    fontFamily: {
      base: "Roboto, sans-serif",
    },
    fontSize: {
      base: 14,
      text: 16,
      small: 13,
      h1: 40,
      h2: 24,
      h3: 18,
      h4: 18,
      h5: 16,
      h6: 16,
    },
  },
  ribbon: {
    url: "http://www.github.com/dictyBase/dictyaccess",
    text: "View on GitHub",
  },
}
