import Header from './components/Header/Header'
import Card from './components/UI/Card'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <Card>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/home' element={<HomePage />} /> */}
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Card>
  )
}

export default App
