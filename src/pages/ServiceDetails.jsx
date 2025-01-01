import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ServiceDetailsCard from '../components/ServiceDetailsCard'

const ServiceDetails = () => {
  const { serviceId } = useParams() // Get serviceId from URL
  const [service, setService] = useState(null)
  const navigate = useNavigate() // Initialize the navigate function

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

  const handleClick = async () => {
    if (!service) {
      console.log('Service not available')
      return
    }

    try {
      // Prepare order details with just the serviceId
      const orderDetails = {
        serviceId: service._id // Only serviceId
      }

      // Send POST request to create the order
      const response = await axios.post(
        'http://localhost:3001/orders',
        orderDetails
      )

      // Redirect to the OrderDetails page with the newly created order ID
      navigate(`/orders/${response.data._id}`)
    } catch (error) {
      console.error('Error creating order:', error)
    }
  }

  return (
    <div className="service-details-page">
      <h2>Service Details</h2>
      {service ? (
        <div>
          <ServiceDetailsCard key={service._id} service={service} />
          {/* Direct button click without form */}
          <button onClick={handleClick}>Order this Service</button>
        </div>
      ) : (
        <p>Service not found or loading...</p>
      )}
    </div>
  )
}

export default ServiceDetails
