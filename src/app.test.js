/* eslint-disable */

const fs = require('fs');
const request = require('supertest');
const ExpressServer = require('./expressServer');

const rawData = fs.readFileSync('./src/config.json');
const config = JSON.parse(rawData);
config.USE_HTTPS = false; // Only testing for headers at present
let server;
const path = `http://127.0.0.1:${config.port}`;

describe('GET response headers', () => {
	beforeAll(() => {
		// Stand up server
		server = new ExpressServer(config);
		server.configureMiddleware();
		server.configureHelmet();
		server.configureRoute(config.listener_url, true);
		server.listen(config.port);
	});

	afterAll(() => {
		server.close();
	});

	test('Expected response headers present', async () => {
		const expectedHeaders = {
			'access-control-allow-methods': 'GET',
			'cache-control': 'must-revalidate,no-cache,no-store',
			expires: '0',
			pragma: 'no-cache',
			'strict-transport-security': 'max-age=15552000; includeSubDomains',
			'surrogate-control': 'no-store',
			'x-content-security-policy': 'default-src \'self\'',
			'x-content-type-options': 'nosniff',
			'x-dns-prefetch-control': 'off',
			'x-download-options': 'noopen',
			'x-frame-options': 'SAMEORIGIN',
			'x-webkit-csp': 'default-src \'self\'',
			'x-xss-protection': '1; mode=block'
		};

		const response = await request(path)
			.get('')
			.set('Accept', '*/*')
			.set('Content-Type', 'application/fhir+json')
			.set('x-api-key', 'Jimmini')
			.set('accept-encoding', 'gzip, deflate')
			.set('Connection', 'keep-alive')
			.set('cache-control', 'no-cache');

		expect(response.statusCode).toBe(404); // Haven't specified a resource
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

		expect(response.statusCode).toBe(404); // Haven't specified a resource
		expect(Object.keys(response.res.headers)).toEqual(expect.not.arrayContaining(unexpectedHeaders));
		// expect(response.res.headers).not.
	}, 30000);
});
