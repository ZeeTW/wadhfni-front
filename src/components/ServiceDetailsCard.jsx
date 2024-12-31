// src/components/ServiceCard.jsx
import React from 'react'
// import { Link } from 'react-router-dom'

const ServiceDetailsCard = ({ service }) => {
  return (
    <div className="service-card-content">
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <p>Price: ${service.price}</p>
      <p>Duration: {service.duration}</p>
    </div>
  )
}

export default ServiceDetailsCard
