import React from 'react'

const ServiceDetailsCard = ({ service }) => {
  return (
    <div className="service-card">
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <p>
        <strong>Price:</strong> ${service.price}
      </p>
    </div>
  )
}

export default ServiceDetailsCard
