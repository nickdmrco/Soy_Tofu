import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
 root: {
  background: 'linear-gradient(45deg, #3C3B3F 30%, #605C3C 90%)',
  border: 0,
  borderRadius: 3,
  // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  justify: 'center',
 },
});

export default function Hook() {
 const classes = useStyles();
 return <Button className={classes.root} href='/home'>See what's cookin' ! -> </Button>;
}