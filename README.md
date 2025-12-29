# Antigravity PWA

A premium vanilla JavaScript Progressive Web App boilerplate with background server persistence.

## Project Structure

- `index.html`: Main application entry point.
- `app.js`: Client-side logic and Service Worker registration.
- `styles.css`: Modern styling system.
- `sw.js`: Service Worker for offline capabilities.
- `ecosystem.config.js`: PM2 process management configuration.
- `utils/`: Windows and process-specific utility scripts.

## Server Management (PM2)

The server is managed by PM2 and is configured to start automatically with Windows.

### Common Commands

- **Check Status**: `pm2 list`
- **View Logs**: `pm2 logs pwa-server`
- **Stop Server**: `pm2 stop pwa-server`
- **Restart Server**: `pm2 restart pwa-server`

### How to Change the Port

If you need to change the port (e.g., from 3000 to 4000):

1. Open `ecosystem.config.js`.
2. Change the `PORT` value:
   ```javascript
   env: {
       NODE_ENV: 'development',
       PORT: 4000 // <--- Change this
   }
   ```
3. Run this command in your terminal to apply the change:
   ```bash
   pm2 restart pwa-server --update-env
   ```

> [!IMPORTANT]
> Since the PWA is installed via the browser, the taskbar icon is tied to the specific URL (e.g., `http://localhost:3000`). If you change the port to `3333`, you must open `http://localhost:3333` in your browser and use the app from there. You may need to "Install" it again to get a taskbar icon that points to the new port.

## Windows Setup Details

- **Startup**: A script in your Windows Startup folder runs `pm2 resurrect` on login.
- **Utils**: Scripts in the `utils/` folder handle background execution and process launching on Windows.
