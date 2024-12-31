// src/pages/CategoryServices.jsx
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetServicesByCategory } from '../services/service' // Ensure you have this function

const CategoryServices = () => {
  const { categoryId } = useParams() // Get categoryId from the URL
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Ensure categoryId is treated as a string
        const data = await GetServicesByCategory(categoryId.toString())
        console.log('Fetched services:', data)

        const servicesData = Array.isArray(data) ? data : data.services || []
        setServices(servicesData)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch services:', error)
        setLoading(false)
      }
    }

    fetchServices()
  }, [categoryId])

  return (
    <div>
      <h1>Services in Category</h1>
      {loading ? (
        <p>Loading services...</p>
      ) : !Array.isArray(services) || services.length === 0 ? (
        <p>No services available for this category.</p>
      ) : (
        <div className="services-list">
          {services.map((service) => (
            <div key={service._id} className="service-card">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <p>Price: {service.price}</p>
              <p>Duration: {service.duration}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CategoryServices
