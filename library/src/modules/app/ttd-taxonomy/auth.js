const token = 'XXX'
const companyId = 365
const headers = {
  headers: {
    'Authorization': `Bearer ${token}`
  }
}

const baseUrl = 'https://thetradedesk-dev.narrativeconnectors.com'

export {
  headers,
  baseUrl,
  companyId
}