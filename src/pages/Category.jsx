import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ServiceCard from '../components/ServiceCard'

const CategoryPage = () => {
  const {categoryId} = useParams()
  const [services, setServices] = useState([])

  useEffect(()=>{
    const services = async() => {
      try {
        const response = await axios.get(`http://localhost:3001/services?categoryId=${categoryId}`)
        setServices(response.data)
      } catch (error) {
        throw(error)
      }
    }

    services()
  },[categoryId])

  return(
    <div>
      <h1>Here are Services in {categoryId}</h1>
      <div className='services-list'>
        {services.length === 0 ? (
          <p>No Services</p>
        ): (
          services.map(service => (
            <ServiceCard key={service._id} service={service} />
          ))
        )}
      </div>
    </div>
  )
}

export default CategoryPage