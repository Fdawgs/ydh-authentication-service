
/**
 * @author Frazer Smith
 * @param {Object} req - HTTP request.
 * @param {Object} res - HTTP response.
 * @param {Function} next
 * @summary Checks 'x-api-key' request header against array of api key objects.
 */
function apiKey(req, res, next) {
	if (typeof req.apikeys !== 'undefined') {
		req.apikeys.forEach((element) => {
			if (req.headers['x-api-key'] === element.value) {
				next();
			}
		});
		next({ status: 401 });
	}
}

module.exports = apiKey;
