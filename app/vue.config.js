const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'J🌰 Bicycle Bell'
    }
  },
  pwa: {
    name: 'J🌰 Bicycle Bell',
    themeColor: '#28a745',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "./src/service-worker.js",
    },

    manifestOptions: {
      "id": "/",
      "start_url": "/", 
      "scope": "/", 
      "prefer_related_applications": true,
      "related_applications": [{
        "platform": "webapp",
        "url": "https://j-nuts-bell.krueckl.de/manifest.json"

      }]
    }

  }
})
