import React, { useState, useEffect } from "react";
import { ListItemSecondaryAction } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveIcon from "@material-ui/icons/Remove";
import clsx from "clsx";
import NavBar from "../components/navbar/navbar";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);
const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "64px"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: "auto!important",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

const Header = ({
  selectedItems,
  deleteItem,
  cardAction,
  onSearch,
  setPrice,
  marz
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    selectedItems.length > 0 && setOpen(true);
  }, [selectedItems]);

  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerOpen = () => setOpen(true);

  const handleDrawerClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <NavBar />
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={selectedItems.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>

            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "Search" }}
              onChange={({ target: { value } }) => onSearch(value)}
            />
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {console.log("marzzzz", marz)}
          {console.log("HEADER =>>>>", selectedItems)}
          {marz &&
            selectedItems.map((it, index) => (
              <ListItem button>
                <ListItemText primary={it.name} secondary={it.count} />
                {/* <ListItemText primary={it.price * it.count} /> */}
                <ListItemSecondaryAction>
                  {/* <IconButton
                    edge="end"
                    aria-label="Increment"
                    className={classes.listItemAction}
                    onClick={() => cardAction(index, "increment")}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="Decrement"
                    onClick={() => cardAction(index, "decrement")}
                  >
                    <RemoveIcon />
                  </IconButton> */}
                  <IconButton
                    edge="end"
                    aria-label="Delete"
                    onClick={() => deleteItem(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

export default Header;
