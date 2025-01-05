import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    duration: '',
    categoryId: ''
  })

  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3001/categories')
        setCategories(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    getCategories()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post(
        'http://localhost:3001/services',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      console.log('Service Created:', response.data)
      navigate(`/home`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h3>Fill In Your Service Form</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="duration">Duration:</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="categoryId">Category:</label>
            <select
              name="categoryId"
              id="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a Category
              </option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ServiceForm
