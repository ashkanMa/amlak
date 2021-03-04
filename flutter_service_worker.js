'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "79a3169fd56aabe600241996ff4f3399",
"assets/FontManifest.json": "b0bd5a78dd1debaf920570390fb0f44e",
"assets/fonts/Far_ZarBd.ttf": "676c35435461994366108f1fba72baee",
"assets/fonts/Icons.ttf": "6377ec09c8e787ff3e2307e2e13226ee",
"assets/fonts/IRANSansMobile.ttf": "550e81f9cd5c875d772e8a97e19bbef4",
"assets/fonts/IRANSansMobile_Bold.ttf": "9ee63b11af1c0c430e9e6c2b891fb6d3",
"assets/fonts/IRANSansMobile_Light.ttf": "7ce635c83b55037fcb912f959fa5f1b5",
"assets/fonts/IRANSansMobile_Medium.ttf": "6d051d5ba670aa673475309387ed6cc1",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/MizanARBold.otf": "5f82fd0303d072e747673953ff99bd72",
"assets/fonts/Quicksand-Medium.ttf": "0c64233241ead44bffbec54eb9d1d164",
"assets/fonts/Quicksand.ttf": "f87b9b4f34bdbf75b5c0cf3a5a137508",
"assets/NOTICES": "ada9ce889ef726e7f088f15dcb53f4a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/web/assets/fonts/IRANSansMobile.ttf": "550e81f9cd5c875d772e8a97e19bbef4",
"assets/web/assets/fonts/IRANSansMobile_Bold.ttf": "9ee63b11af1c0c430e9e6c2b891fb6d3",
"assets/web/img/a.png": "7f2e0e3510f8ef3464af160860da590c",
"assets/web/img/building.png": "e15ed4d11b75feee217d7d17a8790698",
"assets/web/img/choose_image.png": "ef502cc701ac1ab12b6f9be20818722f",
"assets/web/img/crane.png": "74c2830f7033476cd555e19c0d56ea58",
"assets/web/img/edit_profile.png": "2e917e8d18a89dcd32da0769287e3863",
"assets/web/img/exit.png": "73a5c1ca2a3ff9c74aba1d18903953ef",
"assets/web/img/help.png": "f771a342667a205ae23d3f7760fb6302",
"assets/web/img/house.png": "3c0257714556cae37d16f7c351937709",
"assets/web/img/loginBg.jpg": "621e6b0ad51c3f284fd507d1b5e72a75",
"assets/web/img/loginImg.png": "efcf1e9e109468e239d4f1b10a0601f7",
"assets/web/img/person.png": "845b7846af1d7a8f13909f9ec7f4c5b4",
"assets/web/img/rank.png": "f70bd7ed37c248a4e05689a1f6952c96",
"assets/web/img/wallet.png": "d5d58f878fdde876119e87abcdadb510",
"assets/web/svg/awards.svg": "fcfb986a9e92d14191d7f1464d03fa55",
"assets/web/svg/buy_charge.svg": "975b97981a72fe7e4156c22b306245d7",
"assets/web/svg/donating.svg": "206b5000db3a9a8fdb90cfd7f5e9b8f8",
"assets/web/svg/edit_profile.svg": "db8d1e64a4551aabfd390cbc55edb8bb",
"assets/web/svg/exit.svg": "c2bc30ad2398dc71512f7c174cf58d9e",
"assets/web/svg/history.svg": "ecc8cb3e99fd00f78fb6ad06f48812f1",
"assets/web/svg/history_bottombar.svg": "8fea9d63cdd6d7bb6057f230d621b42c",
"assets/web/svg/home_payment.svg": "b3ed5f22d6e04be800fecf79e30e1d59",
"assets/web/svg/insurance_buy.svg": "049231e81040565957506936b96cfc34",
"assets/web/svg/microplastics.svg": "f8efb0b6190288847fb2394dd691cdf4",
"assets/web/svg/notification.svg": "3425935f756609303f8a092b332939c2",
"assets/web/svg/otp.svg": "b97d4aa96fec28c3b5357e13698b38b4",
"assets/web/svg/profile.svg": "5257510d1fcef96bd1b75f7465b8267a",
"assets/web/svg/profile_mobile.svg": "acd2bb4fe31e5979658b6faa017abd24",
"assets/web/svg/rank.svg": "5a20a790bcc6c3c664db9dc7bb92bd66",
"assets/web/svg/services.svg": "551889c089296382ac53d821058673eb",
"assets/web/svg/trash.svg": "c1aeae4dc4177f3651b2e2525f87f271",
"assets/web/svg/wallet.svg": "50103c077467d5d43ead8596e822be1b",
"favicon.png": "7f2e0e3510f8ef3464af160860da590c",
"icons/icon-192.png": "7f2e0e3510f8ef3464af160860da590c",
"icons/icon-512.png": "7f2e0e3510f8ef3464af160860da590c",
"img/a.png": "7f2e0e3510f8ef3464af160860da590c",
"img/building.png": "e15ed4d11b75feee217d7d17a8790698",
"img/choose_image.png": "ef502cc701ac1ab12b6f9be20818722f",
"img/crane.png": "74c2830f7033476cd555e19c0d56ea58",
"img/edit_profile.png": "2e917e8d18a89dcd32da0769287e3863",
"img/exit.png": "73a5c1ca2a3ff9c74aba1d18903953ef",
"img/help.png": "f771a342667a205ae23d3f7760fb6302",
"img/house.png": "3c0257714556cae37d16f7c351937709",
"img/loginBg.jpg": "621e6b0ad51c3f284fd507d1b5e72a75",
"img/loginImg.png": "efcf1e9e109468e239d4f1b10a0601f7",
"img/person.png": "845b7846af1d7a8f13909f9ec7f4c5b4",
"img/rank.png": "f70bd7ed37c248a4e05689a1f6952c96",
"img/wallet.png": "d5d58f878fdde876119e87abcdadb510",
"index.html": "bc89703b1fafecca415c6cd6b6b1be21",
"/": "bc89703b1fafecca415c6cd6b6b1be21",
"main.dart.js": "c2a60a6dc8cdb146a88c6d57760a61f8",
"manifest.json": "0834cc03ff3d421d397df90f692adc4f",
"svg/awards.svg": "fcfb986a9e92d14191d7f1464d03fa55",
"svg/buy_charge.svg": "975b97981a72fe7e4156c22b306245d7",
"svg/donating.svg": "206b5000db3a9a8fdb90cfd7f5e9b8f8",
"svg/edit.svg": "07c57606c8a9866a71e0d46887a1fbbe",
"svg/edit_profile.svg": "db8d1e64a4551aabfd390cbc55edb8bb",
"svg/exit.svg": "c2bc30ad2398dc71512f7c174cf58d9e",
"svg/history.svg": "ecc8cb3e99fd00f78fb6ad06f48812f1",
"svg/history_bottombar.svg": "8fea9d63cdd6d7bb6057f230d621b42c",
"svg/home_payment.svg": "b3ed5f22d6e04be800fecf79e30e1d59",
"svg/insurance_buy.svg": "049231e81040565957506936b96cfc34",
"svg/microplastics.svg": "f8efb0b6190288847fb2394dd691cdf4",
"svg/notification.svg": "3425935f756609303f8a092b332939c2",
"svg/otp.svg": "b97d4aa96fec28c3b5357e13698b38b4",
"svg/profile.svg": "5257510d1fcef96bd1b75f7465b8267a",
"svg/profile_mobile.svg": "acd2bb4fe31e5979658b6faa017abd24",
"svg/rank.svg": "5a20a790bcc6c3c664db9dc7bb92bd66",
"svg/services.svg": "551889c089296382ac53d821058673eb",
"svg/trash.svg": "c1aeae4dc4177f3651b2e2525f87f271",
"svg/wallet.svg": "50103c077467d5d43ead8596e822be1b",
"version.json": "d726c54ae2a9ab75e5b0e575e0130d8f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
