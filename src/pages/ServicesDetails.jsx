import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const ServiceDetails = () => {
  const { ServiceDetails } = useParams()
  const [services, setServiceDetails] = useState({})
  return (
    <div className="service-details">
      <section className="image-container">
        <div>
          <img src={services.background_image} alt={services.name} />
        </div>
      </section>
      <section className="details">
        <div className="flex-row space">
          <h2>{services.name}</h2>
          <h2>Rating: {services.rating}/5</h2>
        </div>
        <div>
          <h3>Description</h3>
          <p>{services.description}</p>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetails
