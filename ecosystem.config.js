module.exports = {
    apps: [
        {
            name: 'pwa-server',
            script: '.\\utils\\server-launcher.js',
            cwd: './',
            instances: 1,
            exec_mode: 'fork',
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'development',
                PORT: 3333 // <--- CHANGE THE PORT HERE
            }
        }
    ]
};
