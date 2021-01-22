import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

export default function PaymentForm(props) {
  const { cardName, cardNumber, cardExpire, cardCVV, zip, inputChange } = props
  const handleNumberChange = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, '')
    inputChange(event)
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} xl={12}>
          <TextField
            required
            id="cardName"
            name="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            value={cardName}
            onChange={inputChange}
          />
        </Grid>
        <Grid item xs={12} md={12} xl={12}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            value={cardNumber}
            onChange={handleNumberChange}
          />
        </Grid>
        <Grid item xs={12} md={6} xl={12}>
          <TextField
            required
            id="expDate"
            name="cardExpire"
            label="Expiration"
            fullWidth
            autoComplete="cc-exp"
            value={cardExpire}
            onChange={inputChange}
          />
        </Grid>
        <Grid item xs={12} md={6} xl={12}>
          <TextField
            required
            id="cvv"
            name="cardCVV"
            label="CVV"
            // helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            value={cardCVV}
            onChange={handleNumberChange}
          />
        </Grid>
        <Grid item xs={12} md={6} xl={12}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip"
            fullWidth
            autoComplete="shipping postal-code"
            value={zip}
            onChange={handleNumberChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
