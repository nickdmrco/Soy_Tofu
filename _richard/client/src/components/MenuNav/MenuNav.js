import { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Button, Toolbar } from '@material-ui/core'
import CartContext from '../../utils/CartContext'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

const MenuNav = () => {
  const {
    food,
    catagory,
    navFood,
    editFood,
    handleStopEditOrder,
    handleChangeCatagory,
    handleSelectFood,
  } = useContext(CartContext)
  const classes = useStyles()
  const renderCatagory = () => {
    if (catagory !== '') {
      return (
        <Button color="inherit" onClick={() => handleChangeCatagory(-1)}>
          {catagory.name}
        </Button>
      )
    }
  }
  const renderFood = () => {
    if (navFood !== '') {
      return (
        <Button color="inherit" onClick={() => handleSelectFood(-1)}>
          {navFood}
        </Button>
      )
    }
  }

  const renderReturn = () => {
    if (editFood !== '') {
      return (
        <Button color="inherit" onClick={() => handleStopEditOrder()}>
          Return
        </Button>
      )
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {renderCatagory()}
          {renderFood()}
          {renderReturn()}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default MenuNav
