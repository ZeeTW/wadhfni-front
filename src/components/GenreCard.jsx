const GenreCard = ({ image, name, OrdersCount, onClick }) => {
  return (
    <div className="genre-card" onClick={onClick}>
      <div className="img-wrapper">
        <img src={image} alt={name} height="250px" width="300px" />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{name}</h3>
        <p>{OrdersCount} Orders</p>
      </div>
    </div>
  )
}

export default GenreCard
