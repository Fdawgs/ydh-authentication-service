// Used by PM2 for deployment
module.exports = {
	apps: [
		{
			cwd: __dirname,
			env: {
				NODE_ENV: 'production'
			},
			exec_mode: 'cluster',
			instances: 8,
			name: 'auth-serv',
			script: './src/index.js',
			watch: ['./src/config.js', '.env.production']
		}
	]
};
