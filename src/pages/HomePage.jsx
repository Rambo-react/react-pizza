import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './HomePage.module.scss'
import Categories from '../components/Categories/Categories'
import PizzaList from '../components/PizzaList/PizzaList'
import Sort from '../components/Sort/Sort'
import NotFoundPage from './NotFoundPage'

const HomePage = () => {
  const [pizzaList, setPizzaList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isFoundItems, setIsFoundItems] = useState(true)

  const categoryId = useSelector((state) => state.filter.categoryId)
  const sort = useSelector((state) => state.filter.sort)
  const searchValue = useSelector((state) => state.filter.searchValue)

  useEffect(() => {
    const getPizza = async () => {
      setIsLoading(true)
      const category = categoryId > 0 ? `category=${categoryId}` : ''
      const sortType = `sortby=${sort.sortProperty}`
      const sortOrder = `order=${sort.order}`
      const searchStr = searchValue.length > 0 ? `title=${searchValue}` : ''

      const baseUrl =
        'https://65cb86f8efec34d9ed87b36c.mockapi.io/pizza-api/menu'

      const responce = await fetch(
        `${baseUrl}?${category}&${searchStr}&${sortType}&${sortOrder}`
      )
      setIsLoading(false)

      if (responce.ok) {
        const data = await responce.json()
        setPizzaList(data)
        setIsFoundItems(true)
      } else {
        setIsFoundItems(false)
      }
      window.scrollTo(0, 0)
    }

    getPizza()
  }, [categoryId, sort.sortProperty, sort.order, searchValue])

  return (
    <>
      <div className={styles['content_top']}>
        <Categories />
        <Sort />
      </div>
      {isFoundItems ? (
        <PizzaList isLoading={isLoading} pizzaList={pizzaList} />
      ) : (
        <NotFoundPage />
      )}
    </>
  )
}

export default HomePage
