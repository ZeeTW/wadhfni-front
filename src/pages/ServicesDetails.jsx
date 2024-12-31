import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

const ServiceDetails = () => {
  const [searchParams] = useSearchParams()
  const serviceId = searchParams.get('serviceId') // Get serviceId from query params
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        if (!serviceId) return
        const res = await axios.get(`/api/services/${serviceId}`)
        setService(res.data)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch service details:', error)
        setLoading(false)
      }
    }
    fetchServiceDetails()
  }, [serviceId])

  if (loading) return <p>Loading service details...</p>
  if (!service) return <p>Service not found.</p>

  return (
    <div className="service-details">
      <section className="image-container">
        <div>
          <img
            src={service.background_image || 'https://via.placeholder.com/300'}
            alt={service.title}
          />
        </div>
      </section>
      <section className="details">
        <div className="flex-row space">
          <h2>{service.title}</h2>
          <h2>Price: ${service.price}</h2>
        </div>
        <div>
          <h3>Description</h3>
          <p>{service.description}</p>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetails
