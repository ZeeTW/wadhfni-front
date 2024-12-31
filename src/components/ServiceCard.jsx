const ServiceCard = ({ title, description, price, duration, status }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Price:</strong> ${price}
      </p>
      <p>
        <strong>Duration:</strong> {duration}
      </p>
      <p>
        <strong>Status:</strong> {status}
      </p>
    </div>
  )
}

export default ServiceCard
