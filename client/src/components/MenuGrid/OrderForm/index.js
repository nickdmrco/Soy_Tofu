import { useContext } from 'react'
import numberToMoney from '../../../utils/lib/numberToMoney'
import CartContext from '../../../utils/CartContext'
import { makeStyles } from '@material-ui/core/styles'
import {
 Button,
 Card,
 CardContent,
 CardHeader,
 CardMedia,
 FormControl,
 FormControlLabel,
 FormLabel,
 Radio,
 RadioGroup,
 TextField,
 Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
 card: {
//   backgroundColor: 'rgb(245, 242, 230)',
 },
 btnColor: {
  backgroundColor: '#19647E',
  color: '#ffffff',
 },
}))

const OrderForm = () => {
 const {
  food,
  order,
  orderIndex,
  editOrder,
  editFood,
  handleAddOrder,
  handleUpdateOrder,
  handleOrderChoiceChange,
  handleEditOrderAmountChange,
  handleOrderAmountChange,
 } = useContext(CartContext)

 const isEnabled = () => {
  if (editFood !== '') {
   if (editOrder.amount > 0) {
    return true
   }
  } else {
   if (order.amount > 0) {
    return true
   }
  }
  return false
 }

 const btnEnabled = isEnabled()

 const amountIncrement = () => {
  if (editFood !== '') {
   if (editOrder.amount < 0xffffff) {
    handleEditOrderAmountChange(editOrder.amount + 1)
   }
  } else {
   if (order.amount < 0xffffff) {
    handleOrderAmountChange(order.amount + 1)
   }
  }
 }

 const amountDecrement = () => {
  if (editFood !== '') {
   if (editOrder.amount > 0) {
    handleEditOrderAmountChange(editOrder.amount - 1)
   }
  } else {
   if (order.amount > 0) {
    handleOrderAmountChange(order.amount - 1)
   }
  }
 }

 const handleAmountChange = (event, option, choice) => {
  event.target.value = parseInt(event.target.value.replace(/[^0-9]/g, ''))
  if (isNaN(event.target.value)) {
   event.target.value = 0
  }
  if (editFood !== '') {
   handleEditOrderAmountChange(event.target.value)
  } else {
   handleOrderAmountChange(event.target.value)
  }
 }

 const classes = useStyles()

 const renderForm = () => {
  if (editFood === '') {
   return (
    <Card className={classes.card}>
     <CardHeader title={food.name} subtitle={food.catagory} />
     <Typography>Total: ${numberToMoney(order.total)}</Typography>
     <CardMedia />
     <Button name="amount" onClick={() => amountDecrement()}>
      -
          </Button>
     <TextField
      name="amount"
      onChange={handleAmountChange}
      value={order.amount}
     ></TextField>
     <Button name="amount" onClick={() => amountIncrement()}>
      +
          </Button>
     <Button
      className={classes.btnColor}
      size="small"
      variant="contained"
      disabled={!btnEnabled}
      onClick={() => handleAddOrder()}
     >
      Add To Cart
          </Button>
     <CardContent>{renderChoices()}</CardContent>
    </Card>
   )
  }

  return (
   <Card>
    <CardHeader title={editFood.name} subtitle={editFood.catagory} />
    <Typography>Total: ${numberToMoney(editOrder.total)}</Typography>
    <CardMedia />
    <Button name="amount" onClick={(event) => amountDecrement(event)}>
     -
        </Button>
    <TextField
     name="amount"
     onChange={handleAmountChange}
     value={editOrder.amount}
    ></TextField>
    <Button name="amount" onClick={(event) => amountIncrement(event)}>
     +
        </Button>
    <Button
     className={classes.btnColor}
     size="small"
     variant="contained"
     disabled={!btnEnabled}
     onClick={() => handleUpdateOrder()}
    >
     {`Update Order#${orderIndex + 1}`}
    </Button>

    <CardContent>{renderChoices()}</CardContent>
   </Card>
  )
 }

 const renderChoices = () => {
  let formFood = editFood === '' ? food : editFood
  let formOrder = editFood === '' ? order : editOrder
  return formFood.options.map((option, i) => {
   if (option.choices.length < 2) {
    return <></>
   }
   return (
    <FormControl component="fieldset">
     <FormLabel component="legend">{option.name}</FormLabel>
     <RadioGroup
      aria-label={option.name}
      name={option.name}
      value={formOrder.options[i].value}
      onChange={(event) => handleOrderChoiceChange(event, i)}
      style={{ display: 'flex' }}
     >
      {option.choices.map((choice, j) => {
       let price = ''
       if (choice.price > 0) {
        price = ` + $${numberToMoney(choice.price)}`
       }
       return (
        <FormControlLabel
         value={j}
               control={<Radio style={{ width: 'auto', color: '#19647E' }} />}
         label={`${choice.name}${price}`}
        />
       )
      })}
     </RadioGroup>
    </FormControl>
   )
  })
 }
 return <form>{renderForm()}</form>
}

export default OrderForm