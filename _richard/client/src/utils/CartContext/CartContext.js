import { createContext } from 'react'

const CartContext = createContext({
  catagories: [],
  foods: [],
  foodsById: {},
  orders: [],
  handleAddOrder: () => {},
  handleUpdateOrder: () => {},
  handleDeleteOrder: () => {},
  handleEmptyOrders: () => {},
})

export default CartContext
