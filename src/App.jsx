import { Route, Routes } from 'react-router'
import './App.css'
import { CheckSession } from './services/Auth'

const App = () => {
  return (
    <div className="App">
      <Nav user={user} handleLogOut={handleLogOut} />

      <NavLinks />
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
