// src/services/Service.js
import Client from './api' // Make sure you have axios or fetch client set up

// 📝 Fetch services by category ID
export const GetServicesByCategory = async (categoryId) => {
  try {
    const res = await Client.get(`/api/services/category/${categoryId}`)
    return res.data // Return the services data
  } catch (error) {
    throw error // Handle error
  }
}
