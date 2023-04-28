self.addEventListener('install', event => {
    caches.open('Messagerie').then(
        cache => {
            cache.addAll([
                'index.html',
                'sw.js'
            ])
        }
    )
})
self.addEventListener('activate', event => {
    //console.log(event);
})



self.addEventListener('fetch', event => {
    if (!(event.request.url.indexOf('http') === 0)) return;
    event.respondWith(
        caches.match(event.request).then(rep => {
            if (rep) {
                return rep;
            }
            return fetch(event.request).then(
                newResponse => {
                    caches.open('Messagerie').then(
                        cache => cache.put(event.request, newResponse)
                    );
                    return newResponse.clone();
                }
            )
        })
    )
})