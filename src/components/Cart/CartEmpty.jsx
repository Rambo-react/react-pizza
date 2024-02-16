import React from 'react'
import styles from './CartEmpty.module.scss'
import image from '../../assets/png/empty-cart.png'
import { Link } from 'react-router-dom'

const CartEmpty = () => {
  return (
    <div className={styles.cart}>
      <h2>Корзина пуста</h2>
      <p>Вероятней всего, вы не заказывали ещё пиццу.</p>
      <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
      <img src={image} alt='Empty cart' />
      <Link className={styles.button} to='/'>
        <span>Вернуться назад</span>
      </Link>
    </div>
  )
}

export default CartEmpty
