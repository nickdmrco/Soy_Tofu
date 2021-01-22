import { makeStyles } from '@material-ui/core/styles'
import {
 Card,
 CardActionArea,
 CardContent,
 CardMedia,
 Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
 card: {
  backgroundColor: 'grey',
  color: 'white'
 }
}))

const CatagoryCard = (props) => {
 const { name, image, title, click } = props

 const classes = useStyles()

 return (
  <Card className={classes.card}>
   <CardActionArea onClick={() => click()}>
    <CardMedia image={image} title={title} />
    <CardContent >
     <Typography >{name}</Typography>
    </CardContent>
   </CardActionArea>
  </Card>
 )
}

export default CatagoryCard