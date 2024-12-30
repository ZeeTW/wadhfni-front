import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const OrderDetails = () => {
  return (
    <div>
      <h2>Order Details</h2>
      <p>Here you can view the details of the order.</p>
      <ul>
        <li>Order ID: </li>
        <li>Customer Name: </li>
        <li>Status: </li>
        <li>Total Price: $199.99</li>
        <li>Items Ordered: 3</li>
      </ul>
    </div>
  )
}

export default OrderDetails
