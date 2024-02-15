import React from 'react'
import styles from './CartButton.module.scss'
import CartButtonIcon from './CartButtonIcon'
import { Link } from 'react-router-dom'

const CartButton = () => {
  return (
    <Link to='/cart' className={styles.cart}>
      <span>0 руб.</span>
      <div className={styles.delimiter}></div>
      <CartButtonIcon />
      <span className={styles.count}>0</span>
    </Link>
  )
}

export default CartButton
