const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  filenameHashing: false,
  configureWebpack: {
    externals: ['@tko/market-store'],
    output: {
      libraryTarget: 'system',
      filename: 'js/nav.js'
    },
  },
  transpileDependencies: ['quasar'],
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  devServer: {
    host : "localhost",
    port: 8091,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
})
