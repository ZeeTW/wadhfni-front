import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ServiceDetailsCard from '../components/ServiceDetailsCard'

const ServiceDetails = () => {
  const { serviceId } = useParams() // Extract serviceId from the URL
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchService = async () => {
      if (serviceId) {
        setLoading(true) // Reset loading state before fetching data
        try {
          const response = await axios.get(
            `http://localhost:3001/services/${serviceId}`
          )
          setService(response.data) // Set the fetched service data
        } catch (error) {
          console.error('Failed to fetch service:', error)
        } finally {
          setLoading(false)
        }
      }
    }
    fetchService()
  }, [serviceId]) // Refetch when serviceId changes

  return (
    <div className="service-details">
      <h2>Service Details</h2>
      {loading ? (
        <p>Loading service...</p>
      ) : service ? (
        <ServiceDetailsCard service={service} />
      ) : (
        <p>Service not found.</p>
      )}
    </div>
  )
}

export default ServiceDetails
