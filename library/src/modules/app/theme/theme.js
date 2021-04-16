import { setGlobalStyles } from './global'

function setTheme() {
	let styles = document.documentElement.style
	setGlobalStyles(styles)
}

export {
	setTheme
}