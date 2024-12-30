import React, { useState } from 'react'

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
      <Search
        value={searchValue}
        onChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
      />
    </div>
  )
}

export default Home
