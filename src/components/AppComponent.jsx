import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardComponent from "./CardComponent";
import Fab from "@material-ui/core/Fab";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import _ from "lodash";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: "0 1rem",
    width: "10rem!important",
    justifyContent: "space-around!important"
  }
}));

const AppComponent = ({
  data,
  increment,
  decrement,
  addItem,
  sortItems,
  marz,
  setMarz
}) => {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
  const [country, setCountry] = useState([
    { marz: "yerevan", url: "yerevan.jpg" },
    { marz: "tavush", url: "tavush.jpg" },
    { marz: "aragacotn", url: "aragacotn.jpg" },
    { marz: "Ararat", url: "ararat.jpg" },
    { marz: "Armavir", url: "armavir.jpeg" },
    { marz: "Gexarquniq", url: "gexarquniq.jpg" },
    { marz: "Lori", url: "lori.jpg" },
    { marz: "Kotayq", url: "kotayq.jpeg" },
    { marz: "Shirak", url: "shirak.jpg" },
    { marz: "Syuniq", url: "syuniq.jpg" },
    { marz: "Vayoc dzor", url: "vayozdzor.jpeg" }
  ]);

  const handleRedirect = it => {
    setMarz(it);
  };

  console.log(data);

  return (
    <div className="container" style={{ margin: "0!important" }}>
      {/* <Fab
        color="primary"
        variant="extended"
        aria-label="Add"
        className={classes.fab}
        onClick={() => {
          setToggle(!toggle);
          sortItems(toggle ? "min" : "max");
        }}
      >
        Sort
        {toggle ? <ExpandLess /> : <ExpandMore />}
      </Fab> */}
      <div className="chooseTour">
        {country.map(it => (
          <div key={it.marz}>
            <div onClick={() => handleRedirect(it.marz)}>
              <div
                style={{
                  background: `url(./public/images/yerevan.jpg) no-repeat`,
                  width: "100px",
                  height: "100px"
                }}
              ></div>
              {/* <img
                src={`../../public/images/${it.url}`}
                alt=""
                width="100px"
                height="100px"
              /> */}
              {it.marz}
            </div>
          </div>
        ))}
      </div>
      <div className="items">
        {data &&
          marz &&
          data[marz].map((it, i) => (
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
