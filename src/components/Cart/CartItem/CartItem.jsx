import React from 'react'
import styles from './CartItem.module.scss'

const CartItem = (props) => {
  return (
    <li className={styles.item}>
      <div className={styles.title}>
        <img
          alt='pizza'
          src='https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg'
        />
        <div className={styles.description}>
          <h2>Наименование</h2>
          <p>
            <span>тонкое тесто, </span>
            <span>26 см.</span>
          </p>
        </div>
      </div>
      <div className={styles.counter}>
        <button className={styles.button}>-</button>
        <span>2</span>
        <button className={styles.button}>+</button>
      </div>
      <div className={styles.price}>500 руб.</div>
      <button className={`${styles.button} ${styles.delete}`}>x</button>
    </li>
  )
}

export default CartItem
