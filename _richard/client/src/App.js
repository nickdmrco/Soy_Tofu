import { useState, useEffect } from 'react'
import CartContext from './utils/CartContext'
import Menu from './pages/Menu'
import FoodAPI from './utils/FoodAPI'
import CatagoryAPI from './utils/CatagoryAPI'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const { getFood } = FoodAPI
const { getCatagories } = CatagoryAPI

const App = () => {
  const [cartState, setCartState] = useState({
    foods: [],
    displayedFoods: [],
    order: {},
    orders: [],
    catagory: '',
    catagories: [],
  })

  cartState.handleCatagoryChange = (index) => {
    let catagory = cartState.catagories[index].name
    let displayedFoods = cartState.foods.filter((food) => {
      if (food.catagory === catagory) {
        return true
      }
      return false
    })
    setCartState({
      ...cartState,
      displayedFoods: displayedFoods,
      catagory: catagory,
    })
  }

  cartState.handleSelectOrder = (food) => {
    setCartState({
      ...cartState,
      order: food,
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
      .then(({ data: foods }) => {
        getCatagories().then(({ data: catagory }) => {
          let displayedFoods = foods.filter((food) => {
            return food.catagory === catagory[0]
          })
          setCartState({
            ...cartState,
            foods: foods,
            displayedFoods: displayedFoods,
            catagory: catagory[0].name,
            catagories: catagory,
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
