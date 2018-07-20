## Master branch

[![Build Status](https://travis-ci.org/dictybase/dictyaccess.svg?branch=master)](https://travis-ci.org/dictybase/dictyaccess)
[![Dependency Status](https://david-dm.org/dictybase/dictyaccess/master.svg?style=flat-square)](https://david-dm.org/dictybase/dictyaccess/master)
[![devDependency Status](https://david-dm.org/dictybase/dictyaccess/master/dev-status.svg?style=flat-square)](https://david-dm.org/dictybase/dictyaccess/master?type=dev)

## Develop branch

[![Build Status](https://travis-ci.org/dictybase/dictyaccess.svg?branch=develop)](https://travis-ci.org/dictybase/dictyaccess)
[![Dependency Status](https://david-dm.org/dictybase/dictyaccess/develop.svg?style=flat-square)](https://david-dm.org/dictybase/dictyaccess/develop)
[![devDependency Status](https://david-dm.org/dictybase/dictyaccess/develop/dev-status.svg?style=flat-square)](https://david-dm.org/dictybase/dictyaccess/develop?type=dev)

## DictyAccess

This is the DictyAccess data visualization dashboard application. It has six different dashboards -- Bird's Eye, Genome Stats, Annotations, Phylogeny, Analytics and Dicty Stock Center. It is built with [React](https://reactjs.org/) and it uses [Material-UI](https://material-ui-next.com/) as a CSS framework (with [Styled Components](https://www.styled-components.com/) overrides when necessary).

The app's `src` folder is separated into three main folders:

**app**

- contains app layout, routing and Redux reducers/store

**common**

- contains shared content for the entire application, including images, reusable components, constants and custom styling

**features**

- this is split into folders representing the different dashboards, and each has their specific components separated by type (i.e. charts, tables, etc.)

For more detailed documentation, run `npm run styleguide` which will start up a readable styleguide in the browser (locally at http://localhost:6060/). This will provide descriptions of each component, as well as details about the props that they accept.
