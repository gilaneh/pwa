// const serviceWorker = document.querySelector('.service_worker');



self.addEventListener('install', e =>{
    // serviceWorker.innerHTML += 'Service Worker Installed';
    console.log('Service Worker is Installed');

});

self.addEventListener('activate', e =>{
    // serviceWorker.innerHTML += 'Service Worker Installed';
    console.log('Service Worker is Activated');

});