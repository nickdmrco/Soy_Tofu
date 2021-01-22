import { useContext } from 'react'
import CartContext from '../../../utils/CartContext'
import numberToMoney from '../../../utils/lib/numberToMoney'
import {
 Button,
 Card,
 CardActionArea,
 CardContent,
 Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
 button: {
  width: '100%',
 },
}))

const OrderCard = (props) => {
 const { index } = props
 const {
  orders,
  foodsById,
  handleSelectOrder,
  handleDeleteOrder,
 } = useContext(CartContext)

 const classes = useStyles()

 const renderChoices = () => {
  return orders[index].options.map((option, i) => {
   let food = foodsById[orders[index].foodId]
   if (food.options[i].choices.length < 2) {
    return <></>
   }
   let price = ''
   if (option.price > 0) {
    price = ` + $${numberToMoney(option.price)}`
   }
   return (
    <Typography>{`${option.name}: ${option.choiceName}${price}`}</Typography>
   )
  })
 }
 return (
  <Card>
   <CardActionArea onClick={() => handleSelectOrder(index)}>
    <CardContent>
     <Typography>{`Order #${index + 1}`}</Typography>
     <Typography>{orders[index].foodName}</Typography>
     <Typography>{`Total: $${numberToMoney(
      orders[index].total,
     )}`}</Typography>
     <Typography>{`Quantity: ${orders[index].amount}`}</Typography>
     {renderChoices()}
     <Button
      color="secondary"
      variant="contained"
      onClick={(event) => {
       event.stopPropagation()
       handleDeleteOrder(index)
      }}
      className={classes.button}
     >
      Remove
          </Button>
    </CardContent>
   </CardActionArea>
  </Card>
 )
}

export default OrderCard