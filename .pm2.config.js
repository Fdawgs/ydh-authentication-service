// Used by PM2 for deployment
module.exports = {
    apps : [{
        cwd: __dirname,
        env: {
            NODE_ENV: "production"
          },
        exec_mode: 'cluster',
        ignore_watch: [
            "coverage",
            "logs",
            "node_modules"
        ],
        instances: 8,
        name: "sider-auth",
        script: './src/app.js',
        watch: true
    }]
}