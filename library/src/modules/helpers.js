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

function getParamNames(func) {
	var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
	var ARGUMENT_NAMES = /([^\s,]+)/g;
	var fnStr = func.toString().replace(STRIP_COMMENTS, '');
	var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
	if(result === null)
		result = [];
	return result;
}

export {
	makeRandomId,
	toKebabCase,
	getParamNames
}