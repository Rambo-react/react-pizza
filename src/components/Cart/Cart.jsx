import React from 'react'
import CartEmpty from './CartEmpty'
import styles from './Cart.module.scss'
import CartIcon from '../UI/CartIcon'
import TrashIcon from '../UI/TrashIcon'
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearItems } from '../../redux/slices/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  const countItems = cartItems.reduce((count, item) => count + item.count, 0)

  let content

  if (cartItems.length === 0) {
    content = <CartEmpty />
  }

  if (cartItems.length > 0) {
    const items = cartItems.map((item, index) => (
      <CartItem key={index} {...item} />
    ))

    content = (
      <div className={styles.cart}>
        <div className={styles.top}>
          <h2>
            <CartIcon />
            <span>Корзина</span>
          </h2>
          <div className={styles.clear}>
            <TrashIcon />
            <span onClick={() => dispatch(clearItems())}>Очистить корзину</span>
          </div>
        </div>

        <ul className={styles.items}>{items}</ul>

        <div className={styles.bottom}>
          <div className={styles.details}>
            <span>
              Всего пицц: <b>{countItems} шт.</b>
            </span>
            <span>
              Сумма заказа: <b className={styles.cost}>{totalPrice} руб.</b>
            </span>
          </div>
          <div className={styles.buttons}>
            <Link to='/' className={`${styles.button} ${styles.back}`}>
              <span>Вернуться назад</span>
            </Link>
            <div className={`${styles.button} ${styles.pay}`}>
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <>{content}</>
}

export default Cart
