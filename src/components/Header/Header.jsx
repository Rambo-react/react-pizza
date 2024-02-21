import React from 'react'
import Search from '../Search/Search'
import CartButton from './CartButton/CartButton'
import styles from './Header.module.scss'
import HeaderLogo from './HeaderLogo/HeaderLogo'

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <Search />
      <CartButton />
    </header>
  )
}

export default Header
