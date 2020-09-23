/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

/**
 * @author Mark Hunt
 * @author Frazer Smith
 * @param {string} token
 * @returns {Promise}
 */
async function getSigningKey(token) {
	return new Promise((resolve, reject) => {
		const client = jwksClient({
			strictSsl: true, // Default value
			jwksUri: process.env.OPENID_JWKS_ENDPOINT
		});
		const decoded = jwt.decode(token, { complete: true });
		client.getSigningKey(decoded.header.kid, (err, key) => {
			if (err) {
				reject(err);
			} else {
				const signingKey = key.publicKey || key.rsaPublicKey;
				resolve(signingKey);
			}
		});
	});
}

/**
 * @author Frazer Smith
 * @description Checks 'authorization' request header value against array
 * of API key objects or OpenID Connect.
 * @param {string} token - Bearer token.
 * @param {Function} callback - PassportJS strategy callback.
 * @param {Array.<{value: string}>} authArray - Array of API key objects.
 * @returns {Function} callback.
 */
module.exports = async function bearerTokenAuthentication(
	token,
	callback,
	authArray
) {
	const keys = [];
	authArray.forEach((element) => {
		keys.push(element.value);
	});

	if (keys.includes(token)) {
		return callback(null, token);
	} else if (process.env.OPENID_JWKS_ENDPOINT) {
		const signingKey = await getSigningKey(token);
		jwt.verify(
			token,
			signingKey,
			{
				audience: process.env.JWT_ALLOWED_AUDIENCE,
				algorithms: process.env.JWT_ALLOWED_ALGO_ARRAY,
				ignoreExpiration: false,
				maxAge: process.env.JWT_MAX_AGE
			},
			(err, decoded) => {
				if (err) {
					return callback(null, false);
				}
				return callback(null, token);
			}
		);
	} else {
		return callback(null, false);
	}
};
