import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ServiceDetailsCard = ({ service }) => {
  const navigate = useNavigate()

  const handleOrderClick = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3001/orders',
        {
          buyer: localStorage.getItem('userId'),
          serviceId: service._id,
          status: 'Pending',
          price: service.price || 3000,
          order_date: new Date(), // Current date
          delivery_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days later
          payment_status: 'pending'
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      )

      console.log('Order placed:', response.data)

      // Redirect to OrderDetails with orderId
      navigate(`/OrderDetails?orderId=${response.data._id}`)
    } catch (error) {
      console.error(
        'Failed to place order:',
        error.response?.data || error.message
      )
    }
  }

  return (
    <div className="service-card">
      <h3>{service.title || 'No Title Available'}</h3>
      <p>
        <strong>Description:</strong> {service.description || 'No Description'}
      </p>
      <p>
        <strong>Price:</strong> ${service.price || 'N/A'}
      </p>
      <p>
        <strong>Duration:</strong> {service.duration || 'N/A'}
      </p>
      <p>
        <strong>Status:</strong> {service.status || 'N/A'}
      </p>
      <button onClick={handleOrderClick}>Order Service</button>
    </div>
  )
}

export default ServiceDetailsCard
