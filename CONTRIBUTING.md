# Contributing

Contributions are welcome and any help that can be offered is greatly appreciated.
Please take a moment to read the entire contributing guide.

This repository uses the [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow),
meaning that development should take place in `feat/` branches, with the `master` branch being kept in a stable state.
When you submit pull requests, please make sure to fork from and submit back to `master`.

Other processes and specifications that are in use in this repository are:

-   [Semantic versioning](https://semver.org/)
-   [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/) following the @commitlint/config-conventional config
-   [Prettier](https://prettier.io/) style guide

## Getting Started

As noted in the prerequisites section of the readme file, this project requires that you have Node.js and Yarn installed.

With those in place you can fork the repository and clone it, and then run `yarn install` to install all dependencies.

### Development Workflow

After cloning and installing all the dependencies, there are several commands available for local development:

-   `yarn lint` - Lints everything in src directory
-   `yarn jest` - Runs Jest over all tests in src directory
-   `yarn test` - Runs `yarn lint` and `yarn jest` together
-   `yarn nodemon` - Starts a development server with live reload. Available on `localhost:8204` unless you specify your own PORT.

#### Test Setup

1. Configure the application in `src/config.js`
2. Ensure the port of the application is different from the HTTP/FHIR listener channel in Mirth Connect that it is providing SSL connectivity for
3. Run `yarn nodemon`

The Express server should now be up and running using [nodemon](https://nodemon.io/) on the default port 8205. You should see the following output:

```
ydh-sider-authentication-service listening for requests at http://127.0.0.1:8205
```

If an error is returned due to the port already being in use, change the value of the port key in src/config.js.

##### Testing

Open your request builder of choice (i.e. Insomnia or Postman) and create and execute a new GET request.
An example of the headers used can be found below:

```http
GET /3_0_1/Encounter/test HTTP/1.1
Host: 127.0.0.1:8205
Content-Type: application/fhir+json
Authorization: Bearer Jimmini
```

A FHIR resource should be returned.
The test listener will stop running once the CLI is exited or the Node.js REPL is terminated using `Ctrl+C`.

### Production Workflow

-   `yarn start` - Runs a production version. No live reload.

## Pull Request Checklist

Prior to submitting a pull request back to the main repository, please make sure you have completed the following steps:

1. Pull request base branch is set to `master`. All pull requests should be forked from and merged back to `master`
2. Run `yarn test` to check the code adheres to the defined style and that it passes the Jest tests
3. Run `yarn prettier` to run the Prettier code formatter over the code

## Release process

When cutting a release, the following steps need to be performed:

1. `package.json` needs to have a version update based on the content being released, remembering to adhere to semantic versioning
2. Generate the changelog with `yarn changelog`
3. Create a release branch with the convention `release/x.x.x`
4. Create a tag for the version; the naming convention is the version (vx.x.x)
5. Push the tag to the repository
6. Draft a release in the release tab with release notes, copying the notes from the changelog

## Issues

Please file your issues [here](https://github.com/Fdawgs/ydh-sider-authentication-service/issues) and try to provide as much information in the template as possible/relevant.