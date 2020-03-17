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
	beforeAll(async () => {
		jest.setTimeout(30000);
	});

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
			res.setHeader(
				'access-control-allow-methods',
				'GET, POST, PUT, DELETE, OPTIONS'
			);
			res.setHeader('access-control-allow-origin', '*');
			res.setHeader(
				'access-control-expose-headers',
				'Content-Location, Location'
			);
			res.setHeader('etag', 'W/"1"');
			res.setHeader(
				'content-type',
				'application/fhir+json; charset=UTF-8'
			);

			res.setHeader('connection', 'keep-alive');
			res.setHeader('date', 'Thu, 04 Jul 2019 11:59:41 GMT');

			res.removeHeader('x-powered-by');
			res.removeHeader('connection');
			return res.status(200).send({});
		});

		mirthServer = http.createServer(mirthServer);

		mirthServer.listen(8206, () => {
			console.log('Test Mirth listening at 8206');
		});

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

	test('Should have expected response headers present', async () => {
		const expectedHeaders = {
			'allow': 'GET',
			'access-control-allow-origin': '*',
			'access-control-expose-headers': 'Content-Location, Location',
			'cache-control':
				'no-store, no-cache, must-revalidate, proxy-revalidate',
			connection: 'keep-alive',
			'content-length': '2',
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

		const response = await request(path)
			.get('')
			.set('Accept', '*/*')
			.set('Content-Type', 'application/fhir+json')
			.set('Authorization', 'Bearer Jimmini')
			.set('accept-encoding', 'gzip, deflate')
			.set('Connection', 'keep-alive')
			.set('cache-control', 'no-cache');
		expect(response.statusCode).toBe(200);
		expect(response.res.headers).toMatchObject(expectedHeaders);
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
		expect(Object.keys(response.res.headers)).toEqual(
			expect.not.arrayContaining(unexpectedHeaders)
		);
	});
});

describe('OPTIONS response headers', () => {
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
			res.setHeader(
				'access-control-allow-methods',
				'GET, POST, PUT, DELETE, OPTIONS'
			);
			res.setHeader('access-control-allow-origin', '*');
			res.setHeader(
				'access-control-expose-headers',
				'Content-Location, Location'
			);
			res.setHeader('etag', 'W/"1"');
			res.setHeader(
				'content-type',
				'application/fhir+json; charset=UTF-8'
			);

			res.setHeader('connection', 'keep-alive');
			res.setHeader('date', 'Thu, 04 Jul 2019 11:59:41 GMT');

			res.removeHeader('x-powered-by');
			res.removeHeader('connection');
			return res.status(200).send({});
		});

		mirthServer = http.createServer(mirthServer);

		mirthServer.listen(8206, () => {
			console.log('Test Mirth listening at 8206');
		});

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

	test('Should have expected response headers present', async () => {
		const expectedHeaders = {
			'access-control-allow-headers':
				'Origin, X-Requested-With, Content-Type, Accept, Authorization',
			'access-control-allow-methods': 'GET',
			'access-control-allow-origin': '*',
			'cache-control':
				'no-store, no-cache, must-revalidate, proxy-revalidate',
			connection: 'close',
			'content-length': '0',
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

		const response = await request(path).options('');
		expect(response.statusCode).toBe(204);

		Object.keys(expectedHeaders).forEach((key) => {
			expect(response.res.headers).toHaveProperty(key);
			// date varies, so only test if key exists, not value of key
			if(key !== 'date') {
				expect(response.res.headers[key]).toEqual(expectedHeaders[key]);
			}
		});
	});
});
