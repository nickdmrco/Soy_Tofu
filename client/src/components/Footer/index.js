import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid'

function Copyright() {
  const classes = useStyles()
  return (
    <Typography variant="body2" color="textSecondary" align="center" className={classes.copyright}>
      {'Copyright © '}
      <Link color="inherit" href="/privacy">
        Sayaka Japanese Restaurant
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  copyright: {
    color: '#512110',
    fontSize: '95%'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    // background: 'linear-gradient(45deg, #625834 10%, #30362F 90%)',
    background: 'linear-gradient(45deg, #897C80 10%, #2B3C02 90%)',
    color: 'white',
    position: 'fixed',
    left: '0',
    bottom: '0',
    textAlign: 'center',
    width: '100%',
  fontSize: '98%'
  },
  phantom: {
    padding: theme.spacing(3, 2),
    width: '100%',
    opacity: '0.000000000000001'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  grid: {
    padding: '0px',
  },
  gridItem: {
    padding: '0px',
    margin: '0px',
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <>

      {/* fake */}
      <div className={classes.phantom}>
        <div className={classes.root}>
          <footer>
            <Container maxWidth="sm">
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <Typography align="center">Hours</Typography>
                  <p align="center">Mon - Sat: 11am-8:30pm</p>
                  <p align="center">Sun: Closed</p>
                </Grid>
                <Grid item xs={4}>
                  <Typography align="center">Contact Us!</Typography>
                  <p align="center">
                    
                  </p>
                  <p align="center">
                    
                      <i align="center" class="fab fa-yelp"></i>
                    
                  </p>
                </Grid>
                <Grid item xs={4}>
                  <Typography align="center">Location</Typography>
                  <p align="center">
                    
                      4961 La Palma Ave, La Palma, CA, 90623
               
                  </p>
                </Grid>
              </Grid>
              <Copyright className={classes.copyright} />
            </Container>
          </footer>
        </div>
      </div>


      {/* ACTUAL */}
      <div className={classes.root}>
        <footer className={classes.footer}>
          <Container maxWidth="sm" className={classes.grid}>
            <Grid container spacing={0}>
              <Grid item xs={4} className={classes.gridItem}>
                <p align="center">
                <Typography align="center">Hours</Typography>
                Mon - Sat: 11am-8:30pm Sun: Closed</p>
              </Grid>
              <Grid item xs={4} className={classes.gridItem}>
                <p align="center">
                  <Typography align="center">Contact Us!</Typography>
                  <a className={classes.link} href="tel:562-924-8289">
                    (562)924-8289
                  </a>
                  </p>
                <p align="center">
                  <a
                    className={classes.link}
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.yelp.com/biz/soy-tofu-la-palma"
                  >
                    <i align="center" class="fab fa-yelp"></i>
                  </a>
                </p>
              </Grid>
              <Grid item xs={4} className={classes.gridItem}>
                <p align="center">
                <Typography align="center">Location</Typography>
                  <a
                    className={classes.link}
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.google.com/maps/place/4961+La+Palma+Ave,+La+Palma,+CA+90623/@33.8472895,-118.048716,17z/data=!3m1!4b1!4m5!3m4!1s0x80dd2c3ee07490a9:0xea2e77b1d60cc412!8m2!3d33.8472895!4d-118.046522"
                  >
                    4961 La Palma Ave, La Palma, CA, 90623
                  </a>
                </p>
              </Grid>
            </Grid>
            <Copyright className={classes.copyright} />
          </Container>
        </footer>
      </div>
    </>
  )}