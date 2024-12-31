import { Route, Routes } from 'react-router'
import './App.css'
<<<<<<< HEAD
import { CheckSession } from './services/Auth'
=======
import ViewCategories from './pages/ViewCategories'
>>>>>>> ae852e6ff9a7851736c3c54eafcbd33600d2fe8d

const App = () => {
  return (
<<<<<<< HEAD
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
=======
    <div>
      <main>
        <Routes>
          <Route path="/" element={<ViewCategories />} />
>>>>>>> ae852e6ff9a7851736c3c54eafcbd33600d2fe8d
        </Routes>
      </main>
    </div>
  )
}

export default App
