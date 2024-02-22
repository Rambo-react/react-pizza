import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import styles from './HomePage.module.scss'
import Categories from '../components/Categories/Categories'
import PizzaList from '../components/PizzaList/PizzaList'
import Sort, { sortNames } from '../components/Sort/Sort'
import NotFoundPage from './NotFoundPage'
import Pagination from '../components/Pagination/Pagination'
import { setFilters, setTotalPages } from '../redux/slices/filterSlice'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const [pizzaList, setPizzaList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isFoundItems, setIsFoundItems] = useState(true)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isSearch = useRef(false)
  const isMounted = useRef(false)

  const categoryId = useSelector((state) => state.filter.categoryId)
  const sort = useSelector((state) => state.filter.sort)
  const searchValue = useSelector((state) => state.filter.searchValue)
  const totalPages = useSelector((state) => state.filter.totalPages)
  const currentPage = useSelector((state) => state.filter.currentPage)
  const limitPage = useSelector((state) => state.filter.limitPage)

  useEffect(() => {
    if (window.location.search) {
      const urlParams = qs.parse(window.location.search.substring(1))
      const sort = sortNames.find(
        (obj) =>
          obj.sortProperty === urlParams.sortBy && obj.order === urlParams.order
      )
      dispatch(
        setFilters({
          ...urlParams,
          searchValue: urlParams.title,
          sort,
        })
      )
      isSearch.current = true
    }
  }, [dispatch])

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryId,
        title: searchValue,
        sortBy: sort.sortProperty,
        order: sort.order,
      })
      navigate(`?${queryString}`)
    }
    isMounted.current = true
  }, [categoryId, searchValue, sort.sortProperty, sort.order, navigate])

  useEffect(() => {
    const getPizza = async () => {
      setIsLoading(true)
      const category = categoryId > 0 ? `category=${categoryId}` : ''
      const sortType = `sortby=${sort.sortProperty}`
      const sortOrder = `order=${sort.order}`
      const searchStr = searchValue.length > 0 ? `title=${searchValue}` : ''

      const baseUrl =
        'https://65cb86f8efec34d9ed87b36c.mockapi.io/pizza-api/menu'

      try {
        const response = await axios.get(
          `${baseUrl}?${category}&${searchStr}&${sortType}&${sortOrder}`
        )
        const countPages = Math.ceil(response.data.length / limitPage)
        dispatch(setTotalPages(countPages))
        setPizzaList(response.data)
        setIsFoundItems(true)
      } catch (error) {
        setIsFoundItems(false)
      }
      setIsLoading(false)
      window.scrollTo(0, 0)
    }

    if (!isSearch.current) {
      getPizza()
    }

    isSearch.current = false
  }, [
    categoryId,
    sort.sortProperty,
    sort.order,
    searchValue,
    currentPage,
    limitPage,
    dispatch,
  ])

  const lastPizzaIndex = limitPage * currentPage
  const firstPizzaIndex = lastPizzaIndex - limitPage
  const pizzasOnPage = pizzaList.slice(firstPizzaIndex, lastPizzaIndex)

  return (
    <>
      <div className={styles['content_top']}>
        <Categories />
        <Sort />
      </div>
      {isFoundItems ? (
        <>
          <PizzaList isLoading={isLoading} pizzaList={pizzasOnPage} />
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
      ) : (
        <NotFoundPage />
      )}
    </>
  )
}

export default HomePage
