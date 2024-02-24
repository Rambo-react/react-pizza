import React from 'react'
import styles from './CartButton.module.scss'
import CartIcon from '../../UI/CartIcon'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartButton = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  // const countItems = useSelector((state) => state.cart.items.length)

  const countItems = useSelector((state) =>
    state.cart.items.reduce((count, item) => count + item.count, 0)
  )
  // console.log(count)
  return (
    <Link to='/cart' className={styles.cart}>
      <span>{totalPrice} руб.</span>
      <div className={styles.delimiter}></div>
      <div>
        <CartIcon />
      </div>
      <span className={styles.count}>{countItems}</span>
    </Link>
  )
}

export default CartButton
