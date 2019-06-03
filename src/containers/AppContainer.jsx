import React, { useState, useEffect } from 'react'
import AppComponent from '../components/AppComponent'
import Header from '../components/Header'

const AppContainer = () => {
  const initialState = [
    { name: 'i Phone', price: 500, key: 'iphone', count: 1 },
    { name: 'Galaxy', price: 400, key: 'galaxy', count: 1 },
    { name: 'Xiaomi', price: 560, key: 'xiaomi', count: 1 },
    { name: 'Lenovo', price: 700, key: 'LG', count: 1 },
    { name: 'Macbook', price: 1500, key: 'macbook', count: 1 },
    { name: 'Macbook', price: 1500, key: 'macbook', count: 1 },
  ]
  const [items, setItems] = useState([...initialState])
  const [selectItems, setSelectedItems] = useState([])
  const [itemsPrice, setItemsPrice] = useState(null)
  useEffect(() => {
    allPrice()
  }, [selectItems])
  const addItem = data => {
    setSelectedItems(prevState => {
      const state = [...prevState]
      state.push(data)
      return [...state]
    })
    allPrice()
  }
  const allPrice = () => {
    let price = 0
    selectItems.map(it => {
      price = it.price * it.count + price

      // console.log(it.count)
    })
    setItemsPrice(price)
  }
  const deleteItem = index => {
    setSelectedItems(prevState => {
      const state = prevState.filter((it, i) => {
        return index !== i && it
      })
      return [...state]
    })
  }
  const increment = index => {
    setItems(prevState => {
      const mutable = prevState.map((it, i) => {
        const obj = { ...it }
        if (index === i) {
          obj.count = obj.count + 1
        }
        return obj
      })
      return [...mutable]
    })
  }

  const decrement = index => {
    setItems(prevState => {
      const minus = prevState.map((it, i) => {
        const obj1 = { ...it }
        if (index === i && obj1.count > 1) {
          obj1.count = obj1.count - 1
        }
        return obj1
      })
      return [...minus]
    })
  }
  const addToShop = index => {
    console.log(index)
  }
  const barev = () => {
    alert()
  }
  return (
    <div>
      <Header
        addToShop={addToShop}
        barev={barev}
        count={selectItems.length}
        selectItems={selectItems}
        price={itemsPrice}
        setPrice={allPrice}
        deleteItem={deleteItem}
      />
      <AppComponent
        data={items}
        increment={increment}
        decrement={decrement}
        addToShop={addToShop}
        addItem={addItem}
      />
    </div>
  )
}

export default AppContainer
