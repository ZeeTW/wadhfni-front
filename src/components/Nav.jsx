import { Link } from 'react-router-dom'


const Nav = ({ handleLogOut, user }) => {
  
  return (
    <header className='headr-nav'>
    <nav>
    <div>
      {user && (
        <>
        <Link to="/About">About</Link>
        <Link to="/ViewCategories">View Categories</Link>
        <Link onClick={handleLogOut} to="/">Sign Out</Link>
        </>
      )}
    </div>

    <div>
      {user && (
        <>
        <a href="/auth/profile">
        <img
          src={user.profilePicture}
          id="profile-image"
          width="60"
          height="60"
          style="border-radius: 50%"/>
        </a>
        </>
      )}
    </div>
    </nav>
    </header>
  )
}

export default Nav
