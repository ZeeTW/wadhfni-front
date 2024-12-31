const Services = ({ onClick, image, name, rating }) => {
  return (
    <div className="service detail" onClick={onClick}>
      <div className="img-wrapper">
        <img src={img} alt={name} />
        <button id="Services-List" onClick={() => navigate('/ServicesDetails')}>
          Services:
        </button>
      </div>
      <div className="info-wrapper">
        <h3>{name}</h3>
        <p>Rating:{rating}</p>
      </div>
      <h2>Our Services</h2>
      <p>We offer a variety of job opportunities.</p>
    </div>
  )
}

export default Services
