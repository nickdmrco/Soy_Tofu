import { useContext } from 'react'
import CartContext from '../../utils/CartContext'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'

const Menu = () => {
  const { foods } = useContext(CartContext)

  return (
    <>
      {foods.map((food, i) => (
        <>
          <Typography>{food.name}</Typography>
          <Button value={i}>{i}</Button>
        </>
      ))}
    </>
  )
}

export default Menu
