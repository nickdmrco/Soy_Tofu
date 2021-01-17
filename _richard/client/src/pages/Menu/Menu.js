import { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CartContext from '../../utils/CartContext'
import Button from '@material-ui/core/Button'
import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core'
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
    foodsById,
    orders,
    catagories,
    handleUpdateOrders,
    handleAddOrder,
    handleDeleteOrders,
  } = useContext(CartContext)

  const blankOrder = {
    id: '',
    options: [],
    total: 0,
  }

  const [foodByCatagoryState, setfoodByCatagoryState] = useState({
    foods: [],
  })

  const [foodState, setFoodState] = useState({
    _id: '',
    name: '',
    image: '',
    catagory: '',
    options: [
      {
        name: '',
        choices: [
          {
            name: '',
            price: 0,
          },
        ],
      },
    ],
    description: '',
    lowestPrice: 0,
    highestPrice: 0,
  })

  const [orderState, setOrderState] = useState({
    id: '',
    options: [],
    total: 0,
  })

  const handleChangeCatagory = (index) => {
    let catagory = catagories[index].name

    let foodsByCatagory = foods.filter((food) => {
      return food.catagory === catagory
    })
    setfoodByCatagoryState({ foods: foodsByCatagory })
  }

  const totalPrice = () => {
    let price = 0
    let len = orders.length
    for (let i = 0; i < len; i++) {
      price += Math.floor(orders[i].total * 100)
    }
    price = price / 100

    return numberToMoney(price)
  }

  const handleOrderChange = (id) => {
    let food = foodsById[id]
    let order = {
      id: id,
      name: food.name,
      options: food.options.map(() => {
        return 0
      }),
      total: food.lowestPrice,
    }
    setFoodState({ ...food })
    setOrderState({ ...order })
  }

  const handleOrderChoiceChange = (event, index) => {
    console.log(orders)
    let order = orderState
    let food = foodState
    let orderOptions = order.options.map((option) => {
      return option
    })
    orderOptions[index] = parseInt(event.target.value)
    let total = 0
    food.options.forEach((option, i) => {
      total += option.choices[orderOptions[i]].price
    })
    order.total = total
    order.options = orderOptions
    setOrderState({ ...order })
  }

  const renderLowestHighestPrice = (lowest, highest) => {
    if (lowest === highest) {
      return <Typography>${numberToMoney(lowest)}</Typography>
    } else {
      return (
        <Typography>
          ${numberToMoney(lowest)}~${numberToMoney(highest)}
        </Typography>
      )
    }
  }

  const renderOrderOptions = (option, index) => {
    if (option.choices.length < 2) {
      return
    }
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">{option.name}</FormLabel>
        <RadioGroup
          aria-label={option.name}
          name={option.name}
          value={orderState.options[index]}
          onChange={(event) => handleOrderChoiceChange(event, index)}
        >
          {option.choices.map((choice, i) => (
            <FormControlLabel
              value={i}
              control={<Radio />}
              label={`${choice.name} + $${numberToMoney(choice.price)}`}
            />
          ))}
        </RadioGroup>
      </FormControl>
    )
  }

  return (
    <>
      <Grid container>
        <Grid item xs={9}>
          <Card>
            <CardContent>
              <Typography>Image:{foodState.image}</Typography>
              <Typography>Name:{foodState.name}</Typography>
              <Typography>Catagory:{foodState.catagory}</Typography>
              <Typography>Description:</Typography>
              <Typography>{foodState.description}</Typography>
              <Typography>Total:${numberToMoney(orderState.total)}</Typography>
              {foodState.options.map((option, i) => (
                <>{renderOrderOptions(option, i)}</>
              ))}
            </CardContent>
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => {
                handleAddOrder(orderState)
                setOrderState({ ...orderState })
              }}
            >
              Add To Cart
            </Button>
          </Card>
          <Card>
            <CardContent>
              {catagories.map((catagory, i) => (
                <Button onClick={() => handleChangeCatagory(i)}>
                  {catagory.name}
                </Button>
              ))}
            </CardContent>
          </Card>
          {foodByCatagoryState.foods.map((food, i) => (
            <Card className={classes.card}>
              <CardContent>
                <Typography>{food.name}</Typography>
                {renderLowestHighestPrice(food.lowestPrice, food.highestPrice)}
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={() => handleOrderChange(food._id)}
                >
                  Select
                </Button>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={3}>
          {orders.map((order, i) => (
            <Card>
              <CardContent>
                <Typography>{order.id}</Typography>
                <Typography>{order.name}</Typography>
                <Typography>${numberToMoney(order.total)}</Typography>
                {foodsById[order.id].options.map((option, i) => {
                  if (option.choices.length < 2) {
                    return <></>
                  }
                  return (
                    <Typography>{`${option.name}: ${
                      option.choices[order.options[i]].name
                    } + $${numberToMoney(
                      option.choices[order.options[i]].price,
                    )}`}</Typography>
                  )
                })}
                <Button
                  size="small"
                  color="secondary"
                  variant="contained"
                  onClick={() => handleDeleteOrders(i)}
                >
                  Remove Order
                </Button>
              </CardContent>
            </Card>
          ))}
          <Typography>Total:${totalPrice()}</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Menu
