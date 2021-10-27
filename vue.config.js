// vue-cli配置文档
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://test.my-site.com",
      },
    },
  },
};
