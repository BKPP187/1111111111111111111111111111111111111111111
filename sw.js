// sw.js - 自毁程序
self.addEventListener('install', function(e) {
    // 跳过等待，立即激活
    self.skipWaiting();
});

self.addEventListener('activate', function(e) {
    // 1. 立即接管所有页面
    // 2. 删除所有缓存
    // 3. 注销自己
    e.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    console.log('Service Worker: 清除旧缓存 ' + cacheName);
                    return caches.delete(cacheName);
                })
            );
        }).then(function() {
            console.log('Service Worker: 缓存已清除，正在注销...');
            return self.clients.claim(); // 让当前页面立即受控，以便刷新
        })
    );
});
