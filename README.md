# dictyaccess

[![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)](LICENSE)  
![GitHub tag](https://img.shields.io/github/v/tag/dictyBase/dictyaccess)  
![GitHub action](https://github.com/dictyBase/dictyaccess/workflows/Node%20CI/badge.svg)
[![codecov](https://codecov.io/gh/dictyBase/dictyaccess/branch/develop/graph/badge.svg)](https://codecov.io/gh/dictyBase/dictyaccess)  
[![Dependency Status](https://david-dm.org/dictyBase/dictyaccess/develop.svg?style=flat-square)](https://david-dm.org/dictyBase/dictyaccess/develop)
[![devDependency Status](https://david-dm.org/dictyBase/dictyaccess/develop/dev-status.svg?style=flat-square)](https://david-dm.org/dictyBase/dictyaccess/develop?type=dev)  
[![Technical debt](https://badgen.net/codeclimate/tech-debt/dictyBase/dictyaccess)](https://codeclimate.com/github/dictyBase/dictyaccess/trends/technical_debt)
[![Issues](https://badgen.net/codeclimate/issues/dictyBase/dictyaccess)](https://codeclimate.com/github/dictyBase/dictyaccess/issues)
[![Maintainability percentage](https://badgen.net/codeclimate/maintainability-percentage/dictyBase/dictyaccess)](https://codeclimate.com/github/dictyBase/dictyaccess)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=dictyBase/dictyaccess)](https://dependabot.com)  
![Issues](https://badgen.net/github/issues/dictyBase/dictyaccess)
![Open Issues](https://badgen.net/github/open-issues/dictyBase/dictyaccess)
![Closed Issues](https://badgen.net/github/closed-issues/dictyBase/dictyaccess)
![Total PRS](https://badgen.net/github/prs/dictyBase/dictyaccess)
![Open PRS](https://badgen.net/github/open-prs/dictyBase/dictyaccess)
![Closed PRS](https://badgen.net/github/closed-prs/dictyBase/dictyaccess)
![Merged PRS](https://badgen.net/github/merged-prs/dictyBase/dictyaccess)  
![Commits](https://badgen.net/github/commits/dictyBase/dictyaccess/develop)
![Last commit](https://badgen.net/github/last-commit/dictyBase/dictyaccess/develop)
![Branches](https://badgen.net/github/branches/dictyBase/dictyaccess)
![Tags](https://badgen.net/github/tags/dictyBase/dictyaccess)
![GitHub repo size](https://img.shields.io/github/repo-size/dictyBase/dictyaccess?style=plastic)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dictyBase/dictyaccess?style=plastic)
[![Lines of Code](https://badgen.net/codeclimate/loc/dictyBase/dictyaccess)](https://codeclimate.com/github/dictyBase/dictyaccess/code)  
[![Funding](https://badgen.net/badge/NIGMS/Rex%20L%20Chisholm,dictyBase/yellow?list=|)](https://projectreporter.nih.gov/project_info_description.cfm?aid=9476993)
[![Funding](https://badgen.net/badge/NIGMS/Rex%20L%20Chisholm,DSC/yellow?list=|)](https://projectreporter.nih.gov/project_info_description.cfm?aid=9438930)

This is the [dictyAccess](https://testdb.dictybase.org/dictyaccess) data visualization dashboard application.

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

For auth/login purposes:

- [graphql-authserver](https://github.com/dictyBase/graphql-authserver)
- [modware-auth](https://github.com/dictyBase/modware-auth)
- [modware-identity](https://github.com/dictyBase/modware-identity)
- [modware-user](https://github.com/dictyBase/modware-user)

## Active Developers

<a href="https://sourcerer.io/wildlifehexagon"><img src="https://sourcerer.io/assets/avatar/wildlifehexagon" height="80px" alt="Sourcerer"></a>
<a href="https://sourcerer.io/cybersiddhu"><img src="https://sourcerer.io/assets/avatar/cybersiddhu" height="80px" alt="Sourcerer"></a>
