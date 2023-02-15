const token = 'XX'
const companyId = 1
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