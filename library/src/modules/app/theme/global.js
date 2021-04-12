const GlobalColors = {
	primaryLightest: {
		key: "--nio-theme-primary-lighest",
		default: "#EAECF9"
	},
	primaryLighter: { 
		key: "--nio-theme-primary-lighter",
		default: "#DAE0F9"
	},
	primaryLight: {
		key: "--nio-theme-primary-light",
		default: "#AEB9E8"
	},
	primary: {
		key: "--nio-theme-primary",
		default: "#1438F5"
	},
	primaryDark: {
		key: "--nio-theme-primary-dark",
		default: "#415298"
	},	
	primaryDarker: {
		key: "--nio-theme-primary-darker",
		default: "#031553"
	},
	primaryDarkest: {
		key: "--nio-theme-primary-darkest",
		default: "#010A28"
	}	
} 

function setGlobalStyles(styles) {
	Object.keys(GlobalColors).forEach(color => {
		console.log(color)
		if (!styles.getPropertyValue(color.key)) {
			console.log("setting ", color.key)
			styles.setProperty(color.key, color.default)
		}
	})
}

export default {
	setGlobalStyles
}