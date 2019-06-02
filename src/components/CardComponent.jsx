import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import _ from 'lodash'
import './index.scss'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: '1rem',
  },
  actions: {
    justifyContent: 'space-between',
  },
})

const CardComponent = ({ increment, decrement, id, it, addToShop }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card} raised>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="http://www.sarkarinaukrisearch.in/wp-content/uploads/2018/12/whatsapp-dp-images-51.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {it.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto, excepturi quo
            voluptas itaque modi labore provident sequi veniam aliquid eveniet, voluptatem explicabo
            cumque, ipsum dignissimos impedit est? Pariatur, ducimus!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button size="large" color="secondary" variant="outlined" onClick={() => addToShop(id)}>
          Add to card
        </Button>
        <Typography gutterBottom variant="h6" component="h2">
          {it.price * it.count} $
        </Typography>
        <div className="actions">
          <Button size="small" color="secondary" variant="contained" onClick={() => increment(id)}>
            +
          </Button>
          <Typography align="center" gutterBottom variant="h6" component="h2">
            {it.count}
          </Typography>
          <Button size="small" color="secondary" variant="contained" onClick={() => decrement(id)}>
            -
          </Button>
        </div>
      </CardActions>
    </Card>
  )
}

const areEqual = (prevProps, nextProps) => {
  return _.isEqual(prevProps.it, nextProps.it) ? true : false
}
export default React.memo(CardComponent, areEqual)
