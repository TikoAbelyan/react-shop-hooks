import React, { useState, useEffect, useCallback } from "react";
import AppComponent from "../components/AppComponent";
import Header from "../components/header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from "../components/navbar/navbar";
import Sightseeing from "../components/sightseeing/sightseeing";
import Home from "../components/Home/home";
import { initialState } from "../utils/utils";

const AppContainer = () => {
  const [items, setItems] = useState(initialState);
  const [marz, setMarz] = useState();
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemsPrice, setItemsPrice] = useState(null);
  const [searchedItems, setSearchedItems] = useState(null);
  console.log("items =>", items);
  const allPrice = useCallback(() => {
    let price = 0;
    selectedItems.map(it => {
      price = it.price * it.count + price;
    });
    setItemsPrice(price);
  });

  useEffect(() => {
    allPrice();
  }, [allPrice]);

  const addItem = (data, id) => {
    setSelectedItems(prevState => {
      const state = prevState.map(it => {
        const item = { ...it };
        return item;
      });
      let condition = false;
      state.map(it => {
        if (it.name === data.name) {
          condition = true;
        }
      });
      if (condition) {
        state.map(it => {
          if (it.name === data.name) {
            const item = { ...it };
            it.count = it.count + data.count;
            return item;
          }
        });
      } else {
        state.push(data);
      }
      return state;
    });

    setItems(prevState => ({
      ...prevState,
      [marz]: prevState[marz].map((it, i) => {
        const item = { ...it };
        if (id === i) {
          item.count = 1;
        }
        return item;
      })
    }));

    allPrice();
  };

  const sortItems = (type = "min") => {
    setItems(prevState => {
      const state = [...prevState];
      state.sort((a, b) => {
        if (type === "min") {
          return a.price - b.price;
        }
        if (type === "max") {
          return b.price - a.price;
        }
      });
      return [...state];
    });
  };

  const cardAction = (index, type) =>
    setSelectedItems(prevState => {
      const state = [...prevState];
      state.map((it, i) => {
        if (index === i && type === "increment") {
          it.count = it.count + 1;
        }
        if (index === i && type === "decrement") {
          it.count = it.count - 1;
        }
      });
      return [...state];
    });

  const deleteItem = index =>
    setSelectedItems(prevState => {
      const state = prevState.filter((it, i) => {
        return index !== i && it;
      });
      return [...state];
    });

  const increment = index =>
    setItems(prevState => {
      const mutable = prevState.map((it, i) => {
        const obj = { ...it };
        if (index === i) {
          obj.count = obj.count + 1;
        }
        return obj;
      });
      return [...mutable];
    });

  const decrement = index => {
    setItems(prevState => {
      const minus = prevState.map((it, i) => {
        const obj1 = { ...it };
        if (index === i && obj1.count > 1) {
          obj1.count = obj1.count - 1;
        }
        return obj1;
      });
      return [...minus];
    });
  };

  const handleSearch = value => {
    const searched = items.filter(it => {
      const trimmed = it.name.replace(/ /g, "").toLocaleLowerCase();
      return trimmed.includes(value);
    });
    setSearchedItems([...searched]);
  };

  return (
    <Router>
      <Header
        count={selectedItems.length}
        selectedItems={selectedItems}
        setPrice={allPrice}
        deleteItem={deleteItem}
        cardAction={cardAction}
        onSearch={handleSearch}
        marz={marz}
      />

      {/* <NavBar /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/chooseTour"
          render={props => (
            <AppComponent
              {...props}
              data={
                searchedItems && searchedItems.length > 0
                  ? searchedItems
                  : items
              }
              increment={increment}
              decrement={decrement}
              addItem={addItem}
              sortItems={sortItems}
              marz={marz}
              setMarz={setMarz}
            />
          )}
        />

        <Route
          path="/sightseeing"
          render={props => (
            <Sightseeing
              {...props}
              data={
                searchedItems && searchedItems.length > 0
                  ? searchedItems
                  : items
              }
              addItem={addItem}
              // sortItems={sortItems}
              marz={marz}
              setMarz={setMarz}
            />
          )}
        />
        {/* {document.cookie ? (
            <Route path="/profile" component={Profile} />
          ) : (
            <Redirect to="/" />
          )}
          <Route path="/user" component={UserComponent} /> */}
      </Switch>
    </Router>
  );
};

export default AppContainer;
