'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "053b44c6c18d144f0597f8647fcfaf32",
"assets/AssetManifest.bin.json": "ca8c6a965a7302a2bf80a81b43bfd2ee",
"assets/AssetManifest.json": "d61b1c6c6b2343287a42c52c71360c6f",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/images/logo/logo.png": "730ce1958992fcb1cec70f1cc1c97f66",
"assets/assets/images/logo/logo_android_12.png": "730ce1958992fcb1cec70f1cc1c97f66",
"assets/assets/images/profile/profile.png": "8291cbe84e7b939392ff286a41dd031f",
"assets/assets/images/projects/al_qaswa_ems.png": "1a6a89ba1ba91b57bb2da701a23f5b6e",
"assets/assets/images/projects/eris.png": "0b8bbb46b907422ebd34359ad2c81c83",
"assets/assets/images/projects/jigsaw_game.png": "7f74731d679e979cd710f123c1fb6deb",
"assets/assets/images/projects/match_game.png": "2017d702bebc60c1440d545155f974d5",
"assets/assets/images/projects/miles_status.png": "5f9c7bc1849fc49ba1887fd1cf4615b2",
"assets/assets/images/projects/patron_managment.png": "0974edcb40a867849d826d0ba3ec1baf",
"assets/assets/images/projects/schoollet.png": "6791852af5c2cb1820089218e85cbc18",
"assets/assets/images/projects/schoollet_canteen.png": "3e44909953558871bf698b0df2cf2356",
"assets/assets/images/projects/scrapping.jpg": "eba0321e120e58b983dfc1e3d65629ea",
"assets/assets/images/skills/android-svgrepo-com.svg": "e0861b764400e3a0d4ff602e292139b8",
"assets/assets/images/skills/api-interface-svgrepo-com.svg": "0b3c7990bafed4e7b5294074796096a4",
"assets/assets/images/skills/aws-svgrepo-com.svg": "e626e0ffb032a2f6fbef879e5548a767",
"assets/assets/images/skills/cv-svgrepo-com.svg": "3bfc06f1d6a9b8b482dbd98e9b3febdc",
"assets/assets/images/skills/dart-svgrepo-com.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/images/skills/docker-svgrepo-com.svg": "f6b321e2cc55c2bcef0fc45a6b346acc",
"assets/assets/images/skills/download-minimalistic-svgrepo-com.svg": "3d5761e0eb04062dcfb98f1011e9699b",
"assets/assets/images/skills/email-opened-svgrepo-com.svg": "06bfa2f24bb522ed5bed473615a64cde",
"assets/assets/images/skills/figma-svgrepo-com.svg": "5e209b9565353b68ff4ff2789178bda1",
"assets/assets/images/skills/firebase-svgrepo-com.svg": "7f1bf2795e067daf4ac3b42a2a140496",
"assets/assets/images/skills/flutter-svgrepo-com.svg": "749737f954a8acaae1b3d389b3fc857f",
"assets/assets/images/skills/gcp-svgrepo-com.svg": "b078744ae8c312eae04a925243fcdb9f",
"assets/assets/images/skills/git-svgrepo-com.svg": "395d8c6917b47ac4dcde3600673f6519",
"assets/assets/images/skills/github-142-svgrepo-com.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/images/skills/gmail_zyqsfxiwubqe.svg": "a8fa9072c2cb717e025da5c939306590",
"assets/assets/images/skills/graphql-svgrepo-com.svg": "f1650c3c260ae6dacb631c43217f7002",
"assets/assets/images/skills/java-svgrepo-com.svg": "2ae4636a86ab462bdd844e0bfd2835f5",
"assets/assets/images/skills/kotlin-svgrepo-com.svg": "de7c472e6f5cfd4e95557fcde4b0c3aa",
"assets/assets/images/skills/laravel-svgrepo-com.svg": "82639bcdcf4afbefaebfed38a7c7fab4",
"assets/assets/images/skills/link-svgrepo-com.svg": "6fe8a6abcf8f6963c25fa26a522247ee",
"assets/assets/images/skills/linkedin-svgrepo-com.svg": "49054de02264ca145cb75a88da383499",
"assets/assets/images/skills/location-gps-svgrepo-com.svg": "0d1e6f6381af343c531964813a416336",
"assets/assets/images/skills/node-svgrepo-com.svg": "6c43125ac646b8d613eb301e1b8490de",
"assets/assets/images/skills/phone-android-svgrepo-com.svg": "6884e631d33875b7291e30fe3fa37353",
"assets/assets/images/skills/php-svgrepo-com.svg": "da4418b108c29bfbfedcac4817d551cc",
"assets/assets/images/skills/postgresql-svgrepo-com.svg": "bae4eabea5c2343f4346dcbb29ecf4ee",
"assets/assets/images/skills/python-svgrepo-com.svg": "85368627053aa7df8e1340c0f29acdb8",
"assets/assets/images/skills/selenium-svgrepo-com.svg": "ad3f6a9a0d4445d19b7157343950331f",
"assets/assets/images/skills/sql-database-generic-svgrepo-com.svg": "690b33c2180b2ad1905d893a8622ebbe",
"assets/assets/images/skills/sqlite-svgrepo-com.svg": "266cdf99ee33451f17ded1414a10254f",
"assets/assets/images/skills/terminal-box-svgrepo-com.svg": "6de9e35b62bc7ec98f490780300be7dc",
"assets/assets/images/skills/vs-code-svgrepo-com.svg": "4e4468f1285d5c6eeb722177a2695ac7",
"assets/FontManifest.json": "2e4fcf503c3f87d1c5fd63599cc82576",
"assets/fonts/MaterialIcons-Regular.otf": "57a3b78025f65c194d585442be74c767",
"assets/NOTICES": "8e77e1ebe927171f8a5467b0704fc0aa",
"assets/packages/alchemist/assets/fonts/Roboto/Roboto-Black.ttf": "ec4c9962ba54eb91787aa93d361c10a8",
"assets/packages/alchemist/assets/fonts/Roboto/Roboto-Bold.ttf": "ee7b96fa85d8fdb8c126409326ac2d2b",
"assets/packages/alchemist/assets/fonts/Roboto/Roboto-Light.ttf": "fc84e998bc29b297ea20321e4c90b6ed",
"assets/packages/alchemist/assets/fonts/Roboto/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/packages/alchemist/assets/fonts/Roboto/Roboto-Regular.ttf": "3e1af3ef546b9e6ecef9f3ba197bf7d2",
"assets/packages/alchemist/assets/fonts/Roboto/Roboto-Thin.ttf": "89e2666c24d37055bcb60e9d2d9f7e35",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "4c8194dbddf41dfcf82af9a1a6d607cd",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "ead1aa2339d6b19bc5ae834f558b4c5e",
"icons/favicon.png": "4c8194dbddf41dfcf82af9a1a6d607cd",
"icons/Icon-192.png": "5e35f10e06f905f74985dae84575ade1",
"icons/Icon-512.png": "730ce1958992fcb1cec70f1cc1c97f66",
"index.html": "60cc9c023ef3be18351b48b2acc7356c",
"/": "60cc9c023ef3be18351b48b2acc7356c",
"main.dart.js": "05d28fb761e180405c5fc4c438a82acf",
"manifest.json": "419a61c69142f1c5b0ad6911b5704b50",
"splash/img/dark-1x.png": "e38958bc22094ace37d5937cb9516c00",
"splash/img/dark-2x.png": "338793253cad2570d03ac4e5a0cb2471",
"splash/img/dark-3x.png": "25b600acf99cd3db3eb855c5bfe404c7",
"splash/img/dark-4x.png": "45bf041f684120913a7544d5e5768df2",
"splash/img/light-1x.png": "e38958bc22094ace37d5937cb9516c00",
"splash/img/light-2x.png": "338793253cad2570d03ac4e5a0cb2471",
"splash/img/light-3x.png": "25b600acf99cd3db3eb855c5bfe404c7",
"splash/img/light-4x.png": "45bf041f684120913a7544d5e5768df2",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
