const request = require('supertest');
const { serverConfig } = require('../../config');
const Server = require('../server');

describe('Wildcard Route', () => {
	serverConfig.https = false; // Only testing for headers

	beforeAll(async () => {
		jest.setTimeout(60000);
	});

	test('Should return 500 error response if routing config missing', async () => {
		const modServerConfig = { ...serverConfig };
		modServerConfig.port = 8315;
		const path = `http://127.0.0.1:${modServerConfig.port}/test`;
		delete modServerConfig.routing;

		// Stand up server
		const server = new Server(modServerConfig)
			.configurePassport()
			.configureRoutes()
			.configureErrorHandling()
			.listen();

		const response = await request(path)
			.get('')
			.set('Accept', '*/*')
			.set('Content-Type', 'application/fhir+json')
			.set('Authorization', 'Bearer Jimmini')
			.set('accept-encoding', 'gzip, deflate')
			.set('Connection', 'keep-alive')
			.set('cache-control', 'no-cache');

		expect(response.statusCode).toBe(500);
		expect(response.text).toBe('Missing server config values');
		await server.shutdown();
	});
});