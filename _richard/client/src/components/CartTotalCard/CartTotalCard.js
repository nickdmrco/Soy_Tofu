import { useContext } from 'react'
import CartContext from '../../utils/CartContext'
import { Card, CardContent, Typography, Button } from '@material-ui/core'
import numberToMoney from '../../utils/lib/numberToMoney'

const CartTotalCard = () => {
  const { orders } = useContext(CartContext)
  const renderTotal = () => {
    let price = 0
    orders.forEach((order) => {
      price += order.total * 100
    })
    price /= 100
    return <Typography>{`Total: $${numberToMoney(price)}`}</Typography>
  }
}

export default CartTotalCard
