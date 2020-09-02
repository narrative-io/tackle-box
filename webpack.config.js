const path = require('path');

module.exports = {
  module: {
    rules: [
			{
				test: /\.sass$/,
				use: [
					'vue-style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							indentedSyntax: true,
							sassOptions: {
								indentedSyntax: true
							},
							prependData: `@import "~@/styles/global/_variables.sass"`
						}
					}
				]
			}
		]
	}	
}