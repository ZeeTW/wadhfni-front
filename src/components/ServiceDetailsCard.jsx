import React from 'react'

const ServiceDetailsCard = ({ service }) => {
  // Make sure the service prop is available before rendering
  if (!service) {
    return <p>Service not found.</p> // If service data is missing, display an error message
  }

  return (
    <div className="service-card">
      <h3>{service.title}</h3>
      <p>{service.description}</p> {/* Display service description */}
      <p>
        <strong>Price:</strong> ${service.price}
      </p>{' '}
      {/* Display price of the service */}
    </div>
  )
}

export default ServiceDetailsCard
