import { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Button, Toolbar } from '@material-ui/core'
import CartContext from '../../utils/CartContext'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 'calc(66.666667% - 5px)',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    position: 'fixed',
    zIndex: '1',
  },

  phantom: {
    opacity: '0.000001',
  },
  navColor: {
    backgroundColor: 'grey',
  },
}))

const MenuNav = (props) => {
  const { showCart, showCartButton, handleShowCart } = props
  const {
    catagory,
    orders,
    navFood,
    handleStopEditOrder,
    handleChangeCatagory,
    handleSelectFood,
  } = useContext(CartContext)
  const classes = useStyles()

  const renderCatagory = () => {
    if (catagory !== '') {
      return (
        <Button color="inherit" onClick={() => handleSelectFood(-1)}>
          {catagory.name}
        </Button>
      )
    }
  }

  const renderFood = () => {
    if (navFood !== '') {
      return (
        <Button color="inherit" onClick={() => handleStopEditOrder()}>
          {navFood}
        </Button>
      )
    }
  }

  const renderCart = () => {
    if (showCartButton) {
      return (
        <Button color="inherit" onClick={() => handleShowCart()}>
          {showCart ? 'Menu' : `Cart x${orders.length}`}
        </Button>
      )
    }
  }

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.navColor}>
          <Toolbar>
            <Button color="inherit" onClick={() => handleChangeCatagory(-1)}>
              Category
            </Button>
            {renderCatagory()}
            {renderFood()}
            {renderCart()}
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.phantom}>
        <AppBar position="static" className={classes.navColor}>
          <Toolbar></Toolbar>
        </AppBar>
      </div>
    </>
  )
}

export default MenuNav
