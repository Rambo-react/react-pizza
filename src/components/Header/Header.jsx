import React from 'react'
import Cart from './Cart/Cart'

const Header = () => {
  return (
    <header style={{'border' : '2px solid black' , 'display' : 'flex'}}>
      <div>Шапка</div>
      <Cart />
    </header>
  )
}

export default Header