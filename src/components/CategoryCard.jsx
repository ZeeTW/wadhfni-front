import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetCategories } from '../services/Category'

const CategoryCard = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await GetCategories()
        setCategories(data)
      } catch (error) {
        console.error('Failed to fetch categories:', error)
      }
    }
    fetchCategories()
  }, [])

  return (
    <div className="category-cards-container">
      <h3>Browse by Categories</h3>
      <div className="category-cards">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div key={category._id} className="category-card">
              <Link
                to={`/CategoryServices/${category._id}`}
                className="category-link"
              >
                <div className="img-wrapper">
                  <img
                    src={
                      category.image || 'https://via.placeholder.com/150' // Default image if none exists
                    }
                    alt={category.name}
                  />
                </div>
                <div className="info-wrapper flex-col">
                  <h4>{category.name}</h4>
                  <p>{category.description}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>
    </div>
  )
}

export default CategoryCard
