import { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CartContext from '../../utils/CartContext'
import Button from '@material-ui/core/Button'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: '25%',
  },
}))

const Menu = () => {
  const {
    foods,
    order,
    orders,
    handleSelectOrder,
    handleAddOrder,
    handleDeleteOrder,
  } = useContext(CartContext)
  const classes = useStyles()

  const totalPrice = () => {
    let price = 0
    let len = orders.length
    for (let i = 0; i < len; i++) {
      price += Math.floor(orders[i].price * 100)
    }
    price = price / 100 + ''
    let money = price.split('.')
    if (money.length > 1) {
      if (money[1].length < 2) {
        money[1] += '0'
      }
      return `${money[0]}.${money[1]}`
    }
    return `${price}.00`
  }

  const total = totalPrice()

  return (
    <>
      <Grid container>
        <Grid item xs={9}>
          <Card>
            <CardContent>
              <Typography>Name: {order.name}</Typography>
              <Typography>Image: {order.image}</Typography>
              <Typography>Price: {order.price}</Typography>
              <Typography>Catagory: {order.catagory}</Typography>
              <Typography>Desc: {order.description}</Typography>
            </CardContent>
            <Button onClick={() => handleAddOrder()}>Add</Button>
          </Card>
          {foods.map((food, i) => (
            <Card className={classes.card}>
              <CardContent>
                <Typography>{food.name}</Typography>
                <Button onClick={() => handleSelectOrder(i)}>{i}</Button>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={3}>
          {orders.map((order, i) => (
            <Card>
              <CardContent>
                <Typography>{order._id}</Typography>
                <Typography>{order.name}</Typography>
                <Button value={i} onClick={() => handleDeleteOrder(i)}>
                  {i}
                </Button>
              </CardContent>
            </Card>
          ))}
          <Typography>Total:${total}</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Menu
