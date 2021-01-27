import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import './style.css'
import numberToMoney from '../../../utils/lib/numberToMoney'

const useStyles = makeStyles((theme) => ({
  card: {
    padding: '0.2rem',
    backgroundColor: '#897C80',
  },
  tile: {
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      width: '16rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '11rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    width: '21rem',
    [theme.breakpoints.down('lg')]: {
      width: '16rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '11rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    whiteSpace: 'break-spaces',
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },

  img: {    width: '21rem',
    [theme.breakpoints.down('lg')]: {
      width: '16rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '11rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}))

export default function MenuItemTile(props) {
  const { key, name, image, title, lowest, highest, click } = props
  const renderLowestHighestPrice = () => {
    if (lowest === undefined || highest === undefined) {
      return
    }
    if (lowest === highest) {
      return `$${numberToMoney(lowest)}`
    } else {
      return `$${numberToMoney(lowest)}~$${numberToMoney(highest)}`
    }
  }
  const classes = useStyles()

  return (
    <div className={classes.card}>
      <GridListTile
        className={classes.tile}
        key={key}
        onClick={(event) => click(event)}
        cols={1}
      >
        <img className={classes.img} src={image} alt={title} />
        <GridListTileBar
          title={name}
          subtitle={<span>{`${renderLowestHighestPrice()}`}</span>}
          classes={{
            root: classes.titleBar,
            title: classes.title + 'titleWhite',
          }}
        />
      </GridListTile>
    </div>
  )
}
