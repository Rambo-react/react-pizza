import styles from './Categories.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId } from '../../redux/slices/filterSlice'

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

  const content = categories.map((el, index) => (
    <li
      className={index === categoryId ? styles.active : ''}
      key={el}
      onClick={() => dispatch(setCategoryId(index))}
    >
      {el}
    </li>
  ))

  return <ul className={styles.categories}>{content}</ul>
}

export default Categories
