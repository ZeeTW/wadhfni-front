import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api' // Import the Client instance
import ServiceDetailsCard from '../components/ServiceDetailsCard'

const ServiceDetails = () => {
  const { serviceId } = useParams() // Get the serviceId from the URL
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch the service details based on the serviceId
  useEffect(() => {
    const fetchServiceDetails = async () => {
      setLoading(true)
      setError(null)

      try {
        // Use the Client instance to make the request
        const response = await Client.get(`/services/${serviceId}`)
        setService(response.data)
      } catch (error) {
        console.error('Failed to fetch service details:', error)
        setError('Failed to fetch service details. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    if (serviceId) {
      fetchServiceDetails()
    }
  }, [serviceId]) // Re-fetch if the serviceId changes

  // Handle the order button click
  const handleOrderClick = () => {
    console.log('Order placed for service:', service.title)
    // You can integrate further order functionality here (e.g., redirecting to an order page or API call)
  }

  // Return content based on the state (loading, error, or data)
  return (
    <div className="service-details-container">
      <h2>Service Details</h2>

      {loading ? (
        <p>Loading service details...</p>
      ) : error ? (
        <p>{error}</p>
      ) : service ? (
        <ServiceDetailsCard service={service} onOrderClick={handleOrderClick} />
      ) : (
        <p>Service not found.</p>
      )}
    </div>
  )
}

export default ServiceDetails
