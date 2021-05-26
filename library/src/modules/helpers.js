function makeRandomId() {
	let result = ''
	let characters = 'abcdefghijklmnopqrstuvwxyz'
	let charactersLength = characters.length
	for (let i = 0; i < 16; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength))
	}
	return result;
}

function toKebabCase(string) {
	return string && string
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-')
}


export {
	makeRandomId,
	toKebabCase
}