import Client from './api'

// 📝 Fetch all categories
export const GetCategories = async () => {
  try {
    const res = await Client.get('/categories') // Adjust route if necessary
    return res.data
  } catch (error) {
    throw error
  }
}

// 📝 Fetch a single category by ID
export const GetCategoryById = async (id) => {
  try {
    const res = await Client.get(`/categories/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

// 📝 Create a new category
export const CreateCategory = async (data) => {
  try {
    const res = await Client.post('/categories', data)
    return res.data
  } catch (error) {
    throw error
  }
}

// 📝 Update a category by ID
export const UpdateCategory = async (id, data) => {
  try {
    const res = await Client.put(`/categories/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

// 📝 Delete a category by ID
export const DeleteCategory = async (id) => {
  try {
    const res = await Client.delete(`/categories/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
