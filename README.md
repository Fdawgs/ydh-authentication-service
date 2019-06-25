Yeovil District Hospital (YDH) - SIDeR Authentication Service
==========================================
[![Build Status](https://travis-ci.org/Fdawgs/ydh-sider-authentication-service.svg?branch=master)](https://travis-ci.org/Fdawgs/ydh-sider-authentication-service) [![Greenkeeper badge](https://badges.greenkeeper.io/Fdawgs/ydh-sider-authentication-service.svg)](https://greenkeeper.io/)

## Intro
[Mirth Connect](https://github.com/nextgenhealthcare/connect) is one of a few Trust Integration Engine (TIE)s used at YDH and an instance of it is being used to provide RESTful FHIR API endpoints that adhere to NHS Digital's [Care Connect FHIR Profiles](https://nhsconnect.github.io/CareConnectAPI/). These endpoints are set up to provide patient data for the [SIDeR programme](https://www.somersetccg.nhs.uk/your-health/sharing-your-information/sider/).

Mirth Connect does not provide HTTPS/SSL support out of the box which is a requirement of the SIDeR programme to secure patient data. As such a Node.js service using the [Express framework](https://expressjs.com/) has been created to provide this whilst at the same time handling API keys in the HTTP header.
To provide further security [Helmet](https://helmetjs.github.io/) is used as part of this service.

## Prerequisites
- [Node.js](https://nodejs.org/en/)
- [Mirth Connect](https://github.com/nextgenhealthcare/connect)



## Setup
1. Clone or download this repository from Github
2. Navigate to the repo directory using a CLI (after it has been extracted if downloaded as ZIP)
3. Set up the config of the service in `src/config.json`
4. Ensure the port of the service is different from the HTTP/FHIR listener channel in Mirth Connect that it is providing SSL connectivity for
5. Run `npm install`
6. Run `npm run install-windows-service` to set up as a Windows Service

### Configuration options

The options for this service are set in src/config.json, with the default values:

```jsonc
{
	"name" : "ydh-sider-authentication-service",
	"port" : "443",
	"listener_url" : "http://localhost:444", // url and port of what the Mirth Connect FHIR Listener channel is listening on.
	"USE_HTTPS": true, // If USE_HTTPS set to true, server will use the ssl key and cert in the object to provide HTTPS.
	"ssl" : {
		"key" : "./ssl_certificate/ydhclientcert.key",
		"cert" : "./ssl_certificate/ydhclientcert.cer"
	},
	"apikey": {
		"header": "x-api-key",
		"value": "Jimmini"
	}
}
```

Alter these as needed prior to deploying as a service.

## License
`ydh-sider-authentication-service` is licensed under the [MIT](https://github.com/Fdawgs/ydh-sider-authentication-service/blob/master/LICENSE) license.
