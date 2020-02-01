const { Router } = require('express');

const router = new Router();
const request = require('request');
const validator = require('validator');

/**
 * @author Frazer Smith
 * @description Sets routing options for server.
 * @param {string} listenerUrl - URL of FHIR REST hook endpoint.
 * @param {boolean} hide - If true, remove and amend inaccurate/security risk headers.
 * @returns {Router} express router instance.
 */
module.exports = function configureRoute(listenerUrl, hide) {
	router.get('*', (req, res) => {
		// Sanitize query parameters to protect against injections
		const params = {};
		if (req.query && Object.keys(req.query).length) {
			Object.assign(params, req.query);
		}
		// Remove '\', ';', ''', '"', '>', '<', and '/' characters
		const parsedParams = Object.entries(params)
			.map(
				([key, val]) =>
					`${key}=${validator
						.blacklist(validator.stripLow(val), ';\'"></')
						.trim()}`
			)
			.join('&');

		request
			.get(`${listenerUrl + req.baseUrl}?${parsedParams}`)
			.on('error', () => {
				res.status(500).send('Error connecting to webservice');
			})
			.on('response', (response) => {
				if (hide) {
					// Remove or amend inaccurate headers
					response.headers['access-control-allow-methods'] = 'GET';
					delete response.headers.etag;
					delete response.headers['last-modified'];

					// Remove security risk headers
					delete response.headers.location;
					delete response.headers.server;
				}
			})
			.pipe(res);
	});

	return router;
};
