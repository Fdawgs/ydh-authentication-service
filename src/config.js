require('custom-env').env();

const serverConfig = {
	https: process.env.USE_HTTPS || false,
	port: process.env.PORT || 8215,
	host: process.env.HOST,
	listenerUrl: process.env.LISTENER_URL,
	auth: {
		apiKeys: [
			{
				service: 'Maternity',
				value: 'Jimmini'
			},
			{
				service: 'Obstetrics',
				value: 'Cricket'
			}
		]
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
			'Origin, X-Requested-With, Content-Type, Accept, Authorization',
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
	},
	hidePoweredBy: true
};

const loggerConfig = {
	// Pino options: https://github.com/pinojs/pino-http#custom-serializers
	options: {
		serializers: {
			req(req) {
				return {
					url: req.url,
					ip: req.raw.ip,
					headers: req.headers,
					method: req.method,
					query: req.raw.query,
					httpVersion: req.raw.httpVersion
				};
			},
			res(res) {
				return { statusCode: res.statusCode };
			}
		}
	},

	// Rotation options: https://github.com/rogerc/file-stream-rotator/#options
	rotation: {
		filename: `${process.cwd()}/logs/auth-service-%DATE%.log`,
		frequency: 'daily',
		verbose: false,
		date_format: 'YYYY-MM-DD'
	}
};

module.exports = {
	helmetConfig,
	serverConfig,
	loggerConfig
};
