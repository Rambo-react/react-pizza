import React from 'react'
import styles from './CartButton.module.scss'
import CartIcon from '../../UI/CartIcon'
import { Link } from 'react-router-dom'

const CartButton = () => {
  return (
    <Link to='/cart' className={styles.cart}>
      <span>0 руб.</span>
      <div className={styles.delimiter}></div>
      <CartIcon />
      <span className={styles.count}>0</span>
    </Link>
  )
}

export default CartButton
