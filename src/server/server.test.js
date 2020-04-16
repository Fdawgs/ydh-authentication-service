const express = require('express');
const http = require('http');
const request = require('supertest');
const {
	helmetConfig,
	serverConfig,
	winstonRotateConfig
} = require('../config');
const Server = require('./server');

describe('Server deployment', () => {
	test('Should assign default values if none provided', async () => {
		const server = new Server()
			.configureHelmet(helmetConfig)
			.configureWinston(winstonRotateConfig)
			.configurePassport()
			.configureMiddleware()
			.configureErrorHandling()
			.listen();

		expect(server.config.protocol).toBe('http');
		await server.shutdown();
	});

	test('Should set protocol to https', async () => {
		const httpsServerConfig = { ...serverConfig };
		httpsServerConfig.https = true;

		try {
			const server = new Server(httpsServerConfig)
				.configureHelmet(helmetConfig)
				.configureWinston(winstonRotateConfig)
				.configurePassport()
				.configureMiddleware()
				.configureRoutes()
				.configureErrorHandling()
				.listen();

			expect(server.config.protocol).toBe('https');
			await server.shutdown();
		} catch (error) {
			// Do nothing
		}
	});
});

describe('Request response headers', () => {
	let server;
	let mirthServer;
	const path = `http://127.0.0.1:${serverConfig.port}/test`;
	serverConfig.https = false; // Only testing for headers

	beforeAll(async () => {

		// Stand up Express server to mimic responses from Mirth Connect FHIR Listener
		mirthServer = express();
		mirthServer.get('/test', (req, res) => {
			res.set({
				server: 'Mirth Connect FHIR Server (3.8.0.b1172)',
				'access-control-allow-methods':
					'GET, POST, PUT, DELETE, OPTIONS',
				'access-control-allow-origin': '*',
				'access-control-expose-headers': 'Content-Location, Location',
				etag: 'W/"1"',
				'content-type': 'application/fhir+json; charset=UTF-8',
				connection: 'keep-alive',
				date: 'Thu, 04 Jul 2019 11:59:41 GMT'
			});

			res.removeHeader('x-powered-by');
			res.removeHeader('connection');
			return res.status(200).send({});
		});

		mirthServer = http.createServer(mirthServer);
		mirthServer.listen(8206);

		// Stand up server
		server = new Server(serverConfig)
			.configureHelmet(helmetConfig)
			.configureWinston(winstonRotateConfig)
			.configurePassport()
			.configureMiddleware()
			.configureRoutes()
			.configureErrorHandling()
			.listen();
	});

	afterAll(async () => {
		try {
			await server.shutdown();
			await mirthServer.close();
			setImmediate(() => {
				mirthServer.emit('close');
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	});

	test('GET - Should have expected response headers present', async () => {
		const expectedHeaders = {
			'access-control-allow-origin': '*',
			'cache-control':
				'no-store, no-cache, must-revalidate, proxy-revalidate',
			connection: 'keep-alive',
			'content-security-policy':
				"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
			'content-type': 'application/fhir+json; charset=utf-8',
			date: 'Thu, 04 Jul 2019 11:59:41 GMT',
			expires: '0',
			pragma: 'no-cache',
			'strict-transport-security': 'max-age=15552000; includeSubDomains',
			'surrogate-control': 'no-store',
			vary: 'Accept-Encoding',
			'x-content-security-policy':
				"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
			'x-content-type-options': 'nosniff',
			'x-dns-prefetch-control': 'off',
			'x-download-options': 'noopen',
			'x-frame-options': 'DENY',
			'x-webkit-csp':
				"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
			'x-xss-protection': '1; mode=block'
		};

		const res = await request(path)
			.get('')
			.set('Accept', '*/*')
			.set('Content-Type', 'application/fhir+json')
			.set('Authorization', 'Bearer Jimmini')
			.set('accept-encoding', 'gzip, deflate')
			.set('Connection', 'keep-alive')
			.set('cache-control', 'no-cache');

		expect(res.statusCode).toBe(200);
		expect(res.headers).toMatchObject(expectedHeaders);
	});

	test('GET - Should have unexpected response headers removed', async () => {
		const unexpectedHeaders = [
			'etag',
			'last-modified',
			'location',
			'server',
			'x-powered-by'
		];

		const res = await request(path)
			.get('')
			.set('Accept', '*/*')
			.set('Content-Type', 'application/fhir+json')
			.set('Authorization', 'Bearer Jimmini')
			.set('accept-encoding', 'gzip, deflate')
			.set('Connection', 'keep-alive')
			.set('cache-control', 'no-cache');

		expect(res.statusCode).toBe(200);
		expect(Object.keys(res.headers)).toEqual(expect.not.arrayContaining(unexpectedHeaders));
	});

	test('OPTIONS - Should have expected response headers present', async () => {
		const expectedHeaders = {
			'access-control-allow-headers':
				'Origin, X-Requested-With, Content-Type, Accept, Authorization',
			'access-control-allow-methods': 'GET',
			'access-control-allow-origin': '*',
			'cache-control':
				'no-store, no-cache, must-revalidate, proxy-revalidate',
			connection: 'close',
			'content-security-policy':
				"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
			date: '',
			expires: '0',
			pragma: 'no-cache',
			'strict-transport-security': 'max-age=15552000; includeSubDomains',
			'surrogate-control': 'no-store',
			'x-content-security-policy':
				"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
			'x-content-type-options': 'nosniff',
			'x-dns-prefetch-control': 'off',
			'x-download-options': 'noopen',
			'x-frame-options': 'DENY',
			'x-webkit-csp':
				"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
			'x-xss-protection': '1; mode=block'
		};

		const res = await request(path)
			.options('');

		expect(res.statusCode).toBe(204);
		Object.keys(expectedHeaders).forEach((key) => {
			expect(res.headers).toHaveProperty(key);
			// date varies, so only test if key exists, not value of key
			if (key !== 'date') {
				expect(res.headers[key]).toEqual(expectedHeaders[key]);
			}
		});
	});
});