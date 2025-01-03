import { useState, useEffect } from 'react'
import axios from 'axios'
import ShowServiceCard from '../components/ShowServiceCard'

const ShowServices = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get(
          'http://localhost:3001/services/user',
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        setServices(response.data)
      } catch (error) {
        console.error('Failed to fetch services:', error)
      }
    }

    fetchServices()
  }, [])

  const handleDelete = async (serviceId) => {
    try {
      const token = localStorage.getItem('token')
      await axios.delete(`http://localhost:3001/services/${serviceId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setServices((prevServices) =>
        prevServices.filter((service) => service._id !== serviceId)
      )
      console.log('Service deleted successfully')
    } catch (error) {
      console.error('Failed to delete service:', error)
    }
  }

  return (
    <div className="show-services-page">
      <h1>Your Services</h1>
      {services.length > 0 ? (
        <ul>
          {services.map((service) => (
            <ShowServiceCard
              key={service._id}
              service={service}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      ) : (
        <p>You have not added any services yet.</p>
      )}
    </div>
  )
}

export default ShowServices
