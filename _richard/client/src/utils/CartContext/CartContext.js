import { createContext } from 'react'

const CartContext = createContext({
  catagories: [],
  foods: [],
  foodsById: {},
  orders: [],
  handleCreateOrders: () => {},
  handleAddOrder: () => {},
  handleUpdateOrder: () => {},
  handleDeleteOrder: () => {},
  handleEmptyOrders: () => {},
})

export default CartContext
