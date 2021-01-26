import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

export default function PaymentForm(props) {
  const { cardName, cardNumber, cardExpire, cardCVV, zip, inputChange } = props

  const splice = (event, len) => {
    if (len !== undefined && event.target.value.length > len) {
      event.target.value = event.target.value.substring(0, len)
    }
  }

  const handleNumberChange = (event, len) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, '')
    splice(event, len)
    inputChange(event)
  }

  const handleCardInput = (event) => {
    if (event.target.length < 1) {
      inputChange(event)
      return
    }
    event.target.value = event.target.value.replace(/[^0-9]/g, '')
    splice(event, 16)
    let number = cardNumber.replace(/[^0-9]/g, '').length
    let value = event.target.value.length
    let hyphons = 1
    for (let i = 1; i < 4; i++) {
      if (value > 4 * i) {
        hyphons++
      } else if (value % 4 === 0) {
        if (number > 4 * i - 4 && number % 4 === 3) {
          hyphons++
        }
      } else {
        i = 4
      }
    }

    for (let i = 1; i < hyphons; i++) {
      event.target.value =
        event.target.value.substring(0, 4 * i + (i - 1)) +
        '-' +
        event.target.value.substring(4 * i + (i - 1))
    }
    inputChange(event)
  }

  const handleExpirationChange = (event) => {
    if (event.target.value.length < 1) {
      inputChange(event)
      return
    }

    event.target.value = event.target.value.replace(/[^0-9]/g, '')
    let number = cardExpire.replace(/[^0-9]/g, '').length
    splice(event, 4)
    if (event.target.value.length > 2) {
      event.target.value =
        event.target.value.substring(0, 2) +
        '/' +
        event.target.value.substring(2)
    } else if (number === 1) {
      event.target.value += '/'
    }

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
            onChange={handleCardInput}
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
            onChange={handleExpirationChange}
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
            onChange={(event) => handleNumberChange(event, 3)}
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
