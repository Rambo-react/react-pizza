import React from 'react'
import styles from './CartItem.module.scss'
import { typeNames } from '../../PizzaList/PizzaItem'
import { useDispatch } from 'react-redux'
import {
  addItem,
  removeIdenticalItems,
  removeItem,
} from '../../../redux/slices/cartSlice'

const CartItem = ({ id, title, price, imageUrl, type, size, count }) => {
  const typePizza = typeNames[type]

  const dispatch = useDispatch()

  const onAddItemHandler = () => {
    dispatch(addItem({ id, title, price, imageUrl, type, size }))
  }
  const onRemoveItemHandler = () => {
    dispatch(removeItem({ id, type, size }))
  }

  return (
    <li className={styles.item}>
      <div className={styles.title}>
        <img alt={title} src={imageUrl} />
        <div className={styles.description}>
          <h2>{title}</h2>
          <p>
            <span>{typePizza}, </span>
            <span>{size} см.</span>
          </p>
        </div>
      </div>
      <div className={styles.counter}>
        <button className={styles.button} onClick={onRemoveItemHandler}>
          -
        </button>
        <span className={styles.count}>{count}</span>
        <button className={styles.button} onClick={onAddItemHandler}>
          +
        </button>
      </div>
      <div className={styles.price}>{price * count} руб.</div>
      <button
        className={`${styles.button} ${styles.delete}`}
        onClick={() => dispatch(removeIdenticalItems({ id, type, size }))}
      >
        x
      </button>
    </li>
  )
}

export default CartItem
