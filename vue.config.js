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
  publicPath: process.env.NODE_ENV === "production" ? "/vue-mall/" : "/"
};
