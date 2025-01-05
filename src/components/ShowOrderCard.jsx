import { Link } from 'react-router-dom'

const ShowOrderCard = ({ order, onDelete }) => {
  return (
    <div className="order-card">
      <h3>{order.serviceId?.title || 'Service Title Unavailable'}</h3>
      <p>
        <strong>Status:</strong> {order.status}
      </p>
      <p>
        <strong>Price:</strong> ${order.price}
      </p>
      <Link to={`/OrderDetails/${order._id}`}>
        <button>View Details</button>
      </Link>
      <button onClick={onDelete} style={{ color: 'red' }}>
        Delete Order
      </button>
    </div>
  )
}

export default ShowOrderCard
