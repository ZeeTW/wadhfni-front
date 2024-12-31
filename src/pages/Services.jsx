import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom' 
import axios from 'axios'
import ServiceCard from '../components/ServiceCard'  

const Services = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  // Use useLocation to get query params from the URL
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const categoryId = queryParams.get('categoryId')

  useEffect(() => {
    const fetchServices = async () => {
      if (categoryId) {
        try {
          const response = await axios.get(`http://localhost:3001/services?categoryId=${categoryId}`)
          setServices(response.data)
          setLoading(false)
        } catch (error) {
          console.error('Failed to fetch services:', error)
          setLoading(false)
        }
      }
    }
    fetchServices()
  }, [categoryId]) // Re-fetch services when categoryId changes

  return (
    <div className="service-list">
      <h2>Services in this Category</h2>
      {loading ? (
        <p>Loading services...</p>
      ) : services.length > 0 ? (
        services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))
      ) : (
        <p>No services found for this category.</p>
      )}
    </div>
  )
}

export default Services
