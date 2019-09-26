
/**
 * @author Frazer Smith
 * @param {Object} req - HTTP request.
 * @param {Object} res - HTTP response.
 * @param {Function} next
 * @summary Checks 'authorization' request header against array of api key objects.
 */
function apiKeyCheck(req, res, next) {
	if (req.token) {
		const keys = [];
		req.apikeys.forEach((element) => {
			keys.push(element.value);
		});

		if (keys.includes(req.token)) {
			next();
		} else {
			next({ status: 401 });
		}
	} else {
		next({ status: 401 });
	}
}

module.exports = apiKeyCheck;
