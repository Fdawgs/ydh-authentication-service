const cloneDeep = require("lodash/cloneDeep");
const request = require("superagent");
const { serverConfig } = require("../../config");
const Server = require("../server");

serverConfig.https = false;

describe("Wildcard Route", () => {
	let server;

	afterEach(() => {
		server.shutdown();
	});

	test("Should return 500 error response if endpoint not responsive", async () => {
		const modServerConfig = cloneDeep(serverConfig);
		modServerConfig.port = 8314;
		const path = `http://${process.env.HOST}:${modServerConfig.port}`;

		// Stand up server
		server = new Server(modServerConfig)
			.configurePassport()
			.configureMiddleware()
			.configureRoutes()
			.configureErrorHandling()
			.listen();

		await request
			.get(path)
			.set("Accept", "*/*")
			.set("Content-Type", "application/fhir+json")
			.set("Authorization", "Bearer Jimmini")
			.set("accept-encoding", "gzip, deflate")
			.set("Connection", "keep-alive")
			.set("cache-control", "no-cache")
			.catch((err) => {
				expect(err.status).toBe(500);
				expect(err.response.error.text).toMatch(
					"Error: connect ECONNREFUSED"
				);
			});
	});

	test("Should return 500 error response if routing config missing", async () => {
		const modServerConfig = cloneDeep(serverConfig);
		modServerConfig.port = 8315;
		const path = `http://${process.env.HOST}:${modServerConfig.port}`;
		delete modServerConfig.listenerUrl;

		// Stand up server
		server = new Server(modServerConfig)
			.configurePassport()
			.configureMiddleware()
			.configureRoutes()
			.configureErrorHandling()
			.listen();

		await request
			.get(path)
			.set("Accept", "*/*")
			.set("Content-Type", "application/fhir+json")
			.set("Authorization", "Bearer Jimmini")
			.set("accept-encoding", "gzip, deflate")
			.set("Connection", "keep-alive")
			.set("cache-control", "no-cache")
			.catch((err) => {
				expect(err.status).toBe(500);
				expect(err.response.error.text).toMatch(
					"Error: connect ECONNREFUSED"
				);
			});
	});
});
