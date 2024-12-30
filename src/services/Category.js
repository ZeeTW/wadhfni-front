import axios from 'axios'

// Fetch categories from the backend API
export const GetCategories = async () => {
  try {
    const response = await axios.get('/api/categories') // Adjust URL based on your backend
    return response.data // Assuming response contains an array of categories
  } catch (error) {
    console.error('Error fetching categories:', error)
    return [] // Return empty array in case of error
  }
}
