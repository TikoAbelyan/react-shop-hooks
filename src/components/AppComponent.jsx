import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardComponent from './CardComponent';
import Fab from '@material-ui/core/Fab';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: '0 1rem',
    width: '10rem!important',
    justifyContent: 'space-around!important',
  },
}));

const AppComponent = ({ data, increment, decrement, addItem, sortItems }) => {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);

  return (
    <div className="container">
      <Fab
        color="primary"
        variant="extended"
        aria-label="Add"
        className={classes.fab}
        onClick={() => {
          setToggle(!toggle);
          sortItems(toggle ? 'min' : 'max');
        }}
      >
        Sort
        {toggle ? <ExpandLess /> : <ExpandMore />}
      </Fab>
      <div className="items">
        {data.map((it, i) => (
          <CardComponent
            increment={increment}
            decrement={decrement}
            addItem={addItem}
            id={i}
            it={it}
            key={it.key + i}
          />
        ))}
      </div>
    </div>
  );
};

export default AppComponent;
