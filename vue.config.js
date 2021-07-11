module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views"
      }
    }
  },

  lintOnSave: false,
  devServer: {
    host: "0.0.0.0"
  },
  build: {
    // Template for index.html
    index: path.resolve(__dirname, "../docs/index.html"), //之前是'../dist/index.html'

    // Paths
    assetsRoot: path.resolve(__dirname, "../docs"), // 之前是 '../dist'
    assetsSubDirectory: "static",
    assetsPublicPath: "./" // 之前是 '/'
  }
};
