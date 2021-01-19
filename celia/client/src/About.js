// import 'fontsource-roboto'
import { makeStyles } from '@material-ui/core/styles'
import { Parallax } from 'react-parallax'
import Typography from '@material-ui/core/Typography'
import full from './img/bibimbap.jpg'


import top from './img/bibimbap1.jpg'
import bottom from './img/bibimbap2.jpg'

const useStyles = makeStyles((theme) => ({
  body: {
    fontFamily: 'Roboto'
  },
  typography: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  center: {
    marginLeft: '2%',
    marginRight: '2%',
    fontSize: '100%',
    lineHeight: '200%'
  },
  inside: {
    background: '#fff',
    top: '50%',
    left: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)'
  }
}))

const About = () => {
    const classes = useStyles()
  return (
    <div className={classes.body}>
      {/* desktop version */}
      <Parallax bgImage={full} strength={400}>
        <div style={{ height: 1150 }}>
          <div className={classes.inside}>
            <Typography className={classes.typography} variant="h3" align="center">
              About Us
      </Typography>
            <p className={classes.center}>
              Soy Tofu specializes in Korean tofu stew and Korean BBQ. We use only the freshest and highest quality ingredients in our dishes, as well as preparing them daily to guarantee the best experience. Our side dishes (banchan) are always changing as we try our best to use ingredients that are in season. We treat our food as an art, and you will experience this first hand when you come through our doors. We humbly welcome you as our guests and await your next visit to our restaurant!
      </p>
          </div>
        </div>
      </Parallax>

{/* need to change this to make a mobile version */}
      {/* <Parallax bgImage={top} strength={400}>
        <div style={{ height: 500 }}>
          <div></div>
        </div>
      </Parallax>
      <Typography className={classes.typography} variant="h3" align="center">
        About Us
      </Typography>
      <p className={classes.center}>
        Soy Tofu specializes in Korean tofu stew and Korean BBQ. We use only the freshest and highest quality ingredients in our dishes, as well as preparing them daily to guarantee the best experience. Our side dishes (banchan) are always changing as we try our best to use ingredients that are in season. We treat our food as an art, and you will experience this first hand when you come through our doors. We humbly welcome you as our guests and await your next visit to our restaurant!
      </p>
      <Parallax bgImage={bottom} strength={400}>
        <div style={{ height: 500 }}>
          <div></div>
        </div>
      </Parallax> */}

    </div>
  )
}


export default About

