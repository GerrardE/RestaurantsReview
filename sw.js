//name of serviceworker
const workerName = 'v1';

//assets to cache
const workerFiles = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/mainController.js',
    '/js/restaurant_info.js',
    '/unpkg.com/leaflet@1.3.1/dist/leaflet.css',
    '/unpkg.com/leaflet@1.3.1/dist/leaflet.js'
];

//call install event
self.addEventListener('install', (event)=>{
    console.log('Service Worker: Installed');

    event.waitUntil(
        caches
        .open(workerName)
        .then(cache => {
            console.log('ServiceWorker: Caching Files')
            cache.addAll(workerFiles)
        })
        .then(()=>{
            self.skipWaiting();
        })
    ); 
});

//activate the service worker,
self.addEventListener('activate', (event)=>{
    console.log('Service Worker: Activated');

    //Remove old caches
    event.waitUntil(
        caches.keys().then(cacheNames=>{
            return Promise.all(
                cacheNames.map(cache =>{
                    if (cache !== workerName) {
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            )
        })
    );
});

//Call fetch event
self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Fetching')

    event.respondWith(
        fetch(event.request).catch(()=>{
            caches.match(event.request);
        })
    );
});