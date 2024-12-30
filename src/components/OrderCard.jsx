const OrderCard = ({onClick, image, name, rating}) => {

    return (
        <div className="card order-card" onClick={onClick}>
            <div className="img-wrapper">
            <img src={image} alt={name} />
        </div>

        <div className="info-wrapper">
        <h3>{name}</h3>
        <p>Rating:{rating}</p>
    </div>
</div>
    )
}

export default OrderCard