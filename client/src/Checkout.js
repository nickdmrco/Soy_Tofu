import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ContactInfo from './components/ContactInfo'
import PaymentForm from './components/PaymentForm'
import ReviewForm from './components/ReviewForm'
import Footer from './components/Footer'

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
    backgroundColor: 'rgb(245, 242, 230)',
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'rgb(245, 242, 230)',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: 'rgb(245, 242, 230)',
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
  })

  const handleInputChange = (event) => {
    console.log(event)
    setCheckoutState({
      ...checkoutState,
      [event.target.name]: event.target.value,
    })
  }

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <ContactInfo cb={handleInputChange} />
      case 1:
        return <PaymentForm cb={handleInputChange} />
      case 2:
        return (
          <ReviewForm
            firstName={checkoutState.name}
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

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <React.Fragment>
      <main className={classes.layout}>
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
                  Your order number is ###. We have emailed your order
                  confirmation, and will send you an update when your order is
                  ready for pickup.
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
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default Checkout
