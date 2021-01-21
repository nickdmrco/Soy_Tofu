import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'

const CatagoryCard = (props) => {
  const { name, image, title, click } = props
  return (
    <Card>
      <CardActionArea onClick={() => click()}>
        <CardMedia image={image} title={title} />
        <CardContent>
          <Typography>{name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CatagoryCard
