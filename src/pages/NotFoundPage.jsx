import React from 'react'
import styles from './NotFoundPage.module.scss'

const NotFoundPage = () => {
  return (
    <div className={styles.title}>
      <h3>Ничего не найдено</h3>
      <p>К сожалению данная страница отсутствует...</p>
    </div>
  )
}

export default NotFoundPage
