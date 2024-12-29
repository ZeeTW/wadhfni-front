import react from 'react'

const ServiceCard = ({service}) => {

  return(
    <div className='service-card' key={service._id}>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <p>Price: ${service.price}</p>
      <p>Duration: {service.duration}</p>
    </div>
  )
}

export default ServiceCard