import React from 'react'
import CartEmpty from './CartEmpty'
import styles from './Cart.module.scss'
import CartIcon from '../UI/CartIcon'
import TrashIcon from '../UI/TrashIcon'
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem'

const Cart = (props) => {
  let content

  if (props.isEmpty) {
    content = <CartEmpty />
  }

  const arrowLeftSvg = (
    <svg
      width='8'
      height='14'
      viewBox='0 0 8 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7 13L1 6.93015L6.86175 1'
        stroke='#D3D3D3'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )

  content = (
    <div className={styles.cart}>
      <div className={styles.top}>
        <h2>
          <CartIcon />
          <span>Корзина</span>
        </h2>
        <div className={styles.clear}>
          <TrashIcon />
          <span>Очистить корзину</span>
        </div>
      </div>

      <ul className={styles.items}>
        <CartItem />
        <CartItem />
      </ul>

      <div className={styles.bottom}>
        <div className={styles.details}>
          <span>
            Всего пицц: <b>3 шт.</b>
          </span>
          <span>
            Сумма заказа: <b className={styles.cost}>900 ₽</b>
          </span>
        </div>
        <div className={styles.buttons}>
          <Link to='/' className={`${styles.button} ${styles.back}`}>
            {arrowLeftSvg}
            <span>Вернуться назад</span>
          </Link>
          <div className={`${styles.button} ${styles.pay}`}>
            <span>Оплатить сейчас</span>
          </div>
        </div>
      </div>
    </div>
  )

  return <>{content}</>
}

export default Cart
