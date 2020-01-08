/**
 * https: if set to true, server will use the ssl object to provide HTTPS.
 * listener_url: url and port of what the Mirth Connect FHIR/HTTP Listener channel is listening on.
 */
const serverConfig = {
  https: false,
  listener_url: 'http://localhost:8206',
  name: 'ydh-sider-authentication-service',
  port: 8205,
  ssl: {
    cert: './ssl_certs/ydhclientcert.cer',
    key: './ssl_certs/ydhclientcert.key',
    pfx: {
      passphrase: '',
      pfx: './ssl_certs/ydhwildcard.pfx'
    }
  }
};

// Array of API bearer key values and the service they relate to
const authConfig = {
  api_keys: [
    {
      service: 'Maternity',
      value: 'Jimmini'
    },
    {
      service: 'Obstetrics',
      value: 'Cricket'
    }
  ]
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
  hidePoweredBy: true,
  noCache: true
};

// Refer to option documention here: https://github.com/winstonjs/winston-daily-rotate-file/blob/master/README.md#options
const winstonRotateConfig = {
  auditFile: 'logs/logging-audit.json',
  datePattern: 'YYYY-MM-DD-HH',
  dirname: 'logs',
  extension: '.json',
  filename: 'auth-service-log-%DATE%',
  maxFiles: '14d',
  maxSize: '20m',
  zippedArchive: true
};

module.exports = {
  authConfig,
  helmetConfig,
  serverConfig,
  winstonRotateConfig
};
