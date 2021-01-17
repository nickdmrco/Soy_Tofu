import { useState, useEffect } from 'react'
import CartContext from './utils/CartContext'
import Menu from './pages/Menu'
import FoodAPI from './utils/FoodAPI'
import CatagoryAPI from './utils/CatagoryAPI'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const { getFoods } = FoodAPI
const { getCatagories } = CatagoryAPI

const App = () => {
  const [cartState, setCartState] = useState({
    catagories: [],
    foods: [],
    foodsById: {},
    orders: [],
  })

  cartState.handleAddOrder = (order) => {
    let orders = cartState.orders
    orders.push(order)
    setCartState({
      ...cartState,
      orders: orders,
    })
  }

  cartState.handleUpdateOrders = (index, order) => {
    let updatedOrders = cartState.orders
    updatedOrders[index] = order
    setCartState({ ...cartState, orders: updatedOrders })
  }

  cartState.handleDeleteOrders = (index) => {
    let updatedOrders = cartState.orders
    updatedOrders.splice(index, 1)
    setCartState({ ...cartState, orders: updatedOrders })
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
