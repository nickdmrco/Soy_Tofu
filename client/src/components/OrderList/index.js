import { useContext } from 'react'
import CartContext from '../../utils/CartContext'
import OrderCard from './OrderCard'
import numberToMoney from '../../utils/lib/numberToMoney'
import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
 root: {
  color: 0xFD746C,
  backgroundColor: 'rgb(245, 242, 230)',
 },

}))

const OrderList = (props) => {
 const { orders } = useContext(CartContext)
 const classes = useStyles()

 const renderTotal = () => {
  let price = 0
  orders.forEach((order) => {
   price += order.total * 100
  })
  price /= 100
  return <Typography>{`Total: $${numberToMoney(price)}`}</Typography>
 }

 return (
  <Card className={classes.root}>
   <Card className={classes.root}>
    <CardContent>{renderTotal()}</CardContent>
   </Card>
   <Card>
    {orders.map((order, i) => (
     <OrderCard index={i} />
    ))}
   </Card>
  </Card>
 )
}
export default OrderList