import { setGlobalStyles } from './global'
import { GlobalColors } from './global'
import { toKebabCase } from '../../helpers'

function setTheme() {
	let styles = document.documentElement.style
	setGlobalStyles(styles)
}

function getThemeColor(colorName) {
	console.log(GlobalColors)
	console.log(colorName)
	let cssVar = document.documentElement.style.getPropertyValue(`--nio-theme-${toKebabCase(colorName)}`)
	return cssVar ? cssVar : GlobalColors[colorName].default
}

export {
	setTheme,
	getThemeColor
}