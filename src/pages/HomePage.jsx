import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './HomePage.module.scss'
import Categories from '../components/Categories/Categories'
import PizzaList from '../components/PizzaList/PizzaList'
import Sort from '../components/Sort/Sort'

const HomePage = () => {
  const [pizzaList, setPizzaList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const categoryId = useSelector((state) => state.filter.categoryId)
  const sort = useSelector((state) => state.filter.sort)

  useEffect(() => {
    const getPizza = async () => {
      setIsLoading(true)
      const category = categoryId > 0 ? `category=${categoryId}` : ''
      const sortType = `sortby=${sort.sortProperty}`
      const sortOrder = `order=${sort.order}`

      const baseUrl =
        'https://65cb86f8efec34d9ed87b36c.mockapi.io/pizza-api/menu'

      const responce = await fetch(
        `${baseUrl}?${category}&${sortType}&${sortOrder}`
      )
      const data = await responce.json()

      setPizzaList(data)
      setIsLoading(false)
      window.scrollTo(0, 0)
    }

    getPizza()
  }, [categoryId, sort])

  return (
    <>
      <div className={styles['content_top']}>
        <Categories />
        <Sort />
      </div>
      <PizzaList isLoading={isLoading} pizzaList={pizzaList} />
    </>
  )
}

export default HomePage
