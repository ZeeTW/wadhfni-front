import OrderCard from "../components/OrderCard"

const MyOrders = () => {


return (
    <div>
        <h2>My Orders</h2>
        {buyer && (
        <>
        <ul>
            <li>
                <p>{orderDetails.serviceId}<button onClick={() => navigate('/OrderDetails')}> Details</button></p>
            </li>
        </ul>
        </>
        )}
    </div>
    )
}

export default MyOrders