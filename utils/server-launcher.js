const { spawn } = require('child_process');

console.log('Starting PWA server...');
console.log('Port:', process.env.PORT || 3000);

const port = process.env.PORT || 3000;
const child = spawn('npx.cmd', ['serve', '.', '-p', port], {
    stdio: 'inherit',
    shell: true,
    cwd: './', // Run serve from the project root directory
    env: process.env
});

child.on('close', (code) => {
    console.log(`Server process exited with code ${code}`);
    process.exit(code);
});
