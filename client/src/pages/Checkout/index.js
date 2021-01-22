import React, { useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ContactInfo from '../../components/ContactInfo'
import PaymentForm from '../../components/PaymentForm'
import ReviewForm from '../../components/ReviewForm'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import OrderAPI from '../../utils/OrderAPI'

const { createOrder } = OrderAPI
const randInt = (max) => {
  return Math.floor(Math.random() * max)
}

const getTotal = (orders) => {
  let price = 0
  orders.forEach((order) => {
    price += order.total * 100
  })
  price /= 100
  return price
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}))

const steps = ['Contact Info', 'Payment details', 'Review your order']
const Checkout = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)

  const [checkoutState, setCheckoutState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardName: '',
    cardNumber: '',
    cardExpire: '',
    cardCVV: '',
    zip: '',
    total: '',
  })

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <ContactInfo
            firstName={checkoutState.firstName}
            lastName={checkoutState.lastName}
            email={checkoutState.email}
            phone={checkoutState.phone}
            inputChange={handleInputChange}
          />
        )
      case 1:
        return (
          <PaymentForm
            cardName={checkoutState.cardName}
            cardNumber={checkoutState.cardNumber}
            cardExpire={checkoutState.cardExpire}
            cardCVV={checkoutState.cardCVV}
            zip={checkoutState.zip}
            inputChange={handleInputChange}
          />
        )
      case 2:
        return (
          <ReviewForm
            firstName={checkoutState.firstName}
            lastName={checkoutState.lastName}
            email={checkoutState.email}
            phone={checkoutState.phone}
            cardName={checkoutState.cardName}
            cardNumber={checkoutState.cardNumber}
            cardExpire={checkoutState.cardExpire}
            cardCVV={checkoutState.cardCVV}
            zip={checkoutState.zip}
          />
        )
      default:
        throw new Error('Unknown step')
    }
  }

  const submitForm = () => {
    let orders = JSON.parse(localStorage.getItem('soy_tofu_orders'))
    let order = {
      firstName: checkoutState.firstName,
      lastName: checkoutState.lastName,
      email: checkoutState.email,
      phone: checkoutState.phone,
      orderNumber: randInt(9999),
      state: 0,
      orders: orders,
      total: getTotal(orders),
    }
    axios
      .post('/api/orders', order)
      .then(() => {
        localStorage.setItem('soy_tofu_orders', JSON.stringify([]))
      })
      .catch((err) => console.error(err))
  }

  const handleInputChange = (event) => {
    setCheckoutState({
      ...checkoutState,
      [event.target.name]: event.target.value,
    })
  }

  const isEnabled = () => {
    if (activeStep === 0) {
      return (
        checkoutState.firstName !== '' &&
        checkoutState.lastName !== '' &&
        checkoutState.email !== '' &&
        checkoutState.phone !== ''
      )
    } else if (activeStep === 1) {
      return (
        checkoutState.cardName !== '' &&
        checkoutState.cardNumber.length === 16 &&
        checkoutState.cardExpire.length === 5 &&
        checkoutState.cardCVV.length === 3 &&
        checkoutState.zip !== ''
      )
    }

    return true
  }

  const handleNext = () => {
    if (activeStep + 1 > 2) {
      submitForm()
    }
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Navbar />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>

          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  We have emailed your order confirmation, and will send you an
                  update when your order is ready for pickup.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="outlined"
                    onClick={handleNext}
                    className={classes.button}
                    disabled={!isEnabled()}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Checkout
