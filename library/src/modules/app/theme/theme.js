import { setGlobalStyles } from './global'
import { GlobalColors } from './global'

function setTheme() {
	let styles = document.documentElement.style
	setGlobalStyles(styles)
}

function toKebabCase(string) {
	return string && string
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-')
}

function getThemeColor(colorName) {
	let cssVar = document.documentElement.style.getPropertyValue(`--nio-theme-${toKebabCase(colorName)}`)
	return cssVar ? cssVar : GlobalColors[colorName].default
}

export {
	setTheme,
	getThemeColor
}