# Yeovil District Hospital (YDH) - SIDeR Authentication Service

[![GitHub Release](https://img.shields.io/github/release/Fdawgs/ydh-authentication-service.svg)](https://github.com/Fdawgs/ydh-authentication-service/releases/latest/) [![Build Status](https://travis-ci.org/Fdawgs/ydh-authentication-service.svg?branch=master)](https://travis-ci.org/Fdawgs/ydh-authentication-service) [![Coverage Status](https://coveralls.io/repos/github/Fdawgs/ydh-authentication-service/badge.svg?branch=master)](https://coveralls.io/github/Fdawgs/ydh-authentication-service?branch=master) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&identifier=178393684)](https://dependabot.com) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Intro

[Mirth Connect](https://github.com/nextgenhealthcare/connect) is one of a few Trust Integration Engine (TIE)s used at YDH and an instance of it is being used to provide RESTful FHIR API endpoints that adhere to NHS Digital's [Care Connect FHIR Profiles](https://nhsconnect.github.io/CareConnectAPI/).
Mirth Connect does not provide SSL/TLS support out of the box, which is a requirement of the SIDeR programme to secure patient data. As such, this Node.js application using the [Express framework](https://expressjs.com/) has been created to provide this functionality whilst at the same time handling bearer authorization API keys in the HTTP header, acting as middleware between the firewall and the targeted FHIR/HTTP listener channel.

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
3. Make a copy of the `.env.test` file in the root directory and rename to `.env.production`
4. Configure the application using the global variables in the `.env.production` file
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

1. Make a copy of the `.env.test` file in the root directory and rename to `.env.production`
2. Configure the application using the global variables in the `.env.production` file
3. Run `docker-compose up`

### Deploying using PM2

It is [recommended](https://expressjs.com/en/advanced/pm.html) that you use a process manager such as [PM2](https://pm2.keymetrics.io/) when deploying Express applications like this into production.

1. Navigate to the repo
2. Run `yarn install` to install dependencies
3. Make a copy of the `.env.test` file in the root directory and rename to `.env.production`
4. Configure the application using the global variables in the `.env.production` file
5. Set preferred CORS headers in Mirth Connect's install location in `config/mirth.properties`
6. Run `yarn global add pm2` to install pm2 globally
7. Launch application with `pm2 start .pm2.config.js`
8. Check the application has been deployed using `pm2 list` or `pm2 monit`

#### To install as a Windows service:

Yeovil District Hospital is heavily invested in Microsoft's ecosystem; as such the service can be deployed on Windows as a service.

1. Run `yarn global add @fdawgs/pm2-windows-service` to install [pm2-windows-service](https://classic.yarnpkg.com/en/package/@fdawgs/pm2-windows-service)
2. PM2 creates a default PM2 home folder under `C:/Users/<username>/.pm2` after its first run; copy the folder to a system accessible level i.e. `C:/.pm2`
3. Create a new PM2_HOME variable at the System level and set the value to `C:/.pm2`
4. Run `pm2 start .pm2.config.js` to start the application
5. Run `pm2 save` to save the process list
6. Run `pm2-service-install` to start as a service

When the service starts or restarts, it will start all the applications saved in the process list.
To uninstall the service run `pm2-service-uninstall`.

**Note:** PM2 has been configured to automatically restart the application if modifications are made to `src/config.js`.

## Contributing

Please see [CONTRIBUTING.md](https://github.com/Fdawgs/ydh-authentication-service/blob/master/CONTRIBUTING.md) for more details regarding contributing to this project.

## License

`ydh-authentication-service` is licensed under the [MIT](https://github.com/Fdawgs/ydh-authentication-service/blob/master/LICENSE) license.
