module.exports = {
  devServer: {
    proxy: {
      //如需跨域请求多个域名，在此对象进行扩展即可
      "/apis": {
        target: "http://www.***.com/",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/apis": ""
        }
      }
    }
  }
};
