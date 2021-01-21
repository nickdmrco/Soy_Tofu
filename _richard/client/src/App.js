import { useState, useEffect } from 'react'
import CartContext from './utils/CartContext'
import FoodAPI from './utils/FoodAPI'
import CatagoryAPI from './utils/CatagoryAPI'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import OrdersAPI from './utils/OrdersAPI'
import Menu from './pages/Menu'
import Landing from './pages/Landing'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PaymentForm from './components/PaymentForm'
import ReviewForm from './components/ReviewForm'
import Privacy from './pages/PrivacyP'
import Navbar from './components/Navbar'

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

  cartState.handleEditOrderAmountChange = (amount) => {
    let order = cartState.editOrder
    order.amount = parseInt(amount)
    order.total = totalOrderPrice(order)
    setCartState({ ...cartState, editOrder: order })
  }

  cartState.handleOrderAmountChange = (amount) => {
    let order = cartState.order
    order.amount = parseInt(amount)
    order.total = totalOrderPrice(order)
    setCartState({ ...cartState, order: order })
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
    window.localStorage.setItem('soy_tofu_orders', JSON.stringify(orders))
    setCartState({
      ...cartState,
      orders: orders,
    })
  }

  cartState.handleDeleteOrder = (index) => {
    let orders = cartState.orders
    let editFood = cartState.editFood
    let orderIndex = ''
    if (cartState.orderIndex >= index) {
      orderIndex = cartState.orderIndex - 1
      if (orderIndex < 0) {
        editFood = ''
        orderIndex = ''
      }
    }
    orders.splice(index, 1)
    window.localStorage.setItem('soy_tofu_orders', JSON.stringify(orders))
    setCartState({
      ...cartState,
      orders: orders,
      editFood: editFood,
      orderIndex: orderIndex,
    })
  }

  cartState.handleUpdateOrder = () => {
    let orders = cartState.orders
    orders[cartState.orderIndex] = JSON.parse(
      JSON.stringify(cartState.editOrder),
    )
    window.localStorage.setItem('soy_tofu_orders', JSON.stringify(orders))
    setCartState({ ...cartState, orders: orders })
  }

  cartState.handleCreateOrders = () => {
    createOrders(cartState.orders)
  }

  cartState.handleEmptyOrders = () => {
    window.localStorage.setItem('soy_tofu_orders', '[]')
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
          let storedOrders = JSON.parse(window.localStorage.getItem('soy_tofu_orders'))
          if (storedOrders === null) {
            storedOrders = []
          }
          setCartState({
            ...cartState,
            foods: foods,
            foodsById: foodsObj,
            orders: storedOrders,
            catagories: catagories,
          })
        })
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <Router>
      <CartContext.Provider value={cartState}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          {/* HOME PAGE */}

          <Route path="/home">
            <Home />
          </Route>

          {/* ABOUT US  */}

          <Route path="/about">
            <About />
          </Route>

          {/* CONTACT US */}

          <Route path="/contact">
            <Contact />
          </Route>

          {/* PAYMENT */}

          <Route path="/payment">
            <PaymentForm />
          </Route>

          {/* REVIEW */}

          <Route path="/review">
            <ReviewForm />
          </Route>

          {/* MENU */}

          <Route path="/menu">
            <Menu />
          </Route>

          {/* PRIVACY POLICY */}

          <Route path="/privacy">
            <Privacy />
          </Route>
        </Switch>
      </CartContext.Provider>
    </Router>
  )
}

export default App
