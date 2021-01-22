import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Parallax } from 'react-parallax'
import Typography from '@material-ui/core/Typography'
import full from '../../img/bibimbap.jpg'
import './style.css'

// import 'fontsource-roboto'

const useStyles = makeStyles((theme) => ({
 body: {
  fontFamily: 'Roboto'
 },
 typography: {
  marginTop: '3rem',
  marginBottom: '3rem',
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

const AboutBox = () => {
 const classes = useStyles()
 return (
  <div className={classes.body}>
   <Parallax bgImage={full} strength={400}>
    <div style={{ height: 650 }}>
     <div className={classes.inside + ' blue'}>
      <Typography className={classes.typography} variant="h3" align="center">
       About Us
      </Typography>
      <p className={classes.center}>
       Soy Tofu specializes in Korean tofu stew and Korean BBQ. We use only the freshest and highest quality ingredients in our dishes, as well as preparing them daily to guarantee the best experience. Our side dishes (banchan) are always changing as we try our best to use ingredients that are in season. We treat our food as an art, and you will experience this first hand when you come through our doors. We humbly welcome you as our guests and await your next visit to our restaurant!
      </p>
     </div>
    </div>
   </Parallax>
  </div>
 )
}


export default AboutBox