import { useContext } from 'react'
import numberToMoney from '../../../utils/lib/numberToMoney'
import CartContext from '../../../utils/CartContext'
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
} from '@material-ui/core'

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
  } = useContext(CartContext)

  const renderForm = () => {
    if (editFood === '') {
      return (
        <Card>
          <CardHeader title={food.name} subtitle={food.catagory} />
          <CardMedia />
          <Button
            size="small"
            color="primary"
            variant="contained"
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
        <CardMedia />
        <Button
          size="small"
          color="primary"
          variant="contained"
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
              if(choice.price > 0){
                price = ` + $${numberToMoney(choice.price)}`
              }
              return (
                <FormControlLabel
                  value={j}
                  control={<Radio style={{ width: 'auto' }} />}
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
