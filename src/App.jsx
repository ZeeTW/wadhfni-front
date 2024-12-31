import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import NavLinks from './components/NavLinks'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Feed from './pages/Feed'
import Cover from './pages/Cover'
import Home from './pages/Home'
import About from './pages/About'
import OrderDetails from './pages/OrderDetails'
import PendingOrder from './pages/PendingOrder'
import Profile from './pages/Profile'
import ServiceForm from './pages/ServiceForm'
import ServiceDetails from './pages/ServiceDetails'
import ViewCategories from './pages/ViewCategories'
import './App.css'
import { CheckSession } from './services/Auth'
const App = () => {
  const [user, setUser] = useState(null)
  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])
  return (
    <div className="App">
      <Nav user={user} handleLogOut={handleLogOut} />
      
      <main>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/OrderDetails" element={<OrderDetails />} />
          <Route path="/PendingOrder" element={<PendingOrder />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ViewCategories" element={<ViewCategories />} />
          <Route path="/ServiceDetails" element={<ServiceDetails />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/feed" element={<Feed user={user} />} />
          <Route path="/ServiceForm" element={<ServiceForm />} />
        </Routes>
      </main>
    </div>
  )
}
export default App