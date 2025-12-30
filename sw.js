const CACHE_NAME = 'word-quiz-v5';
const ASSETS = [
  'index.html',
  'history.html',
  'test/test1-1.html',
  'test/test2-1.html',
  'test/test2-2.html',
  'test/test2-3.html',
  'test/test2-4.html',
  'test/test2-5.html',
  'test/test2-6.html',
  'test/test2-7.html',
  'test/test2-8.html',
  'test/test2-9.html',
  'test/test3-1.html',
  'data/data1-1.json',
  'data/data2-1.json',
  'data/data2-2.json',
  'data/data2-3.json',
  'data/data2-4.json',
  'data/data2-5.json',
  'data/data2-6.json',
  'data/data2-7.json',
  'data/data2-8.json',
  'data/data2-9.json',
  'data/data3-1.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});