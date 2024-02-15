import React from 'react'

import styles from './HomePage.module.scss'
import Categories from '../components/Categories/Categories'
import PizzaList from '../components/PizzaList/PizzaList'
import Sort from '../components/Sort/Sort'

const HomePage = () => {
  return (
    <>
      <div className={styles['content_top']}>
        <Categories />
        <Sort />
      </div>
      <PizzaList />
    </>
  )
}

export default HomePage
