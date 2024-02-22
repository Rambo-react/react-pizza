import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import SearchIcon from '../UI/SearchIcon'
import SearchClearIcon from '../UI/SearchClearIcon'
import styles from './Search.module.scss'
import useDebounce from '../../hooks/useDebounce'
import { setSearchValue } from '../../redux/slices/filterSlice'

const Search = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const debouncedSearchValue = useDebounce(inputValue, 1000)

  useEffect(() => {
    dispatch(setSearchValue(debouncedSearchValue))
  }, [debouncedSearchValue, dispatch])

  const onChangeHandler = (e) => {
    setInputValue(e.target.value)
  }

  const onClearHandler = () => {
    setInputValue('')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <SearchIcon />
      </div>
      <input
        name='search'
        value={inputValue}
        onChange={onChangeHandler}
        placeholder='Поиск пицц...'
      />
      {inputValue && (
        <div onClick={onClearHandler} className={styles.clear}>
          <SearchClearIcon />
        </div>
      )}
    </div>
  )
}

export default Search
