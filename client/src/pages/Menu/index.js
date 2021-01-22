import { useContext } from 'react'
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
 control: {
  padding: theme.spacing(2),
 },
 cart: {
  display: 'block',
  [theme.breakpoints.down('xs')]: {
   display: 'none',
  },
 },
}))

const Menu = () => {
 const classes = useStyles()
 const { catagory, handleChangeCatagory } = useContext(CartContext)
 const { width } = WindowSize()

 const renderMenu = () => {
  let menuCol = 8
  let cartCol = 4
  if (width < 600) {
   menuCol = 12
   cartCol = 0
  }

  return (
   <>
   <Navbar/>
   <Grid container className={classes.root} spacing={2}>
    <Grid item xs={menuCol}>
     <MenuNav
      catagory={catagory.name}
      click={() => handleChangeCatagory(-1)}
     />
     <MenuGrid />
    </Grid>
    <Grid className={classes.cart} item xs={cartCol}>
     <OrderList />
    </Grid>
   </Grid>
   <Footer/>
   </>
  )
 }

 return <div>{renderMenu()}</div>
}

export default Menu