const cloneDeep = require('lodash/cloneDeep');
const request = require('supertest');
const { serverConfig } = require('../../config');
const Server = require('../server');

serverConfig.https = false;

describe('Wildcard Route', () => {
	test('Should return 500 error response if routing config missing', async () => {
		const modServerConfig = cloneDeep(serverConfig);
		modServerConfig.port = 8315;
		const path = `http://127.0.0.1:${modServerConfig.port}`;
		delete modServerConfig.listenerUrl;

		// Stand up server
		const server = new Server(modServerConfig)
			.configurePassport()
			.configureRoutes()
			.configureErrorHandling()
			.listen();

		const res = await request(path)
			.get('')
			.set('Accept', '*/*')
			.set('Content-Type', 'application/fhir+json')
			.set('Authorization', 'Bearer Jimmini')
			.set('accept-encoding', 'gzip, deflate')
			.set('Connection', 'keep-alive')
			.set('cache-control', 'no-cache');

		expect(res.statusCode).toBe(500);
		expect(res.text).toBe('Error connecting to webservice');
		await server.shutdown();
	});

	test('Should return 500 error response if endpoint not responsive', async () => {
		const modServerConfig = cloneDeep(serverConfig);
		modServerConfig.port = 8314;
		const path = `http://127.0.0.1:${modServerConfig.port}`;

		// Stand up server
		const server = new Server(modServerConfig)
			.configurePassport()
			.configureRoutes()
			.configureErrorHandling()
			.listen();

		const res = await request(path)
			.get('')
			.set('Accept', '*/*')
			.set('Content-Type', 'application/fhir+json')
			.set('Authorization', 'Bearer Jimmini')
			.set('accept-encoding', 'gzip, deflate')
			.set('Connection', 'keep-alive')
			.set('cache-control', 'no-cache');

		expect(res.statusCode).toBe(500);
		expect(res.text).toBe('Error connecting to webservice');
		await server.shutdown();
	});
});
