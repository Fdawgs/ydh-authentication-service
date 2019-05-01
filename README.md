Yeovil District Hospital - SIDeR Authentication Service
==========================================
[![Known Vulnerabilities](https://snyk.io/test/github/Fdawgs/ydh-sider-authentication-service/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Fdawgs/ydh-sider-authentication-service?targetFile=package.json)
[![Build Status](https://travis-ci.org/Fdawgs/ydh-sider-authentication-service.svg?branch=master)](https://travis-ci.org/Fdawgs/ydh-sider-authentication-service)

## Intro
[Mirth Connect](https://github.com/nextgenhealthcare/connect) is one of a few TIEs used at the hospital and plans are for it to be used to provide a FHIR REST API, utilising the FHIR listener extensions for both the [SIDeR programme](https://www.somersetccg.nhs.uk/your-health/sharing-your-information/sider/) and [NHS Care Connect APIs](https://nhsconnect.github.io/CareConnectAPI/), to allow for calls for patient data to be made.

SSL support is not available out of the box so this Node.js service, using the Express framework, has been created to provide API key and HTTPS/SSL authentication (as required by the SIDeR programme to secure patient data) and then redirect to the web listener in the TIE.

To provide further security [Helmet](https://helmetjs.github.io/) is used as part of this service.

## Prerequisites
- [Node.js](https://nodejs.org/en/)
- [Mirth Connect](https://github.com/nextgenhealthcare/connect)



## Setup
1. Download this repository from Github
2. Navigate to the repo directory using a CLI (after it has been extracted if downloaded as ZIP)
3. Set up the config of the service in `src/config.json`
4. Ensure the port of the service is different from the FHIR Listener channel in Mirth Connect
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
`ydh-sider-authentication-service` is licensed under the [MIT](https://github.com/Fdawgs/ydh-mirth-connect-sider-router/blob/master/LICENSE) license.
