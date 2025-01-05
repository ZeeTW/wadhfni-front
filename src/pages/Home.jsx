import { useState, useEffect } from 'react'
import Search from '../components/Search' // Assuming you already have a Search component

import CategoryCard from '../components/CategoryCard' // Import CategoryCard component

const Home = () => {
  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
        console.error('Token is missing! Redirecting to Sign In...')
        navigate('/signin') // Redirect back to login if token is missing
    }
}, [])
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()

    // Optionally, perform a search here based on the search value
  }

  return (
    <div>
      <div>
        <Search
          value={searchValue}
          onChange={handleSearchChange}
          onSubmit={handleSearchSubmit}
        />
      </div>

      <div>
        <CategoryCard />
      </div>
    </div>
  )
}

export default Home
