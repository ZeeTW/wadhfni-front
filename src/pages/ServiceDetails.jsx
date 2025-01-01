import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ServiceDetailsCard from '../components/ServiceDetailsCard'

const ServiceDetails = () => {
  const { serviceId } = useParams() // Get serviceId from URL
  const [service, setService] = useState(null)

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/services/${serviceId}`
        )
        setService(response.data)
      } catch (error) {
        console.error('Failed to fetch service:', error)
      }
    }

    if (serviceId) {
      fetchService()
    }
  }, [serviceId]) // Re-fetch if serviceId changes

  return (
    <div className="service-details-page">
      <h2>Service Details</h2>
      {service ? (
        <ServiceDetailsCard service={service} />
      ) : (
        <p>Service not found or loading...</p>
      )}
    </div>
  )
}

export default ServiceDetails
