import React from 'react'
import styles from './HeaderLogo.module.scss'
import icon from '../../../assets/svg/pizza-svg.svg'

const HeaderLogo = () => {
  return (
    <a className={styles.logo} href='/'>
      <img src={icon} />
      <div>
        <h1>React Pizza</h1>
        <p>Самая рекативная пицца в мире!</p>
      </div>
    </a>
  )
}

export default HeaderLogo
