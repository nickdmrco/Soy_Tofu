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

  cartState.handleSelectOrder = (index) => {
    setCartState({
      ...cartState,
      order: cartState.foods[index],
    })
  }

  cartState.handleOrderChange = (event) => {
    let changedOrder = cartState.order
    changedOrder[event.target.name] = event.target.value
    setCartState({ ...cartState, order: changedOrder })
  }

  cartState.handleAddOrder = () => {
    let orderList = cartState.orders
    orderList.push(cartState.order)
    console.log(orderList)
    setCartState({
      ...cartState,
      orders: orderList,
    })
  }

  cartState.handleUpdateOrder = (event) => {
    let updatedOrders = cartState.orders
    updatedOrders[event.target.value] = cartState.order
    setCartState({ ...cartState, orders: updatedOrders })
  }

  cartState.handleDeleteOrder = (index) => {
    let updatedOrders = cartState.orders
    updatedOrders.splice(index, 1)
    setCartState({ ...cartState, orders: updatedOrders })
  }

  cartState.handleEmptyOrders = () => {
    setCartState({ ...cartState, orders: [] })
  }

  useEffect(() => {
    getFood()
      .then(({ data: food }) => {
        console.log(food)
        setCartState({ ...cartState, foods: food })
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
