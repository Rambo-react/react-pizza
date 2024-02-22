import styles from './Categories.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId, setCurrentPage } from '../../redux/slices/filterSlice'

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

const Categories = () => {
  const categoryId = useSelector((state) => state.filter.categoryId)
  const dispatch = useDispatch()

  const onSelectCategoryHandler = (index) => {
    dispatch(setCategoryId(index))
    dispatch(setCurrentPage(1))
  }

  const content = categories.map((el, index) => (
    <li
      className={index === categoryId ? styles.active : ''}
      key={el}
      onClick={() => onSelectCategoryHandler(index)}
    >
      {el}
    </li>
  ))

  return <ul className={styles.categories}>{content}</ul>
}

export default Categories
