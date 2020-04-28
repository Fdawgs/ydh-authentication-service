const serverConfig = {
	https: false,
	port: 8215,
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
	routing: {
		listenerUrl: 'http://localhost:8206', // URL and port of what the Mirth Connect FHIR/HTTP Listener channel is listening on
		hide: true // If set to true then remove or amend inaccurate response headers
	},
	ssl: {
		cert: './ssl_certs/ydhclientcert.cer', // Example path
		key: '',
		pfx: {
			passphrase: '',
			pfx: ''
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
