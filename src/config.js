require('custom-env').env();

const pino = require('pino');

const serverConfig = {
	https: process.env.USE_HTTPS || false,
	port: process.env.PORT || 8215,
	host: process.env.HOST,
	listenerUrl: process.env.LISTENER_URL,
	auth: {
		apiKeys: JSON.parse(process.env.API_BEARER_TOKEN_ARRAY)
	},
	ssl: {
		cert: process.env.SSL_CERT_PATH,
		key: process.env.SSL_KEY_PATH,
		pfx: {
			passphrase: process.env.PFX_PASSPHRASE,
			pfx: process.env.PFX_FILE_PATH
		}
	},
	cors: {
		allowedHeaders:
			'Accept, Authorization, Content-Type, Origin, X-Requested-With',
		methods: ['GET']
	}
};

/**
 * The following headers are turned on by default:
 * - dnsPrefetchControl (Control browser DNS prefetching). https://helmetjs.github.io/docs/dns-prefetch-control
 * - frameguard (prevent clickjacking). https://helmetjs.github.io/docs/frameguard
 * - hidePoweredBy (remove the X-Powered-By header). https://helmetjs.github.io/docs/hide-powered-by
 * - hsts (HTTP strict transport security). https://helmetjs.github.io/docs/hsts
 * - ieNoOpen (sets X-Download-Options for IE8+). https://helmetjs.github.io/docs/ienoopen
 * - noSniff (prevent clients from sniffing MIME type). https://helmetjs.github.io/docs/dont-sniff-mimetype
 * - xssFilter (adds small XSS protections). https://helmetjs.github.io/docs/xss-filter/
 */
const helmetConfig = {
	contentSecurityPolicy: {
		directives: {
			defaultSrc: ["'self'"],
			scriptSrc: ["'self'", "'unsafe-inline'"],
			styleSrc: ["'self'", "'unsafe-inline'"]
		}
	},
	frameguard: {
		action: 'deny'
	}
};

const loggerConfig = {
	// Pino options: https://github.com/pinojs/pino-http#custom-serializers
	options: {
		formatters: {
			level(label) {
				return { level: label };
			}
		},
		// Defaults to `info` if not set in env
		level: process.env.LOGGER_LEVEL || 'info',
		serializers: {
			req(req) {
				return pino.stdSerializers.req(req);
			},
			res(res) {
				return { statusCode: res.statusCode };
			}
		},
		timestamp: () => {
			return pino.stdTimeFunctions.isoTime();
		}
	},
	// Rotation options: https://github.com/rogerc/file-stream-rotator/#options
	rotation: {
		date_format: process.env.LOGGER_ROTATION_DATE_FORMAT || 'YYYY-MM-DD',
		filename:
			process.env.LOGGER_ROTATION_FILENAME ||
			`${process.cwd()}/logs/auth-service-%DATE%.log`,
		frequency: process.env.LOGGER_ROTATION_FREQUENCY || 'daily',
		max_logs: process.env.LOGGER_ROTATION_MAX_LOG,
		size: process.env.LOGGER_ROTATION_MAX_SIZE,
		verbose: false
	}
};

module.exports = {
	helmetConfig,
	serverConfig,
	loggerConfig
};
