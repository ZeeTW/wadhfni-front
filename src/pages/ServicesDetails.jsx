import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Client from './api' // Import your Axios Client instance

const ServiceDetails = () => {
  const { serviceId } = useParams()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await Client.get(`/services/${serviceId}`)
        setService(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch service details:', error)
        setError('Failed to fetch service details. Please try again later.')
        setLoading(false)
      }
    }

    if (serviceId) {
      fetchServiceDetails()
    }
  }, [serviceId])

  if (loading) return <p>Loading service details...</p>
  if (error) return <p>{error}</p>
  if (!service) return <p>Service not found.</p>

  return (
    <div className="service-details">
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <p>
        <strong>Price:</strong> ${service.price}
      </p>
      <p>
        <strong>Duration:</strong> {service.duration}
      </p>
      <p>
        <strong>Status:</strong> {service.status}
      </p>
      <button onClick={() => console.log('Order button clicked')}>
        Order Service
      </button>
    </div>
  )
}

export default ServiceDetails
