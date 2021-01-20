import { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CartContext from '../../utils/CartContext'
import MenuGrid from '../../components/MenuGrid'
import MenuNav from '../../components/MenuNav'
import { Grid } from '@material-ui/core'
import OrderList from '../../components/OrderList'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}))

const Menu = () => {
  const classes = useStyles()
  const { catagory, handleChangeCatagory } = useContext(CartContext)
  return (
    <div>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={8}>
          <MenuNav
            catagory={catagory.name}
            click={() => handleChangeCatagory(-1)}
          />
          <MenuGrid />
        </Grid>
        <Grid item xs={4}>
          <OrderList />
        </Grid>
      </Grid>
    </div>
  )
}

export default Menu
