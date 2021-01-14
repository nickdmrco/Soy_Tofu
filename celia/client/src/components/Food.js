import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Footer from './Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  }
}))

const Food = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
  
      <Footer></Footer>
    </div>
  )
}
export default Food
