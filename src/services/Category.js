import axios from 'axios'

// services/Category.js

// services/Category.js

export const GetCategories = async () => {
  try {
    const response = await fetch('/categories') // API endpoint to fetch categories
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json() // Assuming the response is an array of categories
    return data
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error // Rethrow error so we can handle it in the component
  }
}
