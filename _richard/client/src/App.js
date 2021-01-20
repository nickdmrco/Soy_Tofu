import { useState, useEffect } from 'react'
import CartContext from './utils/CartContext'
import Menu from './pages/Menu'
import FoodAPI from './utils/FoodAPI'
import CatagoryAPI from './utils/CatagoryAPI'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import OrdersAPI from './utils/OrdersAPI'

const { getFoods } = FoodAPI
const { getCatagories } = CatagoryAPI
const { createOrders } = OrdersAPI

const totalOrderPrice = (order) => {
  let price = 0
  order.options.forEach((option) => {
    price += option.price * 100
  })
  price *= order.amount
  price /= 100
  return price
}

const App = () => {
  const [cartState, setCartState] = useState({
    catagory: '',
    catagories: [],
    food: '',
    foods: [],
    foodsById: {},
    foodsByCatagory: [],
    order: {},
    orders: [],
    orderIndex: '',
    editOrder: '',
    editFood: '',
    navFood: '',
  })

  cartState.handleChangeCatagory = (index) => {
    if (index > -1) {
      let catagory = cartState.catagories[index]
      let foodsByCatagory = cartState.foods.filter((food) => {
        return food.catagory === catagory.name
      })
      setCartState({
        ...cartState,
        catagory: catagory,
        foodsByCatagory: foodsByCatagory,
        food: '',
        editFood: '',
      })
    } else {
      setCartState({
        ...cartState,
        catagory: '',
        navFood: '',
        food: '',
        editFood: '',
        foodsByCatagory: [],
      })
    }
  }

  cartState.handleSelectFood = (id) => {
    if (id < 0) {
      setCartState({
        ...cartState,
        food: '',
        navFood: '',
        editFood: '',
        order: '',
      })
      return
    }
    let food = cartState.foodsById[id]
    let order = {
      foodId: food._id,
      foodName: food.name,
      image: food.image,
      options: food.options.map((option) => {
        return {
          name: option.name,
          choiceName: option.choices[0].name,
          price: option.choices[0].price,
          value: 0,
        }
      }),
      amount: 1,
      total: food.lowestPrice,
    }
    setCartState({
      ...cartState,
      food: food,
      editFood: '',
      navFood: food.name,
      order: order,
    })
  }

  cartState.handleSelectOrder = (index) => {
    let order = JSON.parse(JSON.stringify(cartState.orders[index]))
    setCartState({
      ...cartState,
      editFood: cartState.foodsById[order.foodId],
      editOrder: order,
      orderIndex: index,
    })
  }

  cartState.handleStopEditOrder = () => {
    setCartState({
      ...cartState,
      editFood: '',
    })
  }

  cartState.handleOrderChoiceChange = (event, index) => {
    let value = parseInt(event.target.value)
    if (cartState.editFood === '') {
      let choice = cartState.food.options[index].choices[value]
      let order = cartState.order
      order.options[index].value = value
      order.options[index].price = choice.price
      order.options[index].choiceName = choice.name
      order.total = totalOrderPrice(order)
      setCartState({ ...cartState, order: order })
      return
    }
    let choice = cartState.editFood.options[index].choices[value]
    let order = cartState.editOrder
    order.options[index].value = value
    order.options[index].price = choice.price
    order.options[index].choiceName = choice.name
    order.total = totalOrderPrice(order)
    setCartState({ ...cartState, editOrder: order })
  }

  cartState.handleAddOrder = () => {
    let order = JSON.parse(JSON.stringify(cartState.order))
    let orders = cartState.orders
    orders.push(order)
    setCartState({
      ...cartState,
      orders: orders,
    })
  }

  cartState.handleUpdateOrder = () => {
    let orders = cartState.orders
    orders[cartState.orderIndex] = JSON.parse(
      JSON.stringify(cartState.editOrder),
    )
    setCartState({ ...cartState, orders: orders })
  }

  cartState.handleCreateOrders = () => {
    createOrders(cartState.orders)
  }

  cartState.handleDeleteOrders = (index) => {
    let orders = cartState.orders
    orders.splice(index, 1)
    setCartState({ ...cartState, orders: orders })
  }

  cartState.handleEmptyOrders = () => {
    setCartState({ ...cartState, orders: [] })
  }

  useEffect(() => {
    getCatagories()
      .then(({ data: catagories }) => {
        getFoods().then(({ data: foods }) => {
          let foodsObj = {}
          foods.forEach((food) => {
            foodsObj[food._id] = food
          })
          setCartState({
            ...cartState,
            foods: foods,
            foodsById: foodsObj,
            catagories: catagories,
          })
        })
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <Router>
      <CartContext.Provider value={cartState}>
        <Switch>
          <Route exact path="/">
            <Menu />
          </Route>
          <Route path="/saved"></Route>
        </Switch>
      </CartContext.Provider>
    </Router>
  )
}

export default App
