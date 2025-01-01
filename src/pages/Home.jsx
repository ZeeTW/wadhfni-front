import { useState, useEffect } from 'react'
import Search from '../components/Search' // Assuming you already have a Search component

import CategoryCard from '../components/CategoryCard' // Import CategoryCard component

const Home = () => {
  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log('Token on /home page load:', token)
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
    console.log('Search for:', searchValue)
    // Optionally, perform a search here based on the search value
  }

  return (
    <div>
      {/* Navigation Bar */}

      {/* Search Bar */}
      <div className="search-bar-container">
        <Search
          value={searchValue}
          onChange={handleSearchChange}
          onSubmit={handleSearchSubmit}
        />
      </div>

      {/* Category Card */}
      <div>
        <CategoryCard /> {/* This will handle displaying the categories */}
      </div>
    </div>
  )
}

export default Home
