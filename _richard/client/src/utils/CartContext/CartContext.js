import { createContext } from 'react'

const CartContext = createContext({
  foods: [],
  order: {},
  orders: [],
  handleSelectOrder: () => {},
  handleOrderChange: () => {},
  handleAddOrder: () => {},
  handleUpdateOrder: () => {},
  handleDeleteOrder: () => {},
  handleEmptyOrders: () => {},
})

export default CartContext
