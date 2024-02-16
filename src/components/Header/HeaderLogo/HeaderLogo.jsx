import React from 'react'
import styles from './HeaderLogo.module.scss'
import icon from '../../../assets/svg/pizza-svg.svg'
import { Link } from 'react-router-dom'

const HeaderLogo = () => {
  return (
    <Link className={styles.logo} to='/'>
      <img src={icon} alt='header-logo' />
      <div>
        <h1>React Pizza</h1>
        <p>Самая рекативная пицца в мире!</p>
      </div>
    </Link>
  )
}

export default HeaderLogo
