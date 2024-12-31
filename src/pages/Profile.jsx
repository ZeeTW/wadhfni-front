import { Link } from 'react-router-dom'

const Profile = ({ props }) => {
  ;<div class="profile-container">
    <h1 id="h1-profile-user">User Profile</h1>
    {/* <img
    src= {user.profilePicture || '/default-profile.png' } 
    class="profile-picture"
/> */}
  </div>

  return (
    <div>
      <p>
        <strong>Name:</strong>
        {props.user}
      </p>
      <p>
        <strong>Bio:</strong>
        {props.Bio}
      </p>

      <div className="profile-button">
        <Link to="/">
          <button>Sign Out</button>
        </Link>
        <Link to="/ServiceForm">
          <button>Add a Service</button>
        </Link>
      </div>
    </div>
  )
}

export default Profile
