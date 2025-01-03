import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Profile = ({ user }) => {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token')

        if (!token) {
          setError('No token found, please log in')
          setLoading(false)
          return
        }

        const response = await axios.get('http://localhost:3001/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log('Profile fetched:', response.data)

        setProfile(response.data)
      } catch (err) {
        console.error('Error fetching profile:', err)
        setError('Failed to fetch profile')
        if (err.response?.status === 401) {
          localStorage.removeItem('token')
          navigate('/signin')
        }
      }
      setLoading(false)
    }

    fetchProfile()
  }, [navigate])

  if (!profile) {
    return <div>Loading...</div>
  }
  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <img
        src={'../assets/default-profile.jpg'}
        alt="Profile"
        className="profile-image"
      />

      <p>
        <strong>Name:</strong> {profile.name}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
      <p>
        <strong>Location:</strong> {profile.location}
      </p>
      <p>
        <strong>Role:</strong> {profile.role}
      </p>

      {/* Sign out and other profile-related actions */}

      <div>
        <Link to="/signin">
          <button onClick={() => localStorage.removeItem('token')}>
            Sign Out
          </button>
        </Link>
        <Link to="/UpdateProfile">
          <button>Update Profile</button>
        </Link>
      </div>
    </div>
  )
}

export default Profile
