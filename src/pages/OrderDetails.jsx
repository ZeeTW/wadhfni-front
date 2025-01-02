import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const OrderDetails = () => {
  const { orderId } = useParams()
  const [order, setOrder] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const token = localStorage.getItem('token') // Get token from localStorage
        if (!token) {
          console.log('No token found. Please log in to view order details.')
          return
        }

        const response = await axios.get(
          `http://localhost:3001/orders/${orderId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        setOrder(response.data)
      } catch (error) {
        console.error('Failed to fetch order:', error)
      }
    }

    if (orderId) {
      fetchOrder()
    }
  }, [orderId])

  return (
    <div className="order-details-page">
      <h2>Order Details</h2>
      {order ? (
        <div>
          <p>
            <strong>Order Title:</strong> {order.title || 'N/A'}
          </p>
          <p>
            <strong>Status:</strong> {order.status || 'N/A'}
          </p>
          <p>
            <strong>Price:</strong> ${order.price || 'N/A'}
          </p>
          <p>
            <strong>Order Date:</strong>{' '}
            {order.placedAt
              ? new Date(order.placedAt).toLocaleDateString()
              : 'N/A'}
          </p>
          <p>
            <strong>Payment Status:</strong> {order.payment_status || 'N/A'}
          </p>
        </div>
      ) : (
        <p>Order not found or loading...</p>
      )}
      <button onClick={() => navigate('/home')}>Home</button>
    </div>
  )
}

export default OrderDetails
