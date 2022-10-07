import numeral from 'numeral'

let makeDeliveryCadence = (selection) => {
  switch (selection) {
    case 'One Time':
      return 'once'
    case 'Hour':
      return 'hourly'
    case 'Day':
      return 'daily'
    case 'Week':
      return 'weekly'
    case 'Month':
      return 'monthly'
    default:
      return 'monthly'
  }
}

let makeBudgetCadence = (selection) => {
  switch (selection) {
    case 'Day':
      return 'calendar_daily'
    default:
      return 'calendar_monthly'
  }
}

let makeBudgetSummary = (budgetAmount, budgetCadence, deliveryCadence) => {
  if (!budgetAmount || !budgetCadence || !deliveryCadence) return null
  return {
    budget: `$${numeral(budgetAmount).format('0,0.00')} per ${budgetCadence.toLowerCase()}`,
    delivery: makeDeliveryCadence(deliveryCadence)
  }
}

export {
  makeBudgetCadence,
  makeDeliveryCadence,
  makeBudgetSummary
}