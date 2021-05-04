import { setGlobalStyles } from './global'

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
	let styles = document.documentElement.style
	return styles.getPropertyValue(`--nio-theme-${toKebabCase(colorName)}`)
}

export {
	setTheme,
	getThemeColor
}