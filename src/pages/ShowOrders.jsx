import { useState, useEffect } from 'react'
import axios from 'axios'
import ShowOrderCard from '../components/ShowOrderCard'

const ShowOrders = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get(
          'http://localhost:3001/orders/user-orders',
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        console.log('response.data', response.data)
        setOrders(response.data)
      } catch (error) {
        console.error('Failed to fetch orders:', error)
      }
    }

    fetchOrders()
  }, [])

  const handleDelete = async (orderId) => {
    try {
      const token = localStorage.getItem('token')
      await axios.delete(`http://localhost:3001/orders/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setOrders(orders.filter((order) => order._id !== orderId))
      console.log('Order deleted successfully')
    } catch (error) {
      console.error('Failed to delete order:', error)
    }
  }

  return (
    <div className="show-orders-page">
      <h1>Your Orders</h1>
      {orders.length > 0 ? (
        orders.map((order) => (
          <ShowOrderCard
            key={order._id}
            order={order}
            onDelete={() => handleDelete(order._id)}
          />
        ))
      ) : (
        <p>You have no orders yet.</p>
      )}
    </div>
  )
}

export default ShowOrders
