import React from 'react'
import styles from './HeaderLogo.module.scss'
import icon from '../../../assets/svg/pizza-svg.svg'
import { Link } from 'react-router-dom'
import {
  initialState as filterInitialState,
  setFilters,
} from '../../../redux/slices/filterSlice'
import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router'

const HeaderLogo = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  const onClickHandler = () => {
    dispatch(setFilters({ ...filterInitialState }))
    // navigate('/')
    // window.location.search = ''
  }

  return (
    <Link to='/' className={styles.logo} onClick={onClickHandler}>
      <img src={icon} alt='header-logo' />
      <div>
        <h1>React Pizza</h1>
        <p>Самая рекативная пицца в мире!</p>
      </div>
    </Link>
  )
}

export default HeaderLogo
