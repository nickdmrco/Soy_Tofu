import { useContext } from 'react'
import CartContext from '../../../utils/CartContext'
import numberToMoney from '../../../utils/lib/numberToMoney'
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    cardBack: {
        color: 0xFD746C,
        backgroundColor: 'rgb(245, 242, 230)',
},
button: {
    width: '100%',
 },
}))

const OrderCard = (props) => {
    const { index } = props
    const {
        orders,
        foodsById,
        handleSelectOrder,
        handleDeleteOrder,
    } = useContext(CartContext)

    const classes = useStyles()

    const renderChoices = () => {
        return orders[index].options.map((option, i) => {
            let food = foodsById[orders[index].foodId]
            if (food.options[i].choices.length < 2) {
                return <></>
            }
            let price = ''
            if (option.price > 0) {
                price = ` + $${numberToMoney(option.price)}`
            }
            return (
                <Typography>{`${option.name}: ${option.choiceName}${price}`}</Typography>
            )
        })
    }
    return (
        <Card className={classes.cardBack}>
            <CardActionArea onClick={() => handleSelectOrder(index)}>
                <CardContent>
                    <Typography>{`Order #${index + 1}`}</Typography>
                    <Typography>{orders[index].foodName}</Typography>
                    <Typography>{`Total: $${numberToMoney(
                        orders[index].total,
                    )}`}</Typography>
                    <Typography>{`Quantity: ${orders[index].amount}`}</Typography>
                    {renderChoices()}
                    <Button
                        variant="contained"
                        onClick={(event) => {
                            event.stopPropagation()
                            handleDeleteOrder(index)
                        }}
                        className={classes.button}
                    >
                        Remove
          </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default OrderCard