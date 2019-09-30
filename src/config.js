const serverConfig = {
	https: true,
	listener_url: 'http://localhost:8206',
	name: 'ydh-sider-authentication-service',
	port: 8205,
	ssl: {
		cert: 'ssl_certs/ydhclientcert.cer',
		key: 'ssl_certs/ydhclientcert.key'
	}
};

const bearerConfig = {
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

module.exports = {
	bearerConfig,
	serverConfig
};
