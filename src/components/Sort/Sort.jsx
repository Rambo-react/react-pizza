import React, { useState } from 'react'
import styles from './Sort.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPage, setSort } from '../../redux/slices/filterSlice'

export const sortNames = [
  { name: 'популярности(возрастанию)', sortProperty: 'rating', order: 'asc' },
  { name: 'популярности(убыванию)', sortProperty: 'rating', order: 'desc' },
  { name: 'цене(возрастанию)', sortProperty: 'price', order: 'asc' },
  { name: 'цене(убыванию)', sortProperty: 'price', order: 'desc' },
  { name: 'алфавиту(возрастанию)', sortProperty: 'title', order: 'asc' },
  { name: 'алфавиту(убыванию)', sortProperty: 'title', order: 'desc' },
]

const Sort = () => {
  const sort = useSelector((state) => state.filter.sort)
  const dispatch = useDispatch()

  const [isVisiblePopup, setIsVisiblePopap] = useState(false)

  const selectSortHandler = (el) => {
    dispatch(setSort(el))
    dispatch(setCurrentPage(1))
    setIsVisiblePopap(false)
  }

  const sortList = sortNames.map((el) => (
    <li
      className={sort.name === el.name ? styles.active : ''}
      key={el.name}
      onClick={() => selectSortHandler(el)}
    >
      {el.name}
    </li>
  ))

  return (
    <div className={styles.sort}>
      <div className={styles.label}>
        <svg
          width='10'
          height='6'
          viewBox='0 0 10 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          ></path>
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setIsVisiblePopap(!isVisiblePopup)}>
          {sort.name}
        </span>
      </div>
      {isVisiblePopup && (
        <div className={styles.popup}>
          <ul>{sortList}</ul>
        </div>
      )}
    </div>
  )
}

export default Sort
