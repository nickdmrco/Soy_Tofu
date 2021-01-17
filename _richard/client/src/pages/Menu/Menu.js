import { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CartContext from '../../utils/CartContext'
import Button from '@material-ui/core/Button'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import numberToMoney from '../../utils/lib/numberToMoney'

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: '25%',
  },
}))

const Menu = () => {
  const classes = useStyles()
  const {
    foods,
    foodsByCatagory,
    orders,
    catagories,
    handleUpdateOrders,
    handleAddOrders,
    handleDeleteOrders,
  } = useContext(CartContext)

  const [catagoryState, setCatagoryState] = useState({
    catagory: catagories[0],
  })

  const handleChangeCatagory = (index) => {
    setCatagoryState({ catagory: catagories[index] })
  }

  const totalPrice = () => {
    let price = 0
    let len = orders.length
    for (let i = 0; i < len; i++) {
      price += Math.floor(orders[i].price * 100)
    }
    price = price / 100

    return numberToMoney(price)
  }

  const total = totalPrice()

  const renderSelectedOrder = () => {}

  return (
    <>
      <Grid container>
        <Grid item xs={9}>
          {
            //Order Render goes here
          }
          <Card>
            <CardContent>
              {catagories.map((catagory, i) => (
                <Button onClick={() => handleChangeCatagory(i)}>
                  {catagory.name}
                </Button>
              ))}
            </CardContent>
          </Card>
          {foodsByCatagory[catagoryState.catagory].map((food, i) => (
            <Card className={classes.card}>
              <CardContent>
                <Typography>{food.name}</Typography>
                <Typography>${numberToMoney(food.lowest)}</Typography>
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
                <Typography>${numberToMoney(order.price)}</Typography>
                <Button value={i} onClick={() => handleDeleteOrders(i)}>
                  Delete
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
