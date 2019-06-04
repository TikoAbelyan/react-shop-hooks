import React, { useState, useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
const StyledBadge = withStyles(theme => ({
  badge: {
    top: '50%',
    right: 1,
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
          <div className="layout_category">
            <Typography gutterBottom variant="h6" component="h5">
              Image
            </Typography>
            <Typography gutterBottom variant="h6" component="h5">
              Name
            </Typography>
            <Typography gutterBottom variant="h6" component="h5">
              Count
            </Typography>
            <Typography gutterBottom variant="h6" component="h5">
              Price
            </Typography>
          </div>
          {selectItems.map((it, index) => {
            return (
              <div key={it.key + index} className="bg_shop">
                <div className="change_at_shop">
                  <div>
                    <img src={it.image} alt="" width="60" height="60" />
                  </div>
                  <div>{it.name}</div>
                  <div>{it.count}</div>
                  <div>{it.price}</div>
                </div>
                <Button
                  size="small"
                  color="secondary"
                  variant="contained"
                  onClick={() => deleteItem(index)}
                >
                  Remove
                </Button>
              </div>
            )
          })}
          <div className="byAllprice">
            <Typography gutterBottom variant="h6" component="h5">
              All price is {price}
            </Typography>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
