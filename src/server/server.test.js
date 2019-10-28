const express = require('express');
const http = require('http');
const request = require('supertest');
const {
	authConfig, helmetConfig, serverConfig, winstonRotateConfig
} = require('../config');
const Server = require('./server');

describe('Server deployment', () => {
	const port = '8204';

	beforeAll(async () => {
		jest.setTimeout(30000);
	});

	test('Should assign default values if none provided', async () => {
		const server = new Server()
			.configureHelmet(helmetConfig)
			.configureWinston(winstonRotateConfig)
			.configureAuthorization(authConfig)
			.configureMiddleware()
			.configureRoute(serverConfig.listener_url, true)
			.listen(port);

		expect(server.config.protocol).toBe('http');
		await server.shutdown();
	});

	test('Should set protocol to https', async () => {
		const httpsServerConfig = {
			https: true
		};

		try {
			const server = new Server(httpsServerConfig)
				.configureHelmet(helmetConfig)
				.configureWinston(winstonRotateConfig)
				.configureAuthorization(authConfig)
				.configureMiddleware()
				.configureRoute(serverConfig.listener_url, true)
				.listen(port);

			expect(server.config.protocol).toBe('https');
		} catch (e) {
			// Do nothing
		}
	});
});

describe('GET response headers', () => {
	let server;
	let mirthServer;
	const path = `http://127.0.0.1:${serverConfig.port}/test`;
	serverConfig.https = false; // Only testing for headers

	beforeAll(async () => {
		jest.setTimeout(60000);

		// Stand up Express server to mimic responses from Mirth Connect FHIR Listener
		mirthServer = express();

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
			return res.status(200).json();
		});
		mirthServer = http.createServer(mirthServer);
		mirthServer.listen(8206, () => {
			console.log('Test Mirth listening at 8206');
		});

		// Stand up server
		server = new Server(serverConfig)
			.configureHelmet(helmetConfig)
			.configureWinston(winstonRotateConfig)
			.configureAuthorization(authConfig)
			.configureMiddleware()
			.configureRoute(serverConfig.listener_url, true)
			.listen(serverConfig.port);
	});

	afterAll(async () => {
		try {
			await server.shutdown();
			await mirthServer.close();
			setImmediate(() => { mirthServer.emit('close'); });
		} catch (e) {
			console.log(e);
			throw e;
		}
	});

	test('Should have expected response headers present', async () => {
		const expectedHeaders = {
			'access-control-allow-methods': 'GET',
			'access-control-allow-origin': '*',
			'access-control-expose-headers': 'Content-Location, Location',
			'cache-control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
			connection: 'keep-alive',
			'content-encoding': 'gzip',
			'content-length': '790',
			'content-security-policy': 'default-src \'self\'; script-src \'self\' \'unsafe-inline\'; style-src \'self\' \'unsafe-inline\'',
			'content-type': 'application/fhir+json; charset=UTF-8',
			date: 'Thu, 04 Jul 2019 11:59:41 GMT',
			expires: '0',
			pragma: 'no-cache',
			'strict-transport-security': 'max-age=15552000; includeSubDomains',
			'surrogate-control': 'no-store',
			vary: 'Accept-Encoding',
			'x-content-security-policy': 'default-src \'self\'; script-src \'self\' \'unsafe-inline\'; style-src \'self\' \'unsafe-inline\'',
			'x-content-type-options': 'nosniff',
			'x-dns-prefetch-control': 'off',
			'x-download-options': 'noopen',
			'x-frame-options': 'SAMEORIGIN',
			'x-webkit-csp': 'default-src \'self\'; script-src \'self\' \'unsafe-inline\'; style-src \'self\' \'unsafe-inline\'',
			'x-xss-protection': '1; mode=block'
		};

		const response = await request(path)
			.get('')
			.set('Accept', '*/*')
			.set('Content-Type', 'application/fhir+json')
			.set('Authorization', 'Bearer Jimmini')
			.set('accept-encoding', 'gzip, deflate')
			.set('Connection', 'keep-alive')
			.set('cache-control', 'no-cache');
		expect(response.statusCode).toBe(200);
		expect(response.res.headers).toEqual(expect.objectContaining(expectedHeaders));
	});

	test('Should have unexpected response headers removed', async () => {
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
			.set('Authorization', 'Bearer Jimmini')
			.set('accept-encoding', 'gzip, deflate')
			.set('Connection', 'keep-alive')
			.set('cache-control', 'no-cache');
		expect(response.statusCode).toBe(200);
		expect(Object.keys(response.res.headers))
			.toEqual(expect.not.arrayContaining(unexpectedHeaders));
	});
});
