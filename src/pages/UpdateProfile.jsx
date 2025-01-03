import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UpdateProfile = () => {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token')
        if (!token) {
          setError('No token found. Please log in.')
          setLoading(false)
          navigate('/signin')
          return
        }

        const response = await axios.get('http://localhost:3001/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setProfile(response.data)
      } catch (err) {
        console.error('Error fetching profile:', err)
        setError('Failed to load profile.')
        if (err.response?.status === 401) {
          localStorage.removeItem('token')
          navigate('/signin')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        setError('No token found. Please log in.')
        navigate('/signin')
        return
      }

      const formData = new FormData(e.target)
      const response = await axios.put(
        'http://localhost:3001/profile',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      setSuccess(true)
      console.log('Profile updated successfully:', response.data)
      navigate('/profile') // Redirect to the profile page after success
    } catch (err) {
      console.error('Error updating profile:', err)
      setError('Failed to update profile. Please try again.')
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <p className="error-message">{error}</p>

  return (
    <div className="update-profile-container">
      <h1>Update Profile</h1>
      {success && (
        <p className="success-message">Profile updated successfully!</p>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={profile.name || ''}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={profile.email || ''}
            required
          />
        </div>

        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            defaultValue={profile.location || ''}
          />
        </div>

        <button type="submit">Update Profile</button>
      </form>

      <button onClick={() => navigate('/profile')}>Cancel</button>
    </div>
  )
}

export default UpdateProfile
