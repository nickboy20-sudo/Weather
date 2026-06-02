const CACHE='vremea-v1';
self.addEventListener('install', e=>{self.skipWaiting()});
self.addEventListener('activate', e=>{self.clients.claim()});
self.addEventListener('fetch', e=>{});