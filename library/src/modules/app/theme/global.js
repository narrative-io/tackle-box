const GlobalColors = {
	primaryLightest: {
		key: "--nio-theme-primary-lightest",
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
	},
	canvas: {
		key: "--nio-theme-canvas",
		default: "#F4F7FB"
	},
	canvasDarker: {
		key: "--nio-theme-canvas-darker",
		default: "#ECF1F9"
	},
	pageBackground: {
		key: "--nio-theme-page-background",
		default: "#F4F7FB"
	}
} 

function setGlobalStyles(styles) {
	Object.keys(GlobalColors).forEach(key => {
		if (!styles.getPropertyValue(GlobalColors[key].key)) {
			styles.setProperty(GlobalColors[key].key, GlobalColors[key].default)
		}
	})
}

export {
	GlobalColors,
	setGlobalStyles
}