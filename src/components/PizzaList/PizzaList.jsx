import React, { useEffect, useState } from 'react'
import PizzaItem from './PizzaItem'
import styles from './PizzaList.module.scss'
import PizzaSkeleton from './PizzaSkeleton'

const PizzaList = () => {
  const [pizzaList, setPizzaList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getPizza = async () => {
      setIsLoading(true)
      const responce = await fetch(
        'https://65cb86f8efec34d9ed87b36c.mockapi.io/pizza-api/menu'
      )
      const data = await responce.json()

      setPizzaList(data)
      setIsLoading(false)
      window.scrollTo(0, 0)
    }

    getPizza()
  }, [])

  let content

  if (isLoading) {
    content = [...new Array(6)].map((item, index) => (
      <PizzaSkeleton key={index} />
    ))
  }

  if (!isLoading && pizzaList.length > 0) {
    content = pizzaList.map((item) => <PizzaItem key={item.id} {...item} />)
  }

  return <div className={styles.list}>{content}</div>
}

export default PizzaList
