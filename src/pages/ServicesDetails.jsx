import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ServiceDetails = () => {
  const [service, setService] = useState(null) // State to store service details
  const [loading, setLoading] = useState(true) // Loading state to manage UI

  const location = useLocation() // Get the current location
  const queryParams = new URLSearchParams(location.search) // Extract query params from the URL
  const serviceId = queryParams.get('serviceId') // Get serviceId from query parameters

  const navigate = useNavigate() // To navigate to different pages

  // Fetch service details when the serviceId changes or the page loads
  useEffect(() => {
    const fetchServiceDetails = async () => {
      if (serviceId) {
        try {
          console.log('Fetching details for serviceId:', serviceId) // Log serviceId for debugging
          // Send serviceId to backend to fetch service details
          const response = await axios.get(
            `http://localhost:3001/api/services/${serviceId}`
          )
          setService(response.data) // Set the fetched service data to state
        } catch (error) {
          console.error('Failed to fetch service details:', error) // Handle error if the request fails
        } finally {
          setLoading(false) // Set loading to false once data is fetched
        }
      }
    }
    fetchServiceDetails() // Call the function to fetch service details
  }, [serviceId]) // The effect will run whenever serviceId changes

  // Function to handle the "Order Service" button click
  const handleOrderService = () => {
    navigate(`/OrderDetails?serviceId=${serviceId}`) // Navigate to OrderDetails page with serviceId
  }

  // Render loading text, if data is still being fetched
  if (loading) return <p>Loading service details...</p>

  // Render if no service is found
  if (!service) return <p>Service not found.</p>

  // Render the service details once they are fetched
  return (
    <div className="service-details">
      <h1>{service.title}</h1> {/* Service Title */}
      <p>{service.description}</p> {/* Service Description */}
      <p>
        <strong>Price:</strong> ${service.price}
      </p>{' '}
      {/* Service Price */}
      <p>
        <strong>Duration:</strong> {service.duration}
      </p>{' '}
      {/* Service Duration */}
      <p>
        <strong>Status:</strong> {service.status}
      </p>{' '}
      {/* Service Status */}
      <button onClick={handleOrderService} className="order-button">
        Order Service
      </button>{' '}
      {/* Button to order service */}
    </div>
  )
}

export default ServiceDetails
