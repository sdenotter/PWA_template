// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then((registration) => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, (err) => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}

// Handle PWA Installation
let deferredPrompt;
const installBtn = document.getElementById('install-btn');
const statusBadge = document.getElementById('pwa-status');

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can install the PWA
    installBtn.style.display = 'block';
    statusBadge.textContent = 'Installable';
    statusBadge.style.background = 'rgba(249, 115, 22, 0.1)';
    statusBadge.style.color = '#f97316';
    statusBadge.style.borderColor = 'rgba(249, 115, 22, 0.2)';

    installBtn.addEventListener('click', () => {
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
            installBtn.style.display = 'none';
        });
    });
});

window.addEventListener('appinstalled', (evt) => {
    console.log('PWA was installed');
    statusBadge.textContent = 'App Installed';
    installBtn.style.display = 'none';
});

// Update status if already in standalone mode
if (window.matchMedia('(display-mode: standalone)').matches) {
    statusBadge.textContent = 'App Mode';
    statusBadge.style.background = 'rgba(234, 179, 8, 0.1)';
    statusBadge.style.color = '#eab308';
    statusBadge.style.borderColor = 'rgba(234, 179, 8, 0.2)';
}
