import { Link } from 'react-router-dom'

const ShowServiceCard = ({ service, onDelete }) => {
  return (
    <li className="service-item">
      <Link to={`/services/${service._id}`}>{service.title}</Link>
      <button onClick={() => onDelete(service._id)} className="delete-button">
        Delete
      </button>
    </li>
  )
}

export default ShowServiceCard
