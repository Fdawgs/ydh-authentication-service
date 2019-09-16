
/**
 * @author Frazer Smith
 * @param {Object} req - HTTP request.
 * @param {Object} res - HTTP response.
 * @param {Function} next
 * @summary Checks 'x-api-key' request header against array of api key objects.
 */
function apiKey(req, res, next) {
	if (typeof req.apikeys !== 'undefined') {
		const keys = [];
		req.apikeys.forEach((element) => {
			keys.push(element.value);
		});

		if (keys.includes(req.headers['x-api-key'])) {
			next();
		} else {
			next({ status: 401 });
		}
	}
}

module.exports = apiKey;
