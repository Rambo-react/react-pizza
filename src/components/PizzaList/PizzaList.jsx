import React from 'react'
import PizzaItem from './PizzaItem'
import styles from './PizzaList.module.scss'
import PizzaSkeleton from './PizzaSkeleton'

const PizzaList = ({ isLoading, pizzaList, limitPage }) => {
  let content

  if (isLoading) {
    content = [...new Array(limitPage)].map((item, index) => (
      <PizzaSkeleton key={index} />
    ))
  }

  if (!isLoading && pizzaList.length > 0) {
    content = pizzaList.map((item) => <PizzaItem key={item.id} {...item} />)
  }

  return <div className={styles.list}>{content}</div>
}

export default PizzaList
