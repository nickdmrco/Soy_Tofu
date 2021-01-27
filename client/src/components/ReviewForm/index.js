import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid'
import { useState, useEffect } from 'react'
import numberToMoney from '../../utils/lib/numberToMoney'

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}))

export default function Review(props) {
  const classes = useStyles()
  const { firstName, lastName, phone } = props
  const [orderState, setOrderState] = useState({
    orders: [],
  })

  const renderTotal = () => {
    let price = 0
    orderState.orders.forEach((order) => {
      price += order.total * 100
    })
    price /= 100
    return `$${numberToMoney(price)}`
  }

  useEffect(() => {
    let orders = JSON.parse(localStorage.getItem('soy_tofu_orders'))
    if (orders === null) {
      orders = []
    }
    console.log(orders)
    setOrderState({ orders: orders })
  }, [])

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {orderState.orders.map((order) => (
          <ListItem className={classes.listItem} key={order.name}>
            <ListItemText
              primary={order.foodName}
              secondary={`x${order.amount}`}
            />
            {order.options.map((option) => {
              let name = option.name.toLowerCase()
              if (name === 'default') {
                return ''
              }
              if (option.price === 0) {
                return (
                  <ListItemText
                    primary={option.name}
                    secondary={option.choiceName}
                  />
                )
              }
              return (
                <ListItemText
                  primary={option.name}
                  secondary={`${option.choiceName}+$${option.price}`}
                />
              )
            })}
            <Typography variant="body2">
              Total: ${numberToMoney(order.total)}
            </Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total:" />
          <Typography variant="subtitle1" className={classes.total}>
            {renderTotal()}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Pick Up
          </Typography>
          <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
          <Typography gutterBottom>{phone}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container></Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
