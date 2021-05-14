function makeRandomId() {
	let result = ''
	let characters = 'abcdefghijklmnopqrstuvwxyz'
	let charactersLength = characters.length
	for (let i = 0; i < 16; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength))
	}
	return result;
}

export {
	makeRandomId
}