import React from 'react'

const ServiceDetailsCard = ({ service }) => {
  return (
    <div className="service-details-card">
      <h3>
        <strong>Title:</strong> {service.title}
      </h3>
      <p>
        <strong>Description:</strong> {service.description}
      </p>
      <p>
        <strong>Price:</strong> ${service.price}
      </p>
      <p>
        <strong>Duration:</strong> {service.duration}
      </p>
      <p>
        <strong>Status:</strong> {service.status}
      </p>
      {/* Accessing populated category and owner data */}
    </div>
  )
}

export default ServiceDetailsCard
