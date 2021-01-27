import { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CartContext from '../../utils/CartContext'
import MenuGrid from '../../components/MenuGrid'
import MenuNav from '../../components/MenuNav'
import { Grid } from '@material-ui/core'
import OrderList from '../../components/OrderList'
import WindowSize from '../../hooks/WindowSize'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cart: {
    display: 'block',
  },
}))

const Menu = () => {
  const classes = useStyles()
  const { catagory, handleChangeCatagory } = useContext(CartContext)
  const { width } = WindowSize()
  const [menuState, setMenuState] = useState({
    showCart: false,
    showCartButton: false,
  })

  const renderMenu = () => {
    let menuCol = 8
    let cartCol = 4
    if (width < 600) {
      menuCol = 12
      cartCol = 12
      if (!menuState.showCartButton) {
        setMenuState({ ...menuState, showCartButton: true })
      }
    } else {
      if (menuState.showCartButton) {
        setMenuState({ ...menuState, showCartButton: false })
      }
    }

    const handleShowCart = () => {
      if (menuState.showCart) {
        setMenuState({ ...menuState, showCart: false })
      } else {
        setMenuState({ ...menuState, showCart: true })
      }
    }

    return (
      <>
        <Navbar />
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={menuCol}>
            <MenuNav
              catagory={catagory.name}
              showCart={menuState.showCart}
              showCartButton={menuState.showCartButton}
              handleShowCart={handleShowCart}
              click={() => handleChangeCatagory(-1)}
            />
            {!menuState.showCart || width > 599 ? <MenuGrid /> : ''}
          </Grid>
          <Grid className={classes.cart} item xs={cartCol}>
            {menuState.showCart || width > 599 ? <OrderList /> : ''}
          </Grid>
        </Grid>
        <Footer />
      </>
    )
  }

  return <div>{renderMenu()}</div>
}

export default Menu
