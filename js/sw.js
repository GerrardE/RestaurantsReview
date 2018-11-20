//notify registration success
console.log('Service worker Registered');

// install the service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('versionOne').then(function(cache){
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
                '/js/restaurant_info.js'
            ]);
        })
    )
});


self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(function(response){
            if(response) {
                console.log('Found ', event.request, 'in cache');
                return response;
            } else {
                console.log('Could not find', event.request, 'in cache');
                return fetch(event.request)
                .then(function(response){
                    let respond = response.clone();
                    caches.open('versionOne').then(function(cache){
                        cache.put(event.request, respond);
                    })
                    return response;
                })
                .catch(function(error){
                    console.log(error);
                });
            }
        })
    );
})