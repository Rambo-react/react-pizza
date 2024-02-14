import React from 'react'
import styles from './HeaderLogo.module.css'
import icon from '../../../assets/svg/pizza-svg.svg'

const HeaderLogo = () => {
  return (
    <a className={styles.logo} href='/'>
      <img className={styles.image} src={icon} />
      <div>
        <h1 className={styles.title}>React Pizza</h1>
        <p className={styles.slogan}>Самая рекативная пицца в мире!</p>
      </div>
    </a>
  )
}

export default HeaderLogo
