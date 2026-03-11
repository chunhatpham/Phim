// Một Service Worker trống hoặc cơ bản nhất để pass điều kiện của PWA
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // Không làm gì cả, chỉ để trình duyệt biết là có file này
});
