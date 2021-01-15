import { createContext } from 'react'

const CartContext = createContext({
  foods: [],
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
