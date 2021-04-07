const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
 
module.exports = {
  // entry: ["babel-polyfill", "./src/main.js"],
  devServer:{
    // host: 'localhost',//target host
    port: 8080,
    // assetsSubDirectory:'static',
    // assetsPublicPath:'/',
    proxy:{
        '/api':{
          target: 'http://localhost:8360',//代理地址，这里设置的地址会代替axios中设置的baseURL
            changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
            secure: false, //如果是https接口，需要配置此参数
            //pathRewrite方法重写url
            pathRewrite: {
                '^/api': "/" 
                //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
                //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
           },
    }}
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