const validator = require('validator');

/**
 * @author Frazer Smith
 * @description Sanitize query parameters to protect against injections.
 * @param {String} paramString - Request query string.
 * @return {String} sanitized query string.
 */
module.exports = function sanitizeParamString(paramString) {
	const params = {};
	if (paramString && Object.keys(paramString).length) {
		Object.assign(params, paramString);
	}
	// Remove ';', ''', '"', '>', and '<' characters
	const parsedParams = Object.entries(params)
	.map(
		([key, val]) =>
			`${key}=${validator
				.blacklist(validator.stripLow(val), ';\'"><')
				.trim()}`
	)
	.join('&');

	return parsedParams;
}