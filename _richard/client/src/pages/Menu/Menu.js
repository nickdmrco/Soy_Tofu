import { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CartContext from '../../utils/CartContext'
import Button from '@material-ui/core/Button'
import {
  Card,
  CardActionArea,
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
  col: {
    height: '100%',
  },
  orderMenu: {
    height: '40%',
    maxHeight: '40%',
    overflow: 'auto',
  },

  cart: {
    height: '80%',
    maxHeight: '80%',
    overflow: 'auto',
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
    handleCreateOrders,
  } = useContext(CartContext)

  const [foodByCatagoryState, setfoodByCatagoryState] = useState({
    foods: [],
    isDefaultLoaded: false,
  })

  const emptyFood = {
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
  }

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
    foodId: '',
    options: [
      {
        name: '',
        chioiceName: '',
        value: 0,
      },
    ],
    total: 0,
  })

  const [editState, setEditState] = useState({
    index: '',
  })

  const totalPrice = () => {
    let price = 0
    let len = orders.length
    for (let i = 0; i < len; i++) {
      price += Math.floor(orders[i].total * 100)
    }
    price = price / 100

    return numberToMoney(price)
  }

  const handleChangeCatagory = (index) => {
    let catagory = catagories[index].name

    let foodsByCatagory = foods.filter((food) => {
      return food.catagory === catagory
    })
    setfoodByCatagoryState({ foods: foodsByCatagory, isDefaultLoaded: true })
  }

  const handleOrderChange = (foodId) => {
    let food = foodsById[foodId]
    let order = {
      foodId: foodId,
      name: food.name,
      options: food.options.map(() => {
        return 0
      }),
      total: food.lowestPrice,
    }
    setFoodState({ ...food })
    setEditState({ index: -1 })
    setOrderState({ ...order })
  }

  const handleEditOrder = (index) => {
    let order = JSON.parse(JSON.stringify(orders[index]))
    let food = foodsById[order.foodId]

    setFoodState({ ...food })
    setOrderState({ ...order })
    setEditState({ index: index })
  }

  const handleOrderChoiceChange = (event, index) => {
    console.log(orders)
    let order = orderState
    let food = foodState
    let orderOptions = order.options
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

  const renderFoodOptions = (option, index) => {
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

  const renderAddOrderButton = (index) => {
    if (index !== '') {
      let btnText = index < 0 ? 'Add to Cart' : `Edit Order #${index + 1}`
      let onClick =
        index < 0
          ? () => handleAddOrder(orderState)
          : () => handleUpdateOrders(index, orderState)
      return (
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() => onClick()}
        >
          {btnText}
        </Button>
      )
    }
  }

  const renderFoodMenu = () => {
    if (!foodByCatagoryState.isDefaultLoaded) {
      if (catagories.length < 1) {
        return
      }
      handleChangeCatagory(0)
    }

    return (
      <>
        {foodByCatagoryState.foods.map((food, i) => (
          <Card>
            <CardActionArea onClick={() => handleOrderChange(food._id)}>
              <CardContent>
                <Typography>{food.name}</Typography>
                {renderLowestHighestPrice(food.lowestPrice, food.highestPrice)}
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </>
    )
  }
  const callback = (cb) => {
    return cb()
  }

  return (
    <div className={classes.col}>
      <Grid className={classes.col} container>
        <Grid item xs={9}>
          <Card className={classes.orderMenu}>
            <CardContent>
              <Typography>Image:{foodState.image}</Typography>
              <Typography>Name:{foodState.name}</Typography>
              <Typography>Catagory:{foodState.catagory}</Typography>
              <Typography>Description:</Typography>
              <Typography>{foodState.description}</Typography>
              <Typography>Total:${numberToMoney(orderState.total)}</Typography>
              {foodState.options.map((option, i) => (
                <>{renderFoodOptions(option, i)}</>
              ))}
            </CardContent>
          </Card>
          {renderAddOrderButton(editState.index)}
          <Card>
            <CardContent>
              {catagories.map((catagory, i) => (
                <Button onClick={() => handleChangeCatagory(i)}>
                  {catagory.name}
                </Button>
              ))}
            </CardContent>
          </Card>
          {renderFoodMenu()}
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.cart}>
            {orders.map((order, i) => (
              <Card>
                <CardActionArea onClick={() => handleEditOrder(i)}>
                  <CardContent>
                    <Typography>Order# {i + 1}</Typography>
                    <Typography>{order.name}</Typography>
                    <Typography>${numberToMoney(order.total)}</Typography>
                    {foodsById[order.foodId].options.map((option, i) => {
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
                      onClick={(event) => {
                        event.stopPropagation()
                        if (editState.index !== i) {
                          setEditState({ index: editState.index - 1 })
                        } else {
                          setEditState({ index: -1 })
                        }
                        handleDeleteOrders(i)
                      }}
                    >
                      Remove Order
                    </Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Card>
          <Typography>Total:${totalPrice()}</Typography>
          <Button
            size="small"
            color="secondary"
            variant="contained"
            onClick={() => handleCreateOrders()}
          >
            Checkout
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Menu
