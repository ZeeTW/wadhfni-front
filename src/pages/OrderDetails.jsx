import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const OrderDetails = () => {
  const { orderId } = useParams()
  const [order, setOrder] = useState(null)

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/orders/${orderId}`
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
            <strong>Status:</strong> {order.status}
          </p>
          <p>
            <strong>Price:</strong> ${order.price}
          </p>
          <p>
            <strong>Order Date:</strong>{' '}
            {order.order_date
              ? new Date(order.order_date).toLocaleDateString()
              : 'N/A'}
          </p>
          <p>
            <strong>Payment Status:</strong> {order.payment_status}
          </p>
        </div>
      ) : (
        <p>Order not found or loading...</p>
      )}
    </div>
  )
}

export default OrderDetails
