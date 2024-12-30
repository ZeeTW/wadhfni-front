import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetCategories } from '../services/Category' // Assuming you already have this service

const CategoryCard = () => {
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(null)

  // Fetch categories from the backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetching all categories (list of categories)
        const data = await GetCategories()
        setCategories(data) // Save categories to state
      } catch (error) {
        setError('Error fetching categories') // Handle any errors
        console.error('Error fetching categories:', error)
      }
    }

    fetchCategories()
  }, [])

  return (
    <div className="category-cards-container">
      <h3>Browse by Categories</h3>
      <div className="category-cards">
        {/* If there's an error, show it */}
        {error ? (
          <p>{error}</p>
        ) : categories.length > 0 ? (
          categories.map((category) => (
            <div key={category._id} className="category-card">
              <Link
                to={`/services?category=${category.name}`} // Navigate to services page based on category name
                className="category-link"
              >
                <div className="category-card-content">
                  <h4>{category.name}</h4>
                  <p>{category.description}</p>{' '}
                  {/* Show category description */}
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading categories...</p> // Loading state while data is being fetched
        )}
      </div>
    </div>
  )
}

export default CategoryCard
