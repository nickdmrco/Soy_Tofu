import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import './style.css'
import numberToMoney from '../../../utils/lib/numberToMoney'

const useStyles = makeStyles((theme) => ({
  card: {
    flexGrow: 1,
    width: '33%',
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  tile: {
    padding: '0.2rem',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    width: '100%',
    whiteSpace: 'break-spaces',
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },

  img: {
    width: '100%',
  },
}))

export default function MenuItemTile(props) {
  const { key, name, title, lowest, highest, click } = props
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
        <img
          className={classes.img}
          src={`https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg`}
          alt={title}
        />
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
