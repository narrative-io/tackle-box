import numeral from 'numeral'

export function makeRandomId() {
  let result = ''
  let characters = 'abcdefghijklmnopqrstuvwxyz'
  let charactersLength = characters.length
  for (let i = 0; i < 16; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result;
}

export function toKebabCase(string) {
  return string && string
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-')
}

export function getParamNames(func) {
  var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
  var ARGUMENT_NAMES = /([^\s,]+)/g;
  var fnStr = func.toString().replace(STRIP_COMMENTS, '');
  var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
  if(result === null)
    result = [];
  return result;
}

export function formatNumber(number) {
  if (isNaN(number))
    return 0
  if (number) {
    if (Math.abs(number) > 1000)
      return numeral(number).format('0.0a')
    else 
    return numeral(number).format('0,0')
  }
  else return number
}

export function formatNumberVerbose(number) {
  if (number > 0) {
    return this.formatNumber(number).replace('m', ' Million').replace('b', ' Billion').replace('b', ' Billion').replace('t', ' Trillion') + ' Rows'
  }
}

export function toCamelCase(string) {
  let inputArray = string.split(' ')
  let result = "";
  for(let i = 0 , len = inputArray.length; i < len; i++) {
    let currentStr = inputArray[i];
    let tempStr = currentStr.toLowerCase();
    if(i != 0) {
        tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
     }
     result += tempStr;	
  }
  return result;
}

export default {
  makeRandomId,
  toKebabCase,
  getParamNames,
  formatNumber,
  formatNumberVerbose,
  toCamelCase
}