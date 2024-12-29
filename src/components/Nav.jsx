import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <Link to="/About">About</Link>
        <Link to="/ViewCategories">View Categories</Link>
        <Link onClick={handleLogOut} to="/">Sign Out</Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/SignUp">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )

  return (
    <header>
      <Link to="/">
        <div className="logo-wrapper" alt="logo">
          {/* <img
            className="logo"
            src="https://avatars.dicebear.com/api/gridy/app.svg"
            alt="welcome banner"
          /> */}
        </div>
        
      </Link>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav
