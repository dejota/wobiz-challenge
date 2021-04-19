module.exports = {
  publicPath: "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_global.scss";`
      }
    }
  }
};
