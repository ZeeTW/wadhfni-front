import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const OrderDetails = () => {
  return (
    <div>
      <h2>Order Details</h2>
      <p>Here you can view the details of the order.</p>
      <ul>
        <li>Order ID: {props.user.orderId}</li>
        <li>Customer Name: {props.user.name}</li>
        <li>Status: {props.user.status}</li>
        <li>Total Price: {props.user.price} BHD</li>
        <li>Date Ordered: {props.user.dateOrder}</li>
        <li>Delivery Date: {props.user.deliveryDate}</li>
      </ul>
    </div>
  )
}

export default OrderDetails
