import React, { useState, useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const StyledBadge = withStyles(theme => ({
  badge: {
    top: '50%',
    right: 0,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
}))(Badge)
const Header = ({ allcount, barev, count, selectItems, price, deleteItem }) => {
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    setToggle(true)
  }, [])

  return (
    <header>
      <IconButton aria-label="Cart" onClick={() => setToggle(!toggle)}>
        <StyledBadge badgeContent={count} color="primary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>

      {count > 0 && toggle && (
        <div className="addShopComponent">
          {selectItems.map((it, index) => {
            return (
              <div key={it.key + index}>
                name {it.name}
                <span style={{ color: 'red' }}> count {it.count}</span>
                <span style={{ color: 'green' }}> price {it.price}</span>
                <button onClick={() => deleteItem(index)}>X</button>
              </div>
            )
          })}
          <div> all price is {price}</div>
        </div>
      )}
    </header>
  )
}

export default Header
