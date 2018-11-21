# [1.0.0](https://github.com/dictyBase/dictyaccess/compare/0.1.0...1.0.0) (2018-11-21)


### Bug Fixes

* add padding to bird's eye dashboard ([d7b625a](https://github.com/dictyBase/dictyaccess/commit/d7b625a))
* fix display of second tab on circos page ([d185fc2](https://github.com/dictyBase/dictyaccess/commit/d185fc2))


### Code Refactoring

* refactor circos into more appropriately named components, update routes ([af239b8](https://github.com/dictyBase/dictyaccess/commit/af239b8))


### Features

* add circos pseudogenes display component ([acf7580](https://github.com/dictyBase/dictyaccess/commit/acf7580)), closes [#25](https://github.com/dictyBase/dictyaccess/issues/25)
* add ErrorBoundary component to provide fallback UI in case of JS errors ([a960de5](https://github.com/dictyBase/dictyaccess/commit/a960de5)), closes [#12](https://github.com/dictyBase/dictyaccess/issues/12)
* add ErrorPage component to display user-friendly error messages ([8c4ac2f](https://github.com/dictyBase/dictyaccess/commit/8c4ac2f)), closes [#12](https://github.com/dictyBase/dictyaccess/issues/12)
* add pseudogene thumbnails, convert dropdown to navlinks ([ee7aaed](https://github.com/dictyBase/dictyaccess/commit/ee7aaed)), closes [#25](https://github.com/dictyBase/dictyaccess/issues/25)
* add pseudogene tracks to main gene models ([4df7b10](https://github.com/dictyBase/dictyaccess/commit/4df7b10)), closes [#25](https://github.com/dictyBase/dictyaccess/issues/25)
* add reusable Circos component ([ef3290f](https://github.com/dictyBase/dictyaccess/commit/ef3290f))
* convert mini circos display to image thumbnails on bird's eye dashboard ([57f328a](https://github.com/dictyBase/dictyaccess/commit/57f328a)), closes [#27](https://github.com/dictyBase/dictyaccess/issues/27)
* convert svg vertical grid to image thumbnails ([3d6497d](https://github.com/dictyBase/dictyaccess/commit/3d6497d)), closes [#27](https://github.com/dictyBase/dictyaccess/issues/27)
* remove ticks and labels from circos image thumbnails ([dc5395e](https://github.com/dictyBase/dictyaccess/commit/dc5395e))
* update gene display to use betafunc backend ([cb5ccde](https://github.com/dictyBase/dictyaccess/commit/cb5ccde)), closes [#28](https://github.com/dictyBase/dictyaccess/issues/28)
* update gene model thumbnails to include pseudogene tracks ([7c15365](https://github.com/dictyBase/dictyaccess/commit/7c15365))
* update gene model thumbnails to match new circos displays ([ea83c7a](https://github.com/dictyBase/dictyaccess/commit/ea83c7a))


### BREAKING CHANGES

* /genemodels route was changed to /genes

# [0.1.0](https://github.com/dictyBase/dictyaccess/compare/0.0.5...0.1.0) (2018-10-19)


### Bug Fixes

* update login process to match that of other applications ([64adb37](https://github.com/dictyBase/dictyaccess/commit/64adb37)), closes [#23](https://github.com/dictyBase/dictyaccess/issues/23)
* update login redirect path to use basename ([d783863](https://github.com/dictyBase/dictyaccess/commit/d783863)), closes [#23](https://github.com/dictyBase/dictyaccess/issues/23)


### Features

* add muiTheme, make colors consistent through dashboard ([f9b1c4c](https://github.com/dictyBase/dictyaccess/commit/f9b1c4c))
* replace loading skeleton with MUI circular progress ([308dbbc](https://github.com/dictyBase/dictyaccess/commit/308dbbc)), closes [#16](https://github.com/dictyBase/dictyaccess/issues/16)
