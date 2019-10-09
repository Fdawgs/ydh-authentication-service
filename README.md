Yeovil District Hospital (YDH) - SIDeR Authentication Service
==========================================
[![GitHub Release](https://img.shields.io/github/release/Fdawgs/ydh-sider-authentication-service.svg)](https://github.com/Fdawgs/ydh-sider-authentication-service/releases/latest/) [![Build Status](https://travis-ci.org/Fdawgs/ydh-sider-authentication-service.svg?branch=master)](https://travis-ci.org/Fdawgs/ydh-sider-authentication-service) [![Coverage Status](https://coveralls.io/repos/github/Fdawgs/ydh-sider-authentication-service/badge.svg?branch=master)](https://coveralls.io/github/Fdawgs/ydh-sider-authentication-service?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/Fdawgs/ydh-sider-authentication-service.svg)](https://greenkeeper.io/)

## Intro
[Mirth Connect](https://github.com/nextgenhealthcare/connect) is one of a few Trust Integration Engine (TIE)s used at YDH and an instance of it is being used to provide RESTful FHIR API endpoints that adhere to NHS Digital's [Care Connect FHIR Profiles](https://nhsconnect.github.io/CareConnectAPI/). These endpoints are set up to provide patient data for the [SIDeR programme](https://www.somersetccg.nhs.uk/your-health/sharing-your-information/sider/).

Mirth Connect does not provide SSL/TLS support out of the box which is a requirement of the SIDeR programme to secure patient data. As such this Node.js application using the [Express framework](https://expressjs.com/) has been created to provide this functionality whilst at the same time handling bearer authorization API keys in the HTTP header, acting as middleware between the firewall and the targeted FHIR/HTTP listener channel.

To provide further security [Helmet](https://helmetjs.github.io/) is used as part of this application.

## Prerequisites
- [Node.js](https://nodejs.org/en/)
- [Mirth Connect](https://github.com/nextgenhealthcare/connect)



## Test Setup
1. Clone or download this repository from Github
2. Navigate to the repo directory using a CLI (after it has been extracted if downloaded as ZIP)
3. Set up the config of the application in `src/config.js`
4. Ensure the port of the application is different from the HTTP/FHIR listener channel in Mirth Connect that it is providing SSL connectivity for
5. Run `npm install`
6. Run `npm run nodemon`

The Express server should now be up and running using [nodemon](https://nodemon.io/) on the default port 8205. You should see the following output:

```
ydh-sider-authentication-service listening for requests at http://127.0.0.1:8205
```
If an error is returned due to the port already being in use, change the value of the port key in src/config.js.

## Testing
Open your request builder of choice (i.e. Postman) and create and execute a new GET request.
An example of the headers used can be found below: 

```http
GET /3_0_1/Encounter/test HTTP/1.1
Host: 127.0.0.1:8205
Content-Type: application/fhir+json
Authorization: Bearer Jimmini
```
A FHIR resource should be returned.


## Setting up as a Windows Service
The test listener will stop running once the CLI is exited or the Node.js REPL is terminated using `Ctrl+C`, which is not ideal.
As such this implementation uses the [winser](https://github.com/jfromaniello/winser) package to deploy the Node.js application
as a Windows Service.

### To install as a service:
1. Navigate to the repo
2. Run `npm run install-windows-service` as administrator
3. A prompt will appear asking for confirmation of installation type `y` and hit enter
4. The service should now be visible in Services

**Note**: When you add or remove API keys, or change any settings in the config file, you will need to restart the service for the changes to take effect.

### To uninstall the service:
1. Navigate to the repo
2. Run `npm run uninstall-windows-service` as administrator
3. The service will be uninstalled silently

## Setting up as a Windows Service
The test listener will stop running once the CLI is exited or the Node.js REPL is terminated using `Ctrl+C`, which is not ideal.
As such this implementation uses the [winser](https://github.com/jfromaniello/winser) package to deploy the Node.js application
as a Windows Service.

### To install as a service:
1. Navigate to the repo
2. Run `npm run install-windows-service` as administrator
3. A prompt will appear asking for confirmation of installation type `y` and hit enter
4. The service should now be visible in Services

**Note**: When you add or remove API keys, or change any settings in the config file, you will need to restart the service for the changes to take effect.

### To uninstall the service:
1. Navigate to the repo
2. Run `npm run uninstall-windows-service` as administrator
3. The service will be uninstalled silently

## License
`ydh-sider-authentication-service` is licensed under the [MIT](https://github.com/Fdawgs/ydh-sider-authentication-service/blob/master/LICENSE) license.
