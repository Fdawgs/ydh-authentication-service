/* eslint-disable func-names */
module.exports = function () {
	// eslint-disable-next-line consistent-return
	return function (err, req, res, next) {
		if (res.headersSent) {
			return next(err);
		}
		res.sendStatus(err.status || 500);
	};
};
