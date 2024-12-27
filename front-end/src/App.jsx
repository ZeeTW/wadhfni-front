import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import ViewCategories from './pages/ViewCategories'
import Home from './pages/Home'


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
        <Nav
        user={user}
        handleLogOut={handleLogOut}
        />
        <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn setUser={setUser} />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/ViewCategories" element={<ViewCategories user={ user } />} />
        </Routes>
        </main>
    </div>
    )
}

export default App