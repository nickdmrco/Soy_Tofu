import { createContext } from 'react'

const CartContext = createContext({
  food: '',
  foods: [],
  handleInputChange: () => { },
  handleAddFood: () => { },
  handleUpdateFood: () => { },
  handleDeleteFood: () => { }
})

export default CartContext
