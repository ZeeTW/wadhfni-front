import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import OrderCard from "../components/OrderCard"

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()


const getOrders = async () => {
    
    try {
        const response = await axios.get(
        `http://localhost:5173/Orders`
        )
        setGames(response.data)
    } catch (error) {
        console.error('Error fetching games by genre:', error)
    }
}

return (
    <div>
        <h1>My Orders</h1>
        { 
        <>
            {orders.map((order) => (
                <OrderCard
                key={order.id}
                onClick={() => navigate(`/OrderDetails/${order.id}`)}
                image={order.background_image}
                name={order.name}
                rating={order.rating}
            />
            ))}
        </>
        }
    </div>
    )
}

export default MyOrders