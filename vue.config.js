
module.exports = {
  // "transpileDependencies": [
  //   "vuetify"
  // ],
  configureWebpack:{
  
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/global/_variables.sass"`
      }
    }
  }
}