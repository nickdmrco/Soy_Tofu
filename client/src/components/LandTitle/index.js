import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import dumplings from '../../img/dumplings.jpg'
import { CssBaseline } from '@material-ui/core'
import { Collapse } from '@material-ui/core'
import Button from '@material-ui/core/Button'

// import { IconButton } from '@material-ui/core'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
 root: {
  minHeight: '100vh',
  backgroundImage: `url(${dumplings})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
 },
 txtroot: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
 },
 appbar: {
  background: 'none',
 },
 appbarWrapper: {
  width: '80%',
  margin: '0 auto',
 },
 appbarTitle: {
  flexGrow: '1',
 },
 icon: {
  color: '#fff',
  fontSize: '2rem',
 },
 colorText: {
  color: '#424242',
  fontSize: '4.5rem',
 },
 container: {
  textAlign: 'center',
 },
 title: {
  color: '#fff',
  fontSize: '4rem',
 },
 arrow: {
  color: '#424242',
  fontSize: '4.5rem',
 },
 start: {
   backgroundColor: '#512110',
   color: 'white'
 },
}))

const Text = () => {
 const classes = useStyles()
 const [checked, setChecked] = useState(false)
 useEffect(() => {
  setChecked(true)
 }, [])
 return (
  <div className={classes.txtroot} id="header">
   <Collapse
    in={checked}
    {...(checked ? { timeout: 2000 } : {})}
    collapsedHeight={50}
   >
    <div className={classes.container}>
     <h1 className={classes.title}>
      Welcome to <br />
      <span className={classes.colorText}>Soy Tofu</span>
      <br />

           <Button variant="contained" onClick={event => window.location.href = '/menu'} className={classes.start}>Start your order here</Button>

      {/* use later for scroll function ...add link/route in Landing()*/}
      {/* <IconButton>
              <ExpandMoreIcon onClick={event => window.location.href = 'pagelink'} className={classes.arrow} />
            </IconButton> */}

     </h1>

    </div>
   </Collapse>
  </div>
 )
}

const Landing = () => {
 const classes = useStyles()
 return (
  <>
   {/* add link/route here */}
   <div className={classes.root} >

    <CssBaseline />
    <Text></Text>
   </div>
  </>
 )
}

export default Landing