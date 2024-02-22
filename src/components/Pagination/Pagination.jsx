import React from 'react'
import styles from './Pagination.module.scss'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../redux/slices/filterSlice'

const Pagination = ({ currentPage, totalPages }) => {
  const dispatch = useDispatch()

  const pages = [...new Array(totalPages)].map((el, index) => (
    <span
      onClick={() => dispatch(setCurrentPage(index + 1))}
      key={index}
      className={currentPage === index + 1 ? styles.active : ''}
    >
      {index + 1}
    </span>
  ))

  const prevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1))
    }
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1))
    }
  }

  return (
    <div className={styles.pagination}>
      <span onClick={prevPage}>&lt;</span>
      {pages}
      <span onClick={nextPage}>&gt;</span>
    </div>
  )
}

export default Pagination
