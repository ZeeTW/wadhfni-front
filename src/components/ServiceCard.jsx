import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <Link to={`/services/${service._id}`}>
        <h3>{service.title}</h3>
      </Link>
    </div>
  )
}

export default ServiceCard
