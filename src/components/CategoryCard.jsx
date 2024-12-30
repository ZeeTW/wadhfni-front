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
                to={`/services?category=${category.name}`}
                className="category-link"
              >
                <div className="category-card-content">
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
