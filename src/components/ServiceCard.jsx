import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ service }) => {
  return (
    <Link
      to={`/ServiceDetails?serviceId=${service._id}`}
      className="service-link"
    >
      <div className="service-card-content">
        <h3>{service.title}</h3>
      </div>
    </Link>
  )
}

export default ServiceCard
