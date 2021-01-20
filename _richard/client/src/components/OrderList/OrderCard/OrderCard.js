import { useContext, useState } from 'react'
import CartContext from '../../../utils/CartContext'
import numberToMoney from '../../../utils/lib/numberToMoney'
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core'

const OrderCard = (props) => {
  const { index } = props
  const { orders, foodsById, handleSelectOrder } = useContext(CartContext)

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
          {renderChoices()}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default OrderCard
