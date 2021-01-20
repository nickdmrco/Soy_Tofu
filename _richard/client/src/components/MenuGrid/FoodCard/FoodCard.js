import { useContext, useState } from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import numberToMoney from '../../../utils/lib/numberToMoney'

const FoodCard = (props) => {
  const { name, image, title, lowest, highest, click } = props
  const renderLowestHighestPrice = () => {
    if (lowest === highest) {
      return <Typography>${numberToMoney(lowest)}</Typography>
    } else {
      return (
        <Typography>
          ${numberToMoney(lowest)}~${numberToMoney(highest)}
        </Typography>
      )
    }
  }
  return (
    <Card>
      <CardActionArea onClick={() => click()}>
        <CardMedia image={image} title={title} />
        <CardContent>
          <Typography>{name}</Typography>
          {renderLowestHighestPrice()}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default FoodCard
