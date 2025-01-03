import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const ViewCategories = () => {
  const { genreId } = useParams()
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`/api/categories/${genreId}`)
        setCategories(response.data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchCategories()
  }, [genreId])

  return (
    <div>
      <h2>Categories</h2>

      <div className="category-list">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div key={category.id} className="category-card">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </div>

      <div className="view-categories-button">
        <button onClick={() => navigate('/categories')}>
          View All Categories
        </button>
      </div>
    </div>
  )
}

export default ViewCategories
