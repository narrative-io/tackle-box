import { setGlobalStyles } from './global'

function setTheme() {
	let styles = document.documentElement.style
	console.log(styles)
	setGlobalStyles(styles)
}

export {
	setTheme
}