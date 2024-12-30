import { Route, Routes } from 'react-router'
import './App.css'
import OrderDetails from './pages/OrderDetails'
import ViewCategories from './pages/ViewCategories'

const App = () => {
  return (
    <div>
      <main>
          <Routes>
            <Route path="/" element={<ViewCategories />} />
          </Routes>
      </main>
    </div>
  )
}

export default App
