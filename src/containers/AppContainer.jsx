import React, { useState, useEffect } from 'react'
import AppComponent from '../components/AppComponent'
import Header from '../components/Header'

const AppContainer = () => {
  const initialState = [
    {
      name: 'i Phone',
      price: 500,
      key: 'iphone',
      image:
        'http://www.sarkarinaukrisearch.in/wp-content/uploads/2018/12/whatsapp-dp-images-51.jpg',
      count: 1,
    },
    {
      name: 'Galaxy',
      price: 400,
      key: 'galaxy',
      image:
        'http://www.sarkarinaukrisearch.in/wp-content/uploads/2018/12/whatsapp-dp-images-51.jpg',
      count: 1,
    },
    {
      name: 'Xiaomi',
      price: 220,
      key: 'xiaomi',
      image:
        'http://www.sarkarinaukrisearch.in/wp-content/uploads/2018/12/whatsapp-dp-images-51.jpg',
      count: 1,
    },
    {
      name: 'Lenovo',
      price: 120,
      key: 'LG',
      image:
        'http://www.sarkarinaukrisearch.in/wp-content/uploads/2018/12/whatsapp-dp-images-51.jpg',
      count: 1,
    },
    {
      name: 'Macbook',
      price: 1400,
      key: 'macbook',
      image:
        'http://www.sarkarinaukrisearch.in/wp-content/uploads/2018/12/whatsapp-dp-images-51.jpg',
      count: 1,
    },
    {
      name: 'Macbook',
      price: 1100,
      key: 'macbook',
      image:
        'http://www.sarkarinaukrisearch.in/wp-content/uploads/2018/12/whatsapp-dp-images-51.jpg',
      count: 1,
    },
  ]
  const [items, setItems] = useState([...initialState])
  const [selectItems, setSelectedItems] = useState([])
  const [itemsPrice, setItemsPrice] = useState(null)
  useEffect(() => {
    allPrice()
  }, [selectItems])
  const addItem = (data, id) => {
    setSelectedItems(prevState => {
      const state = prevState.map(it => {
        const item = { ...it }
        return item
      })
      let condition = false
      state.map(it => {
        if (it.name === data.name) {
          condition = true
        }
      })
      if (condition) {
        state.map(it => {
          if (it.name === data.name) {
            // console.log(it)
            const item = { ...it }
            it.count = it.count + data.count
            return item
          }
        })
      } else {
        state.push(data)
      }
      return state
    })

    setItems(prevState => {
      const state = prevState.map((it, i) => {
        const item = { ...it }
        if (id === i) {
          item.count = 1
        }
        return item
      })
      return [...state]
    })
    allPrice()
  }
  const sortItems = () => {
    setItems(prevState => {
      const state = [...prevState]
      state.sort((a, b) => {
        return a.price - b.price
      })
      return [...state]
    })
  }
  const cardAction = (index, type) => {
    setSelectedItems(prevState => {
      const state = [...prevState]
      state.map((it, i) => {
        if (index === i && type === 'increment') {
          it.count = it.count + 1
        }
        if (index === i && type === 'decrement') {
          it.count = it.count - 1
        }
      })
      return [...state]
    })
  }
  const allPrice = () => {
    let price = 0
    selectItems.map(it => {
      price = it.price * it.count + price
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

  return (
    <div>
      <Header
        count={selectItems.length}
        selectItems={selectItems}
        price={itemsPrice}
        setPrice={allPrice}
        deleteItem={deleteItem}
        cardAction={cardAction}
        sortItems={sortItems}
      />
      <AppComponent data={items} increment={increment} decrement={decrement} addItem={addItem} />
    </div>
  )
}

export default AppContainer
