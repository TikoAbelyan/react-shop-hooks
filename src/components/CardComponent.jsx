import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import _ from 'lodash';
import './index.scss';

const useStyles = makeStyles(theme => ({
  card: {
    width: 300,
    maxWidth: 345,
    margin: '1rem',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  actions: {
    justifyContent: 'space-between',
  },
  add: {
    marginLeft: 'auto',
  },
}));

const useLike = () => {
  const [liked, setLiked] = useState(false);
  const handleChange = () => setLiked(!liked);

  return [liked, handleChange];
};

const CardComponent = ({ increment, decrement, id, it, addItem }) => {
  const classes = useStyles();
  const [liked, handleChange] = useLike();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={it.name}
        subheader={`${it.price} $`}
      />
      <CardMedia
        className={classes.media}
        image="https://img.pngio.com/diamond-diamonds-tumblr-black-edit-sticker-by-diamond-png-tumblr-1024_1024.png"
        title="Paella dish"
      />
      <CardContent>
        <Typography
          align="center"
          variant="h5"
          color="textSecondary"
          component="p"
        >
          {it.count}
        </Typography>
        <Typography
          align="center"
          variant="h6"
          color="textSecondary"
          component="p"
        >
          {it.price * it.count} $
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites" onClick={handleChange}>
          <FavoriteIcon color={`${liked ? 'secondary' : 'action'}`} />
        </IconButton>
        <IconButton aria-label="Add To Card" onClick={() => addItem(it, id)}>
          <AddShoppingCart color="action" />
        </IconButton>
        <IconButton onClick={() => increment(id)} className={classes.add}>
          <AddIcon />
        </IconButton>
        <IconButton onClick={() => decrement(id)} className={classes.remove}>
          <RemoveIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

const areEqual = (prevProps, nextProps) => {
  return _.isEqual(prevProps.it, nextProps.it) ? true : false;
};
export default React.memo(CardComponent, areEqual);
