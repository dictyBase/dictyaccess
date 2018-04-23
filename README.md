## Master branch

[![Build Status](https://travis-ci.org/dictybase-playground/dictyaccess.svg?branch=master)](https://travis-ci.org/dictybase-playground/dictyaccess)
[![Dependency Status](https://david-dm.org/dictybase-playground/dictyaccess/master.svg?style=flat-square)](https://david-dm.org/dictybase-playground/dictyaccess/master)
[![devDependency Status](https://david-dm.org/dictybase-playground/dictyaccess/master/dev-status.svg?style=flat-square)](https://david-dm.org/dictybase-playground/dictyaccess/master?type=dev)

## Develop branch

[![Build Status](https://travis-ci.org/dictybase-playground/dictyaccess.svg?branch=develop)](https://travis-ci.org/dictybase-playground/dictyaccess)
[![Dependency Status](https://david-dm.org/dictybase-playground/dictyaccess/develop.svg?style=flat-square)](https://david-dm.org/dictybase-playground/dictyaccess/develop)
[![devDependency Status](https://david-dm.org/dictybase-playground/dictyaccess/develop/dev-status.svg?style=flat-square)](https://david-dm.org/dictybase-playground/dictyaccess/develop?type=dev)

## DictyAccess

This is the DictyAccess data visualization dashboard application. It has four different dashboards -- Genomes, Curation, Analytics and Dicty Stock Center. It is built with React and it uses [Material-UI](https://material-ui-next.com/) as a CSS framework (with [Styled Components](https://www.styled-components.com/) overrides when necessary).

The app's `src` folder is separated into three main folders:

**app**

* contains app layout and routing

**common**

* contains shared content for the entire application, including images, reusable components, constants and custom styling

**features**

* this is split into folders representing the four dashboards, and each has their specific components separated by type (i.e. charts, tables, etc.)

For more detailed documentation, run `npm run styleguide` which will start up a readable styleguide in the browser (locally at http://localhost:6060/). This will provide descriptions of each component, as well as details about the props that they accept.
