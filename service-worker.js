if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise(async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()})),i.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},i=(i,a)=>{Promise.all(i.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(i)};self.define=(i,d,f)=>{a[i]||(a[i]=Promise.resolve().then(()=>{let a={};const c={uri:location.origin+i.slice(1)};return Promise.all(d.map(i=>{switch(i){case"exports":return a;case"module":return c;default:return e(i)}})).then(e=>{const i=f(...e);return a.default||(a.default=i),a})}))}}define("./service-worker.js",["./workbox-dce9cbc5"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"/Codify/index.html",revision:"bff988d220dd4ec800be24af969a4839"},{url:"/Codify/static/css/2.e2127eae.chunk.css",revision:"5bfb919a040cdbb3ea32ee5153f23156"},{url:"/Codify/static/css/main.664cdd04.chunk.css",revision:"179afa4dd13db28ca264760434c97eec"},{url:"/Codify/static/js/2.90eeb9a0.chunk.js",revision:"699f4be3006f5207aa1bcd4b2e3d0ec1"},{url:"/Codify/static/js/main.d4889f73.chunk.js",revision:"d43a68248bacdebf4bb3c54e7de6200b"},{url:"/Codify/static/js/runtime~main.4737b06d.js",revision:"cb1da8d004dbfd7ec969a2aab743a6ce"},{url:"/Codify/static/media/1.png",revision:"610f2a5ad8f48b6865b65aa96ecf2096"},{url:"/Codify/static/media/2.png",revision:"cd708aaac1c953ebc42aa3b58f13d921"},{url:"/Codify/static/media/3.png",revision:"e2e9acc3d90c79b5903b9835c09e5638"},{url:"/Codify/static/media/4.png",revision:"991dc9b0b62193a74474aa78ed9d7236"},{url:"/Codify/static/media/5.png",revision:"0406308c7c726a1b1c779130462ea42d"},{url:"/Codify/static/media/Flaticon.0c6755dd.svg",revision:"0c6755dd995fe96a629533b75b4475a8"},{url:"/Codify/static/media/Flaticon.76ed06ab.woff",revision:"76ed06ab10a4112fa3bb33bbf320cb6d"},{url:"/Codify/static/media/Flaticon.90bc8831.ttf",revision:"90bc8831ccc880209459e741dc3ad6e2"},{url:"/Codify/static/media/Flaticon.96850e10.eot",revision:"96850e104a54cdeb774cf1185b088d14"},{url:"/Codify/static/media/a5.jpg",revision:"16925fa2e2c73972bd27fdba2ef53db7"},{url:"/Codify/static/media/fontawesome-webfont.674f50d2.eot",revision:"674f50d287a8c48dc19ba404d20fe713"},{url:"/Codify/static/media/fontawesome-webfont.912ec66d.svg",revision:"912ec66d7572ff821749319396470bde"},{url:"/Codify/static/media/fontawesome-webfont.af7ae505.woff2",revision:"af7ae505a9eed503f8b8e6982036873e"},{url:"/Codify/static/media/fontawesome-webfont.b06871f2.ttf",revision:"b06871f281fee6b241d60582ae9369b9"},{url:"/Codify/static/media/fontawesome-webfont.fee66e71.woff",revision:"fee66e712a8a08eef5805a46892932ad"},{url:"/Codify/static/media/glyphicons-halflings-regular.448c34a5.woff2",revision:"448c34a56d699c29117adc64c43affeb"},{url:"/Codify/static/media/glyphicons-halflings-regular.89889688.svg",revision:"89889688147bd7575d6327160d64e760"},{url:"/Codify/static/media/glyphicons-halflings-regular.d41d8cd9.ttf",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/Codify/static/media/glyphicons-halflings-regular.f4769f9b.eot",revision:"f4769f9bdb7466be65088239c12046d1"},{url:"/Codify/static/media/glyphicons-halflings-regular.fa277232.woff",revision:"fa2772327f55d8198301fdb8bcfc8158"},{url:"/Codify/static/media/la-brands-400.54b0b4e7.woff2",revision:"54b0b4e7de85711c3796882b2b19eb00"},{url:"/Codify/static/media/la-brands-400.9769d0a6.svg",revision:"9769d0a6a42cf73df12bc63a7a994131"},{url:"/Codify/static/media/la-brands-400.a38ca9f0.eot",revision:"a38ca9f0501109549cb659c1fe9ade65"},{url:"/Codify/static/media/la-brands-400.bbf83f8b.ttf",revision:"bbf83f8bb1039cd860051299d64ebcfd"},{url:"/Codify/static/media/la-brands-400.fb598c9c.woff",revision:"fb598c9ccecd5fa1c6c769d0be60973b"},{url:"/Codify/static/media/la-regular-400.2746742c.eot",revision:"2746742c09b070f74bd7d555e6b959fa"},{url:"/Codify/static/media/la-regular-400.338f6f87.woff",revision:"338f6f873b90c8045204f8ac52408166"},{url:"/Codify/static/media/la-regular-400.55c57a74.svg",revision:"55c57a74937e6de260b67c62522f7ea1"},{url:"/Codify/static/media/la-regular-400.87dab6ff.ttf",revision:"87dab6ff12ea107dafe1d52ec19c2ed8"},{url:"/Codify/static/media/la-regular-400.88d9d941.woff2",revision:"88d9d9416c58bde56378dc4439e3a144"},{url:"/Codify/static/media/la-solid-900.36fc2979.woff2",revision:"36fc297902c9a2e857858baa6ac25f2c"},{url:"/Codify/static/media/la-solid-900.79be4e9f.svg",revision:"79be4e9fcffc796ec3b2cb9a1f46d39e"},{url:"/Codify/static/media/la-solid-900.87292218.woff",revision:"87292218024ee1cab93406e228a0b7dd"},{url:"/Codify/static/media/la-solid-900.8c65fd3e.eot",revision:"8c65fd3e9b53a609735fd6335fd05841"},{url:"/Codify/static/media/la-solid-900.bb49393b.ttf",revision:"bb49393b04bbf312a6cd055a051121d3"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/Codify/index.html"),{denylist:[/^\/_/,/\/[^\/]+\.[^\/]+$/]}))}));