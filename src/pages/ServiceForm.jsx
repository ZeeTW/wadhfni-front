import { useEffect, useState } from 'react'
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData({
      title: '',
      price: '',
      description: '',
      duration: '',
      categoryId: ''
    })
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
                <option key={category.id} value={category.id}>
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
