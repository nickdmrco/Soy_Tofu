import { useContext, useState } from 'react'
import CartContext from '../../utils/CartContext'
import OrderCard from './OrderCard'
import numberToMoney from '../../utils/lib/numberToMoney'
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core'

const OrderList = (props) => {
  const { orders } = useContext(CartContext)

  const renderTotal = () => {
    let price = 0
    orders.forEach((order) => {
      price += order.total * 100
    })
    price /= 100
    return <Typography>{`Total: $${numberToMoney(price)}`}</Typography>
  }

  return (
    <Card>
      {orders.map((order, i) => (
        <OrderCard index={i} />
      ))}
      <Card>
        <CardContent>{renderTotal()}</CardContent>
      </Card>
    </Card>
  )
}
export default OrderList
