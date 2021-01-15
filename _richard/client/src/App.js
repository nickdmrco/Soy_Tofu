import { useState, useEffect } from 'react'
import CartContext from './utils/CartContext'
import Menu from './pages/Menu'
import FoodAPI from './utils/FoodAPI'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const { getFood } = FoodAPI

const App = () => {
  const [cartState, setCartState] = useState({
    foods: [],
    order: {},
    orders: [],
  })

  cartState.handleSelectOrder = (event) => {
    setCartState({ ...cartState, order: cartState.foods[event.target.value] })
  }

  cartState.handleOrderChange = (event) => {
    let changedOrder = cartState.order
    changedOrder[event.target.name] = event.target.value
    setCartState({ ...cartState, order: changedOrder })
  }

  cartState.handleAddOrder = (event) => {
    setCartState({
      ...cartState,
      orders: cartState.orders.push(cartState.order),
    })
  }

  cartState.handleUpdateOrder = (event) => {
    let updatedOrders = cartState.orders
    updatedOrders[event.target.value] = cartState.order
    setCartState({ ...cartState, orders: updatedOrders })
  }

  cartState.handleDeleteOrder = (event) => {
    let updatedOrders = cartState.orders
    updatedOrders = updatedOrders.splice(event.target.value, 1)
    setCartState({ ...cartState, orders: updatedOrders })
  }

  cartState.handleEmptyOrders = () => {
    setCartState({ ...cartState, orders: [] })
  }

  useEffect(() => {
    getFood()
      .then(({ data: foods }) => {
        setCartState({ ...cartState, foods })
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
