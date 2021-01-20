import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Footer from './Footer'
import ContactInfo from './ContactInfo'
import PaymentForm from './PaymentForm'
import ReviewForm from './ReviewForm'
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

      <PaymentForm></PaymentForm>
      <ReviewForm></ReviewForm>
      <ContactInfo></ContactInfo>

      <Footer></Footer>
    </div>
  )
}
export default Food
