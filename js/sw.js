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
    '/js/restaurant_info.js'
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


/*
//notify registration success
console.log('Service worker Registered');

var firstName = 'versionOne';

// install the service worker
//listen for that installation event:
self.addEventListener('install', (event)=> {
    //wait till installation is complete:
    event.waitUntil(
        caches.open('firstName').then((cache)=>{
            //store all files required to operate seamlessly in an array
            return cache.addAll([
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
                '/js/restaurant_info.js'
                'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
                'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
            ]);
        })
    )
});

//activate the service worker, delete the old one and make a new one
self.addEventListener('activate', (event)=>{
    event.waitUntil(caches.keys().then((cacheNames)=>{
        return Promise.all(cacheNames.filter((cacheName)=>{
            return cacheName.startsWith('version')&& cacheName != firstName;
        }).map((cacheName)=>{
            return caches.delete(cacheName);
        }));
    }));
});

//listen for fetch events
self.addEventListener('fetch', (event)=> {
    event.respondWith(
        caches.match(event.request)
        .then((response)=>{
            //act based on response:
            if(response.status === 404) {
                console.log('not found');
                return new Response('not found');
            } 

            //filter the response
            if(event.request.url.indexOf('restaurant.html') != 1 || event.request.url.indexOf('leaflet') != -1){
                cache.put(event.request, response.clone())
            }
            return response;
                 
        })
        .catch(() => {
            return new Response('You are offline and unable to load url')
        })
    );
})

//listen for a message event and call skipWaiting when it arrives
    self.addEventListener('message', (event)=>{
        if(event.date){
            console.log('a message arrived' + event.data);
            self.skipWaiting();
        }
    })

    */