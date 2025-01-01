import { Link } from 'react-router-dom'

const Nav = ({ handleLogOut, user }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <h3>Welcome {user.email}</h3>
        <Link to="/About">About</Link>
        <Link to="/profile" >Profile</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
        <Link to="/category/:categoryId">Id</Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/SignUp">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )
  return <header>{user ? userOptions : publicOptions}</header>
}

export default Nav
