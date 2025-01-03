import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import OrderDetails from './pages/OrderDetails'
import Profile from './pages/Profile'
import ServiceForm from './pages/ServiceForm'
import ServiceDetails from './pages/ServiceDetails'
import './App.css'
import { CheckSession } from './services/Auth'
import Services from './pages/Services'
import UpdateProfile from './pages/UpdateProfile'
import ShowServices from './pages/ShowServices'
import ShowOrders from './pages/ShowOrders'

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <div>
      <main>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/OrderDetails/:orderId" element={<OrderDetails />} />
          <Route path="/PendingOrder" element={<PendingOrder />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ViewCategories" element={<ViewCategories />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ServiceForm" element={<ServiceForm />} />
          <Route path="/services" element={<Services />} />{' '}
          <Route path="/UpdateProfile" element={<UpdateProfile />} />
          <Route path="/ShowServices" element={<ShowServices />} />
          <Route path="/orders/:userId" element={<ShowOrders />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
