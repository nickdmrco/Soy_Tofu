// import 'fontsource-roboto'
import { makeStyles } from '@material-ui/core/styles'
import { Parallax } from 'react-parallax'
import Typography from '@material-ui/core/Typography'
import top from './img/bibimbap1.jpg'
import bottom from './img/bibimbap2.jpg'

const useStyles = makeStyles((theme) => ({
  body: {
    fontFamily: 'Roboto'
  },
  typography: {
    marginTop: '3rem',
    marginBottom: '3rem',
  },
  center: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '3rem',
    fontSize: '100%',
    lineHeight: '200%'
  }
}))

const About = () => {
    const classes = useStyles()
  return (
    <div className={classes.body}>
      <Parallax bgImage={top} strength={400}>
        <div style={{ height: 500 }}>
          <div></div>
        </div>
      </Parallax>
      <Typography className={classes.typography}  variant="h3" align="center">
        About Us
      </Typography>
      <p className={classes.center}>
        Soy Tofu specializes in Korean tofu stew and Korean BBQ. We use only the freshest and highest quality ingredients in our dishes, as well as preparing them daily to guarantee the best experience. Our side dishes (banchan) are always changing as we try our best to use ingredients that are in season. We treat our food as an art, and you will experience this first hand when you come through our doors. We humbly welcome you as our guests and await your next visit to our restaurant!
      </p>
      <Parallax bgImage={bottom} strength={400}>
        <div style={{ height: 500 }}>
          <div></div>
        </div>
      </Parallax>
    </div>
  )
}


export default About

