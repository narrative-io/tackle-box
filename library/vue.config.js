module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/index.scss";`,
      },
    },
	},
	configureWebpack:{
		resolve: {
			alias: {
				'vue$': 'vue/dist/vue.esm.js'
			}
		}
  },
  transpileDependencies: ["vuetify"],
};
