import { Route, Routes } from 'react-router'
import './App.css'
import CategoryPage from './pages/Category'

const App = () => {

  return(
    <div>
      <main>
        <Router>
          <Routes>
            <Route path='/category/:categoryId' element= {<CategoryPage />} />
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App
