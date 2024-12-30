import { Link } from 'react-router-dom'

const Nav = ({ handleLogOut, user }) => {
  
if (user){
  <div>
      <nav>
        <Link to="/About">About</Link>
        <Link to="/ViewCategories">View Categories</Link>
        <Link onClick={handleLogOut} to="/">Sign Out</Link>
      </nav>
      
      <a href="/">
        <img
          src="<%= user.profilePicture %>"
          id="profile-image"
          width="60"
          height="60"
          style="border-radius: 50%"
        />
      </a>
      </div>

}

  return (
  <div>

  </div>
  )
}

export default Nav
