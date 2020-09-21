# Yeovil District Hospital (YDH) - Authentication Service

[![GitHub Release](https://img.shields.io/github/release/Fdawgs/ydh-authentication-service.svg)](https://github.com/Fdawgs/ydh-authentication-service/releases/latest/) [![Build Status](https://travis-ci.com/Fdawgs/ydh-authentication-service.svg?branch=master)](https://travis-ci.com/Fdawgs/ydh-authentication-service) [![Coverage Status](https://coveralls.io/repos/github/Fdawgs/ydh-authentication-service/badge.svg?branch=master)](https://coveralls.io/github/Fdawgs/ydh-authentication-service?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/Fdawgs/ydh-authentication-service/badge.svg)](https://snyk.io/test/github/Fdawgs/ydh-authentication-service) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Intro

[Mirth Connect](https://github.com/nextgenhealthcare/connect) is one of a few Trust Integration Engine (TIE)s used at YDH, however it does not provide SSL/TLS support out of the box. As such, this Node.js application using the [Express framework](https://expressjs.com/) has been created to provide this functionality whilst at the same time handling bearer authorization API keys in the HTTP header, acting as middleware between the firewall and the targeted FHIR/HTTP listener channel.

To provide further security [Helmet](https://helmetjs.github.io/) is used as part of this application.

This service was originally written to protect FHIR endpoints that provide patient data for the [SIDeR programme](https://www.somersetccg.nhs.uk/your-health/sharing-your-information/sider/).

## Prerequisites

-   [Node.js](https://nodejs.org/en/)
-   [Mirth Connect](https://github.com/nextgenhealthcare/connect)
-   [Yarn](https://yarnpkg.com)

## Deployment

### Standard deployment

1. Navigate to the repo
2. Run `yarn install` to install dependencies
3. Make a copy of `.env.template` in the root directory and rename to `.env.production`
4. Configure the application using the global variables in `.env.production`
5. Set preferred CORS headers in Mirth Connect's install location in `config/mirth.properties`
6. Run `yarn start`

The Express server should now be up and running on the port set in the config. You should see the following output:

```
ydh-authentication-service listening for requests at http://0.0.0.0:8215
```

To quickly test it open your request builder of choice (i.e. Insomnia or Postman), create, and execute a new GET request.
An example of the headers used can be found below:

```
curl --request GET \
  --url http://0.0.0.0:8215/Encounter/test \
  --header 'authorization: Bearer Jimmini' \
  --header 'content-type: application/fhir+json' \
```

A FHIR resource should be returned.

### Deploying using Docker

This requires [Docker](https://www.docker.com/products) installed.

1. Make a copy of `.env.template` in the root directory and rename to `.env.production`
2. Configure the application using the global variables in `.env.production`
3. Run `docker-compose up`

### Deploying using PM2

It is [recommended](https://expressjs.com/en/advanced/pm.html) that you use a process manager such as [PM2](https://pm2.keymetrics.io/) when deploying Express applications like this into production.

1. Navigate to the repo
2. Run `yarn install` to install dependencies
3. Make a copy of `.env.template` in the root directory and rename to `.env.production`
4. Configure the application using the global variables in `.env.production`
5. Set preferred CORS headers in Mirth Connect's install location in `config/mirth.properties`
6. Run `yarn global add pm2` to install pm2 globally
7. Launch application with `pm2 start .pm2.config.js`
8. Check the application has been deployed using `pm2 list` or `pm2 monit`

#### To install as a Windows service:

Yeovil District Hospital is heavily invested in Microsoft's ecosystem; utilise [pm2-installer](https://github.com/jessety/pm2-installer) to easily install PM2 as a Windows service.

**Note:** PM2 has been configured to automatically restart the application if modifications are made to `src/config.js`.

## Contributing

Please see [CONTRIBUTING.md](https://github.com/Fdawgs/ydh-authentication-service/blob/master/CONTRIBUTING.md) for more details regarding contributing to this project.

## License

`ydh-authentication-service` is licensed under the [MIT](https://github.com/Fdawgs/ydh-authentication-service/blob/master/LICENSE) license.
