const { Router } = require('express');
const passport = require('passport');
const request = require('axios');
const queryString = require('querystring');

const router = new Router();

// Import middleware
const cors = require('cors');
const sanitize = require('sanitize-middleware');

/**
 * @author Frazer Smith
 * @description Sets routing options for server.
 * @param {object} options - Object containing route config objects.
 * @returns {Router} Express router instance.
 */
module.exports = function wildcardRoute(options) {
	const config = options;

	router.use(sanitize(), cors(config.cors));

	router
		.route('*')
		.get(
			passport.authenticate('bearer', { session: false }),
			async (req, res, next) => {
				try {
					const response = await request.get(
						`${
							config.listenerUrl + req.baseUrl
						}?${queryString.stringify(req.query)}`,
						{
							responseType: 'stream'
						}
					);

					// Remove CORS headers
					delete response.headers['access-control-allow-methods'];
					delete response.headers['access-control-allow-headers'];
					delete response.headers['access-control-expose-headers'];

					// Remove or amend inaccurate headers
					delete response.headers.etag;
					delete response.headers['last-modified'];

					// Remove security risk headers
					delete response.headers.location;
					delete response.headers.server;

					res.set(response.headers);
					response.data.pipe(res);
				} catch (err) {
					res.status(500);
					next(new Error(err));
				}
			}
		);

	return router;
};
