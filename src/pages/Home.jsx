import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Search from '../components/Search' // Assuming you already have a Search component
import NavLinks from '../components/NavLinks' // Assuming you have NavLinks for routing

// Service to fetch categories (this will call your backend API)
const GetCategories = async () => {
  try {
    const response = await fetch('/api/categories') // Ensure this matches your API route
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

const Home = () => {
  const [categories, setCategories] = useState([])
  const [searchValue, setSearchValue] = useState('')

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await GetCategories()
      setCategories(data)
    }
    fetchCategories()
  }, [])

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
      <NavLinks />

      {/* Search Bar */}
      <div className="search-bar-container">
        <Search
          value={searchValue}
          onChange={handleSearchChange}
          onSubmit={handleSearchSubmit}
        />
      </div>

      {/* Categories Section */}
      <div className="category-cards-container">
        <h3>Browse by Categories</h3>
        <div className="category-cards">
          {categories.length > 0 ? (
            categories.map((category) => (
              <div key={category._id} className="category-card">
                <Link
                  to={`/services?category=${category.name}`} // Link to services page filtered by category
                  className="category-link"
                >
                  <div className="category-card-content">
                    <h4>{category.name}</h4>
                    <p>{category.description}</p>{' '}
                    {/* Optionally show category description */}
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>Loading categories...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
