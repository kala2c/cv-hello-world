const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: process.env.VUE_APP_OUTPUT_DIR,
})
