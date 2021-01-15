import { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../../utils/CartContext'
import FoodAPI from '../../../utils/FoodAPI'

const { getFood } = FoodAPI

const Menu = () => {
  const {
    food,
    foods,
    handleAddFood,
    handleInputChange,
    handleDeleteFood,
    handleUpdateFood,
  } = useContext(CartContext)
  return (
    <>
      <div></div>
    </>
  )
}

export default Menu
