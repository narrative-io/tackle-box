import numeral from 'numeral'

let nioFormatCurrency = (number) => {
  if (Math.abs(number) > 1000)
    return numeral(number).format('$0,0.00a')
  else
    return numeral(number).format('$0.00')
}

let nioFormatCurrencyNoCents = (number) => {
  if (Math.abs(number) > 1000)
    return numeral(number).format('$0,0')
  else
    return numeral(number).format('$0')
}

let nioFormatInteger = (number) => {
  return numeral(number).format('0,00a')
}

let nioFormatNumber = (number) => {
  if (isNaN(number))
    return 0
  if (number) {
    if (Math.abs(number) > 1000)
      return numeral(number).format('0a')
    else 
    return numeral(number).format('0,0')
  }
  else return number
}

let nioFormatNumberVerbose = (number) => {
  if (number > 0) {
    return formatNumber(number).replace('m', ' Million').replace('b', ' Billion').replace('k', 'K')
  }
}

let nioFormatFloatVerbose = (number) => {
  if (number > 0) {
    return numeral(number).format('0,0.00a').replace('m', ' Million').replace('b', ' Billion').replace('k', 'K')
  }
}

let nioFormatFloat = (number) => {
  if (isNaN(number))
    return 0
  return numeral(number).format('0.00')
}

let nioFormatPercentageFromFloat = (number) => {
  if (isNaN(number))
    return "0.0"
  return numeral(number * 100).format('0,0.00')
}

export default {
  nioFormatCurrency,
  nioFormatCurrencyNoCents,
  nioFormatNumber,
  nioFormatNumberVerbose,
  nioFormatFloat,
  nioFormatFloatVerbose,
  nioFormatPercentageFromFloat,
  nioFormatInteger
}