/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "2e4d9c1d63e9f7e1bcba7dfcb01e546a"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.192b35ce.css",
    "revision": "aa9333c60edb2392fab783ed2c2aef48"
  },
  {
    "url": "assets/img/create_project_exception_title.13693fd8.jpg",
    "revision": "13693fd83552ed634fc96db04b7824d8"
  },
  {
    "url": "assets/img/create_project_response.b0ab8d9f.jpg",
    "revision": "b0ab8d9f4309948f0f5b21bd2c5770c6"
  },
  {
    "url": "assets/img/create_project.1c051285.png",
    "revision": "1c0512851b95c643e643131217eb8810"
  },
  {
    "url": "assets/img/delete_project_exeption_invalid_id.b9853722.jpg",
    "revision": "b985372291617153294d6c47b56dc560"
  },
  {
    "url": "assets/img/delete_project.f4914868.jpg",
    "revision": "f4914868ee62220fd8c2639b50feb841"
  },
  {
    "url": "assets/img/get_project_exeption_invalid_id.8e971669.jpg",
    "revision": "8e9716693986a111dd6008277c1d3f5a"
  },
  {
    "url": "assets/img/get_project.747514d4.jpg",
    "revision": "747514d4a3cf4e92f20542b282027cef"
  },
  {
    "url": "assets/img/patch_project_exception_invalid_id.a16a7760.jpg",
    "revision": "a16a7760888195ca26775ab04d402cc2"
  },
  {
    "url": "assets/img/patch_project_response.8178a806.jpg",
    "revision": "8178a806db4ebb0897e84584fbc67ceb"
  },
  {
    "url": "assets/img/patch_project.861d6ff4.jpg",
    "revision": "861d6ff410940dbf4713a0fd85a7eecb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f7b10c54.js",
    "revision": "c4a70832c32c065ef91ca47964e18685"
  },
  {
    "url": "assets/js/11.e89c4278.js",
    "revision": "300e25dd6ca44b5fb806f21577408953"
  },
  {
    "url": "assets/js/12.5b3782da.js",
    "revision": "ec84445b35ce0a75b5e8c9987f9dcdbd"
  },
  {
    "url": "assets/js/13.80e90bd9.js",
    "revision": "d842137155933879fdd913b60ef96cd2"
  },
  {
    "url": "assets/js/14.4f47941f.js",
    "revision": "c654a27128b4eee6e8ccaf6c9b4c8551"
  },
  {
    "url": "assets/js/15.c3e67071.js",
    "revision": "6427eb4248e14675e4280cc177e10100"
  },
  {
    "url": "assets/js/16.c1a295f4.js",
    "revision": "e372327f8208b65b37f9a64529fd8f65"
  },
  {
    "url": "assets/js/17.0686917f.js",
    "revision": "b4412edb14b0e09302706c80976a1b35"
  },
  {
    "url": "assets/js/18.e3f16230.js",
    "revision": "701b5137feb1d4701f3027de7efc6882"
  },
  {
    "url": "assets/js/19.794d8953.js",
    "revision": "ae03dcfc9479b0ab580b2d04373ea18f"
  },
  {
    "url": "assets/js/2.3180c2ee.js",
    "revision": "d1ce744b43aad7a3a8c615b077d1f244"
  },
  {
    "url": "assets/js/20.fad80986.js",
    "revision": "2f2a6d64094bdea15a3d3efe96e806f6"
  },
  {
    "url": "assets/js/21.37ca61be.js",
    "revision": "ad1a9d98d9ab56d50cd432885301d4ea"
  },
  {
    "url": "assets/js/22.28154de9.js",
    "revision": "62a7d5e59c14460c69ddd8a2492489d6"
  },
  {
    "url": "assets/js/23.5a09f31f.js",
    "revision": "c86e808ccd0221abfafa606cf3514646"
  },
  {
    "url": "assets/js/24.f6c119b7.js",
    "revision": "134fc1a49aa84a4e77715c739d972d52"
  },
  {
    "url": "assets/js/26.4af96bf1.js",
    "revision": "2c0a8a8b596c809d40b6c58588a6c90f"
  },
  {
    "url": "assets/js/3.d6b3f278.js",
    "revision": "bf67961a70a43c5f561269cabf3903d2"
  },
  {
    "url": "assets/js/4.e67adc0d.js",
    "revision": "b7574bb078a2684a931daf9175b27dcd"
  },
  {
    "url": "assets/js/5.78667381.js",
    "revision": "88481ae538101473deabff01295b5d95"
  },
  {
    "url": "assets/js/6.2970ac8d.js",
    "revision": "72dba871820ee8c5135bbd0a533b2899"
  },
  {
    "url": "assets/js/7.02e2ae1c.js",
    "revision": "67ed2070577dce095aa30d2971486009"
  },
  {
    "url": "assets/js/8.6e573cd1.js",
    "revision": "7772e3c4f59f6f0b74059fd96551e0ed"
  },
  {
    "url": "assets/js/9.fb984298.js",
    "revision": "b1cb1e04b5adf3bd2a52d8a1771e9b03"
  },
  {
    "url": "assets/js/app.d2a85fea.js",
    "revision": "2f268fb6b58ebeb98d5ecb12e4b286ed"
  },
  {
    "url": "conclusion/index.html",
    "revision": "dd830aef37370383b7990b16e08c3192"
  },
  {
    "url": "design/index.html",
    "revision": "bba376fd87674973ebfae4dfbe95230a"
  },
  {
    "url": "index.html",
    "revision": "251cd30286603d0f257dc79f04031688"
  },
  {
    "url": "intro/index.html",
    "revision": "6487f698e6fa44c58312e28846071de5"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "f639afba6ff473b24f84bd8dabe9e0f9"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "c5ea5e93f1901a8284730250765945f0"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "7daa0963d1ed8cc1a329c40b72487244"
  },
  {
    "url": "software/index.html",
    "revision": "dfa64ece620f4f4353ab3e7e8d450dde"
  },
  {
    "url": "test/index.html",
    "revision": "db392fbe4fe3b35b56ce30e277b67ad1"
  },
  {
    "url": "use cases/index.html",
    "revision": "3d9323502099e801e67923a1c71240e7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
