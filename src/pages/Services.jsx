const Services = ({ onClick, image, name, rating }) => {
  const navigate = useNavigate()

  const handleServiceClick = () => {
    navigate('/ServicesDetails')
  }

  return (
    <div className="service detail" onClick={onClick}>
      <div className="img-wrapper">
        <img src={image} alt={name} />
        <button id="Services-List" onClick={handleServiceClick}>
          View Service Details
        </button>
      </div>
      <div className="info-wrapper">
        <h3>{name}</h3>
        <p>Rating: {rating}</p>
      </div>
      <h2>Our Services</h2>
      <p>We offer a variety of job opportunities.</p>
    </div>
  )
}

export default Services
