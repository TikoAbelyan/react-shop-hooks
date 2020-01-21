import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
// import { Button, Menu } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      {/* {console.log("navbar storage", localStorage)} */}
      {/* {localStorage.propagation && console.log("navbar storage", localStorage)} */}
      <h3>logo</h3>
      {/* <ul className="unordList"> */}
      <Link to="/">Home</Link>

      {/* <Menu size="mini" className="menu_item"> */}
      <Link to="/chooseTour">
        {/* <Menu.Item> */}
        See tour package
        {/* </Menu.Item> */}
      </Link>
      <Link to="/sightseeing">
        {/* <Menu.Item> */}
        Sightseeing
        {/* </Menu.Item> */}
      </Link>
      <Link to="/sfsdf">
        {/* <Menu.Item> */}
        Foreign tour package
        {/* </Menu.Item> */}
      </Link>
      {/* </Menu> */}

      {/* <Fragment> */}
      {/* <Link to="/profile">Profile</Link> */}
      {/* </Fragment> */}
      {/* </ul> */}
    </nav>
  );
};

export default NavBar;
