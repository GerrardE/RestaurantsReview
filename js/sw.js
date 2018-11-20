//notify registration success
console.log('Service worker Registered');

// install the service worker
//listen for that installation event:
self.addEventListener('install', (event)=> {
    //wait till installation is complete:
    event.waitUntil(
        caches.open('versionOne').then((cache)=>{
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

//listen for fetch events
self.addEventListener('fetch', (event)=> {
    event.respondWith(
        caches.match(event.request).then((response)=>{
            //act based on response:
            if(response) {
                return response;
            } else {
                return fetch(event.request)
                .then((response)=>{
                    //avoid using same response by cloning it:
                    let respond = response.clone();
                    caches.open('versionOne').then((cache)=>{
                        cache.put(event.request, respond);
                    })
                    return response;
                })
                .catch((error)=>{
                    console.log(error);
                });
            }
        })
    );
})