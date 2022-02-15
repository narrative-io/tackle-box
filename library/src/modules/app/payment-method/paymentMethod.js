let paymentMethodImageSrc = (paymentMethod) => {
	if (paymentMethod.id === '0') {
		return 'https://cdn.narrative.io/images/data-stream/images/narrative-placeholder-normal.svg'
	} else {
		switch (paymentMethod.cardBrand) {
			case 'visa':
				return "https://cdn.narrative.io/images/data-stream/images/visaTile.svg"
			case 'mastercard':
				return "https://cdn.narrative.io/images/data-stream/images/mastercardTile.svg"  
			case 'discover':
				return "https://cdn.narrative.io/images/data-stream/images/discoverTile.svg"   
			case 'amex':
				return "https://cdn.narrative.io/images/data-stream/images/americanExpressTile.svg"
			case 'unionpay':
				return "https://cdn.narrative.io/images/data-stream/images/unionpay.svg"	
			case 'diners':
				return "https://cdn.narrative.io/images/data-stream/images/dinersclub.svg"
			case 'jcb':
				return "https://cdn.narrative.io/images/data-stream/images/jcb.svg"		     
			default:
				return 'https://cdn.narrative.io/images/data-stream/images/narrative-placeholder-normal.svg'
		}
	}
}

export { 
	paymentMethodImageSrc
}