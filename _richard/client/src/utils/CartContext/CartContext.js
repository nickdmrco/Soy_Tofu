import { createContext } from 'react'

const CartContext = createContext({
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
  handleChangeCatagory: () => {},
  handleSelectFood: () => {},
  handleSelectOrder: () => {},
  handleStopEditOrder: () => {},
  handleOrderChoiceChange: () => {},
  handleAddOrder: () => {},
  handleUpdateOrder: () => {},
  handleDeleteOrder: () => {},
  handleEmptyOrders: () => {},
  handleCreateOrders: () => {},
})

export default CartContext
