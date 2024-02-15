import styles from './App.module.scss'
import Categories from './components/Categories/Categories'
import Header from './components/Header/Header'
import PizzaList from './components/PizzaList/PizzaList'
import Card from './components/UI/Card'
import Sort from './components/Sort/Sort'

const App = () => {
  return (
    <Card>
      <Header />
      <div className={styles['content_top']}>
        <Categories />
        <Sort />
      </div>
      <PizzaList />
    </Card>
  )
}

export default App
