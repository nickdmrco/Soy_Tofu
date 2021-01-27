import React from 'react'
import emailjs from 'emailjs-com'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
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
    backgroundColor: '#ffffff'
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: '#19647E',
    color: '#ffffff'
  },
}));

export default function ContactUs() {
  const classes = useStyles()

  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm('service_8n89n1a', 'emailTemplate', e.target, 'user_bjzCzrIzUc7kBzK0NvU7z')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
    e.target.reset()
  }

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Contact Us!
          </Typography>
            <form onSubmit={sendEmail} container spacing={0} align="center">
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  name="name"
                  id="name"
                  label="Name"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  type="email"
                  name="email"
                  id="email"
                  label="Email"
                  autoComplete="email"
                  required
                />
              </Grid>  
              <TextField
                margin="dense"
                type="Text"
                name="subject"
                id="subject"
                label="Email Subject"
                required
              />
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  multiline
                  rows="8"
                  name="message"
                  variant="outlined"
                  id="message"
                  label="Your message here..."
                  required
                />
              </Grid>
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
                color="inherit">
                Submit
              </Button>
            </form>
        </Paper>
      </main>
    </React.Fragment>
  )
}