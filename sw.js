const CACHE_NAME = 'word-quiz-v5';
const ASSETS = [
  'index.html',
  'history.html',
  'test/syo.html',
  'data/Elementary English Vocabulary-sheet2api.com.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});