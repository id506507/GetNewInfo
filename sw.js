importScripts('/GetNewInfo/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/GetNewInfo/_nuxt/08c1bc610eceb9523685.js",
    "revision": "9d29ebffb130a22ef66bb820b99c617b"
  },
  {
    "url": "/GetNewInfo/_nuxt/409d52974fc17967d342.js",
    "revision": "510f76cda017c0d39a85d4d81975a917"
  },
  {
    "url": "/GetNewInfo/_nuxt/41f70700bee1605bf409.js",
    "revision": "2f695181a2d17dfc2c6b4d61a0436daf"
  },
  {
    "url": "/GetNewInfo/_nuxt/51dc6217c081b62c631d.js",
    "revision": "8b84bab52309ec8d148d34527f16b844"
  },
  {
    "url": "/GetNewInfo/_nuxt/5ea4d1e633ff4eb48a4b.js",
    "revision": "1fd8094d382fd6c758fb781c28e92e46"
  },
  {
    "url": "/GetNewInfo/_nuxt/719ee3a1b066bb8b5309.js",
    "revision": "b0a4ef3804f501f0692806b5b1ac7387"
  },
  {
    "url": "/GetNewInfo/_nuxt/7249e16c625cd40724a7.js",
    "revision": "a60fa212b718fe12936a0fc0c6823ef0"
  },
  {
    "url": "/GetNewInfo/_nuxt/74e47b4bcdaff703f388.js",
    "revision": "b68f06848e4f9a7737b8c32192d6164e"
  },
  {
    "url": "/GetNewInfo/_nuxt/798554d718832549567d.js",
    "revision": "1ee122ac24b5890c67eb891145bef2c4"
  },
  {
    "url": "/GetNewInfo/_nuxt/7b277f6e23385bbca60b.js",
    "revision": "e286809bf77021575884a9c10d61d08c"
  },
  {
    "url": "/GetNewInfo/_nuxt/c62b14ab928e285db5d9.js",
    "revision": "d6b4ce2871aaf21c1342a2ad10acb353"
  },
  {
    "url": "/GetNewInfo/_nuxt/c73848e0d74737060d78.js",
    "revision": "71280d38780229b697de88fbb773b6c1"
  },
  {
    "url": "/GetNewInfo/_nuxt/d04ee13bc1e85d248d5e.js",
    "revision": "c26334b4adc1311b72c3c14d7d012d7e"
  },
  {
    "url": "/GetNewInfo/_nuxt/dd0fbe4e85087c588caf.js",
    "revision": "eb58c981cf829516aef49d412b171e22"
  }
], {
  "cacheId": "ThisIsWebsite",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/GetNewInfo/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/GetNewInfo/.*'), workbox.strategies.networkFirst({}), 'GET')
