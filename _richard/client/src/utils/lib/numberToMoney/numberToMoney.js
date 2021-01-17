const numberToMoney = (cost) => {
  if (isNaN(cost)) {
    return '0.00'
  }
  let price = cost + ''
  let money = price.split('.')
  if (money.length > 1) {
    if (money[1].length < 2) {
      money[1] += '0'
    }
    return `${money[0]}.${money[1]}`
  }
  return `${price}.00`
}

export default numberToMoney
