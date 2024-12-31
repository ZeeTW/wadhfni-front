import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ service }) => {
  return (
    <Link to={`/ServiceDetails/${service._id}`} className="service-card-link">
      <div className="service-card">
        <h3>{service.title}</h3>
      </div>
    </Link>
  )
}

export default ServiceCard
