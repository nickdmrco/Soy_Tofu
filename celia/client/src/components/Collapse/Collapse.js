import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {  Collapse } from '@material-ui/core'
// import { IconButton } from '@material-ui/core'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  root: {
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
}))
const LandingHeader = () => {
  const classes = useStyles()
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(true)
  }, [])
  return (
    <div className={classes.root} id="header">
      <Collapse
        in={checked}
        {...(checked ? { timeout: 2000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            <span className={classes.colorText}>Soy Tofu</span>
            <br/>

            {/* use later for scroll function ...add link/route to Landing.js instead */}
            {/* <IconButton>
              <ExpandMoreIcon onClick={event => window.location.href = 'pagelink'} className={classes.arrow} />
            </IconButton> */}

          </h1>
            
        </div>
      </Collapse>
    </div>
  )
}

export default LandingHeader