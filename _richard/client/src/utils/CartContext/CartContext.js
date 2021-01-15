import { createContext } from 'react'

const CartContext = createContext({
  foods: [],
  displayedFoods: [],
  order: {},
  orders: [],
  catagory: '',
  catagories: [],
  handleChangeCatagory: () => {},
  handleSelectOrder: () => {},
  handleOrderChange: () => {},
  handleAddOrder: () => {},
  handleUpdateOrder: () => {},
  handleDeleteOrder: () => {},
  handleEmptyOrders: () => {},
})

export default CartContext
