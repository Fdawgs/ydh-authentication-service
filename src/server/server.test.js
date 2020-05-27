const cloneDeep = require('lodash/cloneDeep');
const express = require('express');
const http = require('http');
const request = require('superagent');
const { helmetConfig, serverConfig, loggerConfig } = require('../config');
const Server = require('./server');

let mirthServer;
const mirthServerConfig = {
	port: '8206',
	host: '0.0.0.0'
};
describe('Server deployment', () => {
	beforeAll(() => {
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
		mirthServer.listen(
			mirthServerConfig.port,
			mirthServerConfig.host,
			() => {
				console.log(
					`Mock Mirth Connect server listening for requests at http://${mirthServerConfig.host}:${mirthServerConfig.port}`
				);
			}
		);
	});

	afterAll(() => {
		try {
			mirthServer.close();
			setImmediate(() => {
				mirthServer.emit('close');
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	});

	describe('Request response headers', () => {
		const modServerConfig = cloneDeep(serverConfig);
		modServerConfig.port = 3692;
		modServerConfig.listenerUrl = `http://${mirthServerConfig.host}:${mirthServerConfig.port}`;
		let server;

		const path = `http://${process.env.HOST}:${modServerConfig.port}/test`;

		beforeAll(() => {
			// Stand up server
			server = new Server(modServerConfig)
				.configureHelmet(helmetConfig)
				.configureLogging(loggerConfig)
				.configurePassport()
				.configureMiddleware()
				.configureRoutes()
				.configureErrorHandling()
				.listen();
		});

		afterAll(() => {
			server.shutdown();
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
				'strict-transport-security':
					'max-age=15552000; includeSubDomains',
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

			const res = await request
				.get(path)
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

			const res = await request
				.get(path)
				.set('Accept', '*/*')
				.set('Content-Type', 'application/fhir+json')
				.set('Authorization', 'Bearer Jimmini')
				.set('accept-encoding', 'gzip, deflate')
				.set('Connection', 'keep-alive')
				.set('cache-control', 'no-cache');

			expect(res.statusCode).toBe(200);
			expect(Object.keys(res.headers)).toEqual(
				expect.not.arrayContaining(unexpectedHeaders)
			);
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
				'strict-transport-security':
					'max-age=15552000; includeSubDomains',
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

			const res = await request.options(path);

			expect(res.statusCode).toBe(204);
			Object.keys(expectedHeaders).forEach((key) => {
				expect(res.headers).toHaveProperty(key);
				// Date varies, so only test if key exists, not value of key
				if (key !== 'date') {
					expect(res.headers[key]).toEqual(expectedHeaders[key]);
				}
			});
		});
	});

	describe('HTTPs connection with cert and key', () => {
		const modServerConfig = cloneDeep(serverConfig);
		modServerConfig.https = true;
		modServerConfig.port = 3690;
		modServerConfig.ssl.cert = `${process.cwd()}/test_ssl_cert/server.cert`;
		modServerConfig.ssl.key = `${process.cwd()}/test_ssl_cert/server.key`;
		modServerConfig.listenerUrl = `http://${mirthServerConfig.host}:${mirthServerConfig.port}`;
		let server;

		const path = `https://${process.env.HOST}:${modServerConfig.port}/test`;

		beforeAll(() => {
			// Stand up server
			server = new Server(modServerConfig)
				.configureHelmet(helmetConfig)
				.configureLogging(loggerConfig)
				.configurePassport()
				.configureMiddleware()
				.configureRoutes()
				.configureErrorHandling()
				.listen();
		});

		afterAll(() => {
			server.shutdown();
		});

		test('GET - Should make a successful connection', async () => {
			const res = await request
				.get(path)
				.set('Accept', '*/*')
				.set('Content-Type', 'application/fhir+json')
				.set('Authorization', 'Bearer Jimmini')
				.set('accept-encoding', 'gzip, deflate')
				.set('Connection', 'keep-alive')
				.set('cache-control', 'no-cache')
				.disableTLSCerts()
				.trustLocalhost();

			expect(res.statusCode).toBe(200);
		});
	});

	describe('HTTPs connection with PFX file and passphrase', () => {
		const modServerConfig = cloneDeep(serverConfig);
		modServerConfig.https = true;
		modServerConfig.port = 3691;
		modServerConfig.ssl.pfx.pfx = `${process.cwd()}/test_ssl_cert/server.pfx`;
		modServerConfig.ssl.pfx.passphrase = 'test';
		modServerConfig.listenerUrl = `http://${mirthServerConfig.host}:${mirthServerConfig.port}`;
		let server;

		const path = `https://${process.env.HOST}:${modServerConfig.port}/test`;

		beforeAll(() => {
			// Stand up server
			server = new Server(modServerConfig)
				.configureHelmet(helmetConfig)
				.configureLogging(loggerConfig)
				.configurePassport()
				.configureMiddleware()
				.configureRoutes()
				.configureErrorHandling()
				.listen();
		});

		afterAll(() => {
			server.shutdown();
		});

		test('GET - Should make a successful connection', async () => {
			const res = await request
				.get(path)
				.set('Accept', '*/*')
				.set('Content-Type', 'application/fhir+json')
				.set('Authorization', 'Bearer Jimmini')
				.set('accept-encoding', 'gzip, deflate')
				.set('Connection', 'keep-alive')
				.set('cache-control', 'no-cache')
				.disableTLSCerts()
				.trustLocalhost();

			expect(res.statusCode).toBe(200);
		});
	});
});
