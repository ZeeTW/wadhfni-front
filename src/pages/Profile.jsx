import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Profile = () => {
  const [profile, setProfile] = useState(null)
  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token')

      const response = await axios.get('http://localhost:3001/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setProfile(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  if (!profile) {
    return <div>Loading...</div>
  }

  return (
    <div className="profile-container">
      <h1>User Profile</h1>

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
