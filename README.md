# Yeovil District Hospital (YDH) - SIDeR Authentication Service

[![GitHub Release](https://img.shields.io/github/release/Fdawgs/ydh-sider-authentication-service.svg)](https://github.com/Fdawgs/ydh-sider-authentication-service/releases/latest/) [![Build Status](https://travis-ci.org/Fdawgs/ydh-sider-authentication-service.svg?branch=master)](https://travis-ci.org/Fdawgs/ydh-sider-authentication-service) [![Coverage Status](https://coveralls.io/repos/github/Fdawgs/ydh-sider-authentication-service/badge.svg?branch=master)](https://coveralls.io/github/Fdawgs/ydh-sider-authentication-service?branch=master) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&identifier=178393684)](https://dependabot.com) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Intro

[Mirth Connect](https://github.com/nextgenhealthcare/connect) is one of a few Trust Integration Engine (TIE)s used at YDH and an instance of it is being used to provide RESTful FHIR API endpoints that adhere to NHS Digital's [Care Connect FHIR Profiles](https://nhsconnect.github.io/CareConnectAPI/). These endpoints are set up to provide patient data for the [SIDeR programme](https://www.somersetccg.nhs.uk/your-health/sharing-your-information/sider/).

Mirth Connect does not provide SSL/TLS support out of the box, which is a requirement of the SIDeR programme to secure patient data. As such, this Node.js application using the [Express framework](https://expressjs.com/) has been created to provide this functionality whilst at the same time handling bearer authorization API keys in the HTTP header, acting as middleware between the firewall and the targeted FHIR/HTTP listener channel.

To provide further security [Helmet](https://helmetjs.github.io/) is used as part of this application.

# Prerequisites

-   [Node.js](https://nodejs.org/en/)
-   [Mirth Connect](https://github.com/nextgenhealthcare/connect)
-   [Yarn](https://yarnpkg.com)

# Deployment

## Standard deployment

1. Navigate to the repo
2. Run `yarn install` to install dependencies
3. Configure the application in `src/config.js`, ensuring the port of the application is different from the HTTP/FHIR listener channel in Mirth Connect that it is providing SSL connectivity for
4. Run `yarn start`

The Express server should now be up and running on the port set in the config. You should see the following output:

```
ydh-sider-authentication-service listening for requests at http://127.0.0.1:8205
```

To quickly test it open your request builder of choice (i.e. Insomnia or Postman) and create and execute a new GET request.
An example of the headers used can be found below:

```http
GET /3_0_1/Encounter/test HTTP/1.1
Host: 127.0.0.1:8205
Content-Type: application/fhir+json
Authorization: Bearer Jimmini
```

A FHIR resource should be returned.

## Deploying using PM2

It is [recommended](https://expressjs.com/en/advanced/pm.html) that you use a process manager such as [PM2](https://pm2.keymetrics.io/) when deploying Express applications like this into production.

1. Navigate to the repo
2. Run `yarn install` to install dependencies
3. Configure the application in `src/config.js`
4. Run `yarn global add pm2` to install pm2 globally
5. Launch application with `pm2 start .pm2.config.js`
6. Check the application has been deployed using `pm2 list` or `pm2 monit`

## Setting up as a Windows Service

Yeovil District Hospital is heavily invested in Microsoft's ecosystem.
As such, this implementation uses the [winser](https://github.com/jfromaniello/winser) package to allow the Node.js application to be deployed as a Windows Service.

### To install as a service:

1. Navigate to the repo
2. Run `yarn install` to install dependencies
3. Configure the application in `src/config.js`
4. Run `yarn install-windows-service` as administrator
5. The service should now be visible in Services

**Note**: When you add or remove API keys, or change any settings in the configuration file, you will need to restart the service for the changes to take effect.

### To uninstall the service:

1. Navigate to the repo
2. Run `yarn uninstall-windows-service` as administrator
3. The service will be uninstalled silently

# Contributing

Please see [CONTRIBUTING.md](https://github.com/Fdawgs/ydh-sider-authentication-service/blob/master/CONTRIBUTING.md) for more details regarding contributing to this project.

# License

`ydh-sider-authentication-service` is licensed under the [MIT](https://github.com/Fdawgs/ydh-sider-authentication-service/blob/master/LICENSE) license.
