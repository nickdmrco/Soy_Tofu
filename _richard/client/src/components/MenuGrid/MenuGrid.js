import { useContext, useState } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CartContext from '../../utils/CartContext'
import FoodCard from './FoodCard'
import CatagoryCard from './CatagoryCard'
import OrderForm from './OrderForm'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}))

const MenuGrid = () => {
  const [spacing, setSpacing] = useState(2)
  const classes = useStyles()
  const {
    food,
    navFood,
    foodsByCatagory,
    catagory,
    catagories,
    orderIndex,
    editFood,
    handleSelectFood,
    handleChangeCatagory,
  } = useContext(CartContext)

  const renderMenu = () => {
    if (editFood !== '' || food !== '') {
      return <OrderForm />
    }
    if (catagory === '') {
      return catagories.map((cata, i) => {
        return (
          <>
            <Grid key={i} item>
              <CatagoryCard
                name={cata.name}
                image={cata.iamge}
                title={cata.name}
                click={() => handleChangeCatagory(i)}
              />
            </Grid>
          </>
        )
      })
    }
    if (navFood === '') {
      return foodsByCatagory.map((food, i) => {
        return (
          <Grid key={i} item>
            <FoodCard
              name={food.name}
              image={food.iamge}
              title={food.name}
              lowest={food.lowestPrice}
              highest={food.highestPrice}
              click={() => handleSelectFood(food._id)}
            />
          </Grid>
        )
      })
    }
    return <OrderForm />
  }
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {renderMenu()}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MenuGrid
