const path = require('path');

module.exports = {
	chainWebpack: config => {
		config.resolve.alias
			.set('Components', path.resolve(__dirname, './src/components'))
			.set('Models', path.resolve(__dirname, './src/models'))
			.set('Api', path.resolve(__dirname, './src/api/api.js'))
			.set('Helpers', path.resolve(__dirname, './src/helpers'));
	},
	css: {
		loaderOptions: {
			sass: {
				prependData: `
					@import "~@/assets/scss/vars.scss";
				`
			}
		}
	}
}
