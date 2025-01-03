import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ServiceDetailsCard from '../components/ServiceDetailsCard'

const ServiceDetails = () => {
  const { serviceId } = useParams()
  const [service, setService] = useState(null)
  const navigate = useNavigate()

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
  }, [serviceId])

  const handleClick = async () => {
    if (!service) {
      console.error('Service not available')
      return
    }

    try {
      const orderDetails = {
        serviceId: service._id,
        title: service.title,
        status: 'pending',
        price: service.price,
        order_date: new Date(),
        payment_status: 'pending'
      }

      const token = localStorage.getItem('token')
      // Create order in the backend
      const response = await axios.post(
        'http://localhost:3001/orders',
        orderDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      console.log('Order created:', response.data)

      // Redirect to OrderDetails page
      navigate(`/OrderDetails/${response.data._id}`)
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
          <button onClick={handleClick}>Order this Service</button>
        </div>
      ) : (
        <p>Service not found or loading...</p>
      )}
    </div>
  )
}

export default ServiceDetails
