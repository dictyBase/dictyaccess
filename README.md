# dictyaccess

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)](LICENSE)  
![GitHub tag](https://img.shields.io/github/v/tag/dictyBase/dictyaccess)
![GitHub action](https://github.com/dictyBase/dictyaccess/workflows/Node%20CI%20Develop/badge.svg)  
[![codecov](https://codecov.io/gh/dictyBase/dictyaccess/branch/develop/graph/badge.svg)](https://codecov.io/gh/dictyBase/dictyaccess)
[![Maintainability](https://badgen.net/codeclimate/maintainability/dictyBase/dictyaccess)](https://codeclimate.com/github/dictyBase/dictyaccess)  
![Last commit](https://badgen.net/github/last-commit/dictyBase/dictyaccess/develop)  
[![Funding](https://badgen.net/badge/Funding/Rex%20L%20Chisholm,dictyBase,DCR/yellow?list=|)](https://reporter.nih.gov/project-details/10024726)

This is the [dictyAccess](https://dictycr.org/dictyaccess) data visualization dashboard application.

## Cloud Native Development

All dictyBase development is now done with cloud native development in mind. It is expected
that you have your own [Kubernetes](https://kubernetes.io/) cluster running. Documentation
for the cloud deployment process can be found [here](https://github.com/dictyBase/Migration/tree/master/deployment).

The general idea is that after every git commit a new Docker image is built based on that commit,
pushed to Docker Hub, then the corresponding Helm chart is upgraded with that image tag
inside your cluster.

## Local Development

In order for this application to work locally, you will need to configure the list of
login providers.

- Copy the provided sample [clientConfig.sample.ts](src/common/utils/clientConfig.sample.ts) file
  to **clientConfig.ts** in the same folder.
- Add any provider names and their corresponding client IDs.
- All providers should have a matching counterpart in the
  [oauthConfig.js](src/common/utils/oauthConfig.ts) file. Fill up all of the
  configuration parameters for every new provider in that file.

After setting up the login providers, you can run `npm install` and `npm start` as usual.
There are also [husky](https://github.com/typicode/husky) scripts set up to run unit tests
on `pre-commit` and run [Skaffold](https://github.com/GoogleContainerTools/skaffold) on `post-commit`.

## Backend Requirements

This app requires the following services to be running:

- [dashfn](https://github.com/dictybase-playground/kubeless-gofn/tree/master/dashboard) (`REACT_APP_FUNC_SERVER`)
- [graphql-server](https://github.com/dictyBase/graphql-server)
- [graphql-authserver](https://github.com/dictyBase/graphql-authserver)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.erichartline.net/"><img src="https://avatars3.githubusercontent.com/u/13489381?v=4" width="100px;" alt=""/><br /><sub><b>Eric Hartline</b></sub></a><br /><a href="https://github.com/dictyBase/dictyaccess/issues?q=author%3Awildlifehexagon" title="Bug reports">🐛</a> <a href="https://github.com/dictyBase/dictyaccess/commits?author=wildlifehexagon" title="Code">💻</a> <a href="https://github.com/dictyBase/dictyaccess/commits?author=wildlifehexagon" title="Documentation">📖</a> <a href="#design-wildlifehexagon" title="Design">🎨</a> <a href="#maintenance-wildlifehexagon" title="Maintenance">🚧</a> <a href="https://github.com/dictyBase/dictyaccess/commits?author=wildlifehexagon" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://cybersiddhu.github.com/"><img src="https://avatars3.githubusercontent.com/u/48740?v=4" width="100px;" alt=""/><br /><sub><b>Siddhartha Basu</b></sub></a><br /><a href="https://github.com/dictyBase/dictyaccess/commits?author=cybersiddhu" title="Code">💻</a> <a href="#maintenance-cybersiddhu" title="Maintenance">🚧</a> <a href="https://github.com/dictyBase/dictyaccess/issues?q=author%3Acybersiddhu" title="Bug reports">🐛</a> <a href="#content-cybersiddhu" title="Content">🖋</a> <a href="https://github.com/dictyBase/dictyaccess/commits?author=cybersiddhu" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Misc badges

![Issues](https://badgen.net/github/issues/dictyBase/dictyaccess)
![Open Issues](https://badgen.net/github/open-issues/dictyBase/dictyaccess)
![Closed Issues](https://badgen.net/github/closed-issues/dictyBase/dictyaccess)  
![Total PRS](https://badgen.net/github/prs/dictyBase/dictyaccess)
![Open PRS](https://badgen.net/github/open-prs/dictyBase/dictyaccess)
![Closed PRS](https://badgen.net/github/closed-prs/dictyBase/dictyaccess)
![Merged PRS](https://badgen.net/github/merged-prs/dictyBase/dictyaccess)  
![Commits](https://badgen.net/github/commits/dictyBase/dictyaccess/develop)
![Branches](https://badgen.net/github/branches/dictyBase/dictyaccess)
![Tags](https://badgen.net/github/tags/dictyBase/dictyaccess)  
![GitHub repo size](https://img.shields.io/github/repo-size/dictyBase/dictyaccess?style=plastic)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dictyBase/dictyaccess?style=plastic)
[![Lines of Code](https://badgen.net/codeclimate/loc/dictyBase/dictyaccess)](https://codeclimate.com/github/dictyBase/dictyaccess/code)
