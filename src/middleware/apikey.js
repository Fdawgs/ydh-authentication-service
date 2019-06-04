/* eslint-disable func-names */
module.exports = function (options) {
	// eslint-disable-next-line consistent-return
	return function (req, res, next) {
		if (req.header(options.header) !== options.value) {
			return next({ status: 401 });
		}
		next();
	};
};
