const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
 
module.exports = {
  devServer: {
    proxyTable: {
      '/api': {
        target: 'http://localhost:8360/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''     // this
        }
      }
    },
    host: '192.168.3.xxx',//IP地址
    port: 8080,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    cacheBusting: true,
    cssSourceMap: false
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("base", resolve("baseConfig"))
      .set("public", resolve("public"));
  },
}