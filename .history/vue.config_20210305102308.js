const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
 
module.exports = {
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    // host: '127.0.0.1',//IP地址
    // port: 8360,
    autoOpenBrowser: true,
    errorOverlay: true,
    // notifyOnErrors: true,
    // poll: false,
    // cacheBusting: true,
    // cssSourceMap: false,
  //     proxyTable: {
  //     '/api': {
  //       target: 'http://127.0.0.1:8360',
  //       changeOrigin: true,
  //       ws: true,
  //       pathRewrite: {
  //         '^/api': ''     // this
  //       }
  //     }
  //   },
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