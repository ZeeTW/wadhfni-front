import { Route, Routes } from 'react-router'
import './App.css'
import ViewCategories from './pages/ViewCategories'

const App = () => {
  return (
    <div>
      <main>
        <Router>
          <Routes>
            <Route path="./pages/ViewCategories" element={<ViewCategories />} />
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App
