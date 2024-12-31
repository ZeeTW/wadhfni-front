// src/components/ServiceDetailsCard.jsx
import React from 'react'
import Client from '../services/api' // Import Client to make API requests

const ServiceDetailsCard = ({ service, onOrderClick }) => {
  // This is where you might handle future API calls using `Client` if needed
  // Example: making an order request when the user clicks the "Order Service" button

  const handleOrderClick = async () => {
    try {
      // Example of sending an order request to your backend (adjust as per your backend API)
      const orderData = {
        serviceId: service._id,
        userId: localStorage.getItem('userId'), // or use context to get user info
        status: 'pending'
      }

      const response = await Client.post('/orders', orderData)
      console.log('Order placed successfully:', response.data)
      onOrderClick() // Execute the parent component's onOrderClick function after successful order
    } catch (error) {
      console.error('Failed to place the order:', error)
    }
  }

  return (
    <div className="service-card">
      <h3>{service.title}</h3>
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
      <button onClick={handleOrderClick}>Order Service</button>
    </div>
  )
}

export default ServiceDetailsCard
