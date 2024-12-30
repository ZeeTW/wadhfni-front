import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import NavLinks from '../components/NavLinks'
import CategoryCard from '../components/CategoryCard' // Importing CategoryCard

const Home = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log('Search for:', searchValue)
  }

  return (
    <div>
      {/* Search Bar */}
      <Search
        value={searchValue}
        onChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
      />
      {/* Category Section */}
      <CategoryCard /> {/* Add CategoryCard component below the search */}
    </div>
  )
}

export default Home
