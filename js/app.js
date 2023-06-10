const serviceWorker = document.querySelector('.service_worker');
// console.log(navigator);
if ("serviceWorker" in navigator) {
    serviceWorker.innerHTML = 'Service Worker Supported';
    
    navigator.serviceWorker.register('/sw.js')
        .then(() => {
            serviceWorker.innerHTML += '</br>Service Worker Registered';
            console.log('Service Worker is Installed');
        })
        .catch(() => serviceWorker.innerHTML += '</br>Service Worker Registeration FAILED')
}else{
    serviceWorker.innerHTML = 'Service Worker NOT Supported 1';

}