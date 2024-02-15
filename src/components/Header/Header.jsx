import React from 'react'
import Cart from './Cart/Cart'
import styles from './Header.module.scss'
import HeaderLogo from './HeaderLogo/HeaderLogo'

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <Cart />
    </header>
  )
}

export default Header
