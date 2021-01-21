import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import dumplings from './img/dumplings.jpg'
import { CssBaseline } from '@material-ui/core'
import Collapse from './components/Collapse'
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${dumplings})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}))

const Landing = () => {
  const classes = useStyles()
  return (
    <>
      {/* add link/route here */}
      <div className={classes.root} onClick={event => window.location.href = 'pagelink'}>

        <CssBaseline />
        <Collapse></Collapse>
      </div>
    </>
  )
}

export default Landing