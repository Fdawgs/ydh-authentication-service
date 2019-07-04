/* eslint-disable */

const fs = require('fs');
const request = require('supertest');
const ExpressServer = require('./expressServer');
const httpMocks = require('node-mocks-http');
const rawData = fs.readFileSync('./src/config.json');
const config = JSON.parse(rawData);
config.USE_HTTPS = false; // Only testing for headers at present
let server;
const path = `http://127.0.0.1:${config.port}`;



describe('GET response headers', () => {
	beforeAll(async () => {

		// Stand up Express server to mimic responses from Mirth Connect FHIR Listener
		const express = require('express');
		let mirthServer = express();
		const http = require('http');
		mirthServer.get('/test', (req, res) => {
			res.setHeader('server', 'Mirth Connect FHIR Server (3.8.0.b1172)');
			res.setHeader('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
			res.setHeader('access-control-allow-origin', '*');
			res.setHeader('access-control-expose-headers', 'Content-Location, Location');
			res.setHeader('etag', 'W/"1"');
			res.setHeader('content-type', 'application/fhir+json; charset=UTF-8');
			res.setHeader('content-encoding', 'gzip');
			res.setHeader('content-length', '790');

			res.setHeader('connection', 'keep-alive');
			res.setHeader('date', 'Thu, 04 Jul 2019 11:59:41 GMT');

			res.removeHeader('x-powered-by');
			res.removeHeader('connection');
			//console.log(res);
			return res.status(200).json();
		});
		mirthServer = await http.createServer(mirthServer);
		mirthServer.listen(444, () => {
			console.log('listening at 444');
		});


		// Stand up server
		server = new ExpressServer(config);
		server.configureHelmet();
		server.configureMiddleware();
		server.configureRoute(config.listener_url, true);
		// server.configureRoute(config.listener_url, true);
		server.listen(config.port);
	});

	afterAll(() => {
		server.close();
		mirthServer.close();
	});

	test('Expected response headers present', async () => {
		const expectedHeaders = {
			'x-dns-prefetch-control': 'off',
			'x-frame-options': 'SAMEORIGIN',
			'strict-transport-security': 'max-age=15552000; includeSubDomains',
			'x-download-options': 'noopen',
			'x-content-type-options': 'nosniff',
			'x-xss-protection': '1; mode=block',
			'surrogate-control': 'no-store',
			'cache-control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
			'connection': 'keep-alive',
			pragma: 'no-cache',
			expires: '0',
			'content-security-policy': 'default-src \'self\'',
			'x-content-security-policy': 'default-src \'self\'',
			'x-webkit-csp': 'default-src \'self\'',
			'access-control-allow-methods': 'GET',
			'access-control-allow-origin': '*',
			'access-control-expose-headers': 'Content-Location, Location',
			'content-type': 'application/fhir+json; charset=UTF-8',
			'vary': 'Accept-Encoding',
			'content-encoding': 'gzip',
			'content-length': '790',
			'date': 'Thu, 04 Jul 2019 11:59:41 GMT'
		};

		const response = await request(path+'/test')
			.get('')
			.set('Accept', '*/*')
			.set('Content-Type', 'application/fhir+json')
			.set('x-api-key', 'Jimmini')
			.set('accept-encoding', 'gzip, deflate')
			.set('Connection', 'keep-alive')
			.set('cache-control', 'no-cache');
		console.log(response.res.headers);
		expect(response.statusCode).toBe(200); // Haven't specified a resource
		expect(response.res.headers).toEqual(expect.objectContaining(expectedHeaders));
	}, 30000);

	test('Removed response headers not present', async () => {
		const unexpectedHeaders = [
			'etag',
			'last-modified',
			'location',
			'server',
			'x-powered-by'
		];
		const response = await request(path)
			.get('')
			.set('Accept', '*/*')
			.set('Content-Type', 'application/fhir+json')
			.set('x-api-key', 'Jimmini')
			.set('accept-encoding', 'gzip, deflate')
			.set('Connection', 'keep-alive')
			.set('cache-control', 'no-cache');
			//console.log(response);
		expect(response.statusCode).toBe(404); // Haven't specified a resource
		expect(Object.keys(response.res.headers)).toEqual(expect.not.arrayContaining(unexpectedHeaders));
	}, 30000);
});
