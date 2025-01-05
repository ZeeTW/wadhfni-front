import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ service }) => {
  return (
      <div className="service-card category-card">
        <Link to={`/services/${service._id}`} className="category-link">
          <h4>{service.title}</h4>
        </Link>
      </div>

  )
}

export default ServiceCard
