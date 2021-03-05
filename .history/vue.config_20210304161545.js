const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
 
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8360',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/mock'     // this
        }
      }
    }
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