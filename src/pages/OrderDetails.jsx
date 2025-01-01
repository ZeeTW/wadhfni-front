import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const OrderDetails = () => {
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Use useLocation to get query params from the URL
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const orderId = queryParams.get('orderId')

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (orderId) {
        try {
          const response = await axios.get(
            `http://localhost:3001/orders/${orderId}`
          )
          setOrder(response.data)
        } catch (err) {
          console.error('Failed to fetch order details:', err)
          setError('Failed to load order details.')
        } finally {
          setLoading(false)
        }
      }
    }

    fetchOrderDetails()
  }, [orderId]) // Re-fetch order details when orderId changes

  return (
    <div className="order-details">
      <h2>Order Details</h2>
      {loading ? (
        <p>Loading order details...</p>
      ) : error ? (
        <p>{error}</p>
      ) : order ? (
        <ul>
          <li>
            <strong>Order ID:</strong> {order._id}
          </li>
          <li>
            <strong>Buyer:</strong> {order.buyer?.name || 'N/A'}
          </li>
          <li>
            <strong>Status:</strong> {order.status}
          </li>
          <li>
            <strong>Total Price:</strong> {order.price} BHD
          </li>
          <li>
            <strong>Date Ordered:</strong>{' '}
            {new Date(order.order_date).toLocaleDateString()}
          </li>
          <li>
            <strong>Delivery Date:</strong>{' '}
            {new Date(order.delivery_date).toLocaleDateString()}
          </li>
          <li>
            <strong>Payment Status:</strong> {order.payment_status}
          </li>
        </ul>
      ) : (
        <p>No order details available.</p>
      )}
    </div>
  )
}

export default OrderDetails
