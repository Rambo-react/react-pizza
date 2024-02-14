import React, { useState } from 'react'
import styles from './Categories.module.css'

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0)

  const content = categories.map((el, index) => (
    <li
      className={index === activeCategory ? styles.active : ''}
      key={el}
      onClick={() => setActiveCategory(index)}
    >
      {el}
    </li>
  ))

  return <ul className={styles.categories}>{content}</ul>
}

export default Categories
