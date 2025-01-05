import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Search from '../components/Search'
import CategoryCard from '../components/CategoryCard'
import ServiceCard from '../components/ServiceCard'

const Home = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      console.error('Token is missing! Redirecting to Sign In...')
      navigate('/signin')
    }
  }, [navigate])

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(
        `http://localhost:3001/services/search?query=${searchValue}`
      )
      setSearchResults(response.data)
    } catch (error) {
      console.error('Error fetching search results:', error)
    }
  }

  return (
    <div>

      <div className="search-bar-container">

        <Search
          value={searchValue}
          onChange={handleSearchChange}
          onSubmit={handleSearchSubmit}
        />
      </div>


      <h2>Search Results</h2>
      <section className="search-results container-grid">
        {searchResults.length > 0 ? (
          searchResults.map((service) => (
            <ServiceCard
              key={service._id}
              name={service.title}
              price={service.price}
              onClick={() => console.log(`Clicked on ${service.title}`)}
            />
          ))
        ) : (
          <p>No results found!</p>
        )}
      </section>


      <div>
        <CategoryCard />
      </div>
    </div>
  )
}

export default Home
