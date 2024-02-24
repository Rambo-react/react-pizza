import React, { useState } from 'react'
import styles from './PizzaItem.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/slices/cartSlice'

export const typeNames = ['традиционное', 'тонкое']

const PizzaItem = ({ id, sizes, types, imageUrl, title, price }) => {
  const [activeType, setActiveType] = useState(0)
  const [activeSize, setActiveSize] = useState(0)
  const addedCount = useSelector((state) =>
    state.cart.items.reduce((count, item) => {
      if (item.id === id) {
        return count + item.count
      }
      return count
    }, 0)
  )
  const dispatch = useDispatch()

  const sizeList = sizes.map((size, i) => (
    <li
      onClick={() => setActiveSize(i)}
      className={i === activeSize ? styles.active : ''}
      key={size}
    >
      {size}
    </li>
  ))

  const contentTypes = types.map((typeIndex, i) => (
    <li
      onClick={() => setActiveType(i)}
      className={i === activeType ? styles.active : ''}
      key={typeIndex}
    >
      {typeNames[typeIndex]}
    </li>
  ))

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: activeType,
      size: sizes[activeSize],
    }

    dispatch(addItem(item))
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <img className={styles.image} src={imageUrl} alt={title} />
      </div>

      <h4 className={styles.title}>{title}</h4>
      <div className={styles.selector}>
        <ul>{contentTypes}</ul>
        <ul>{sizeList}</ul>
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.price}>{price} руб.</h3>
        <button onClick={onClickAdd} className={styles.button}>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span>Добавить</span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </button>
      </div>
    </div>
  )
}

export default PizzaItem
