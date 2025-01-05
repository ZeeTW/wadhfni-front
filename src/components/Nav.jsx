import { Link } from 'react-router-dom'

const Nav = ({ handleLogOut, user }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav className='nav'>
        <div className='nav-left'>
        <p className='welcome'>Welcome, {user.email}</p>
        <Link to="/home" className='link'>Home</Link>
        <Link to="/About" className='link'>About</Link>
        <Link to="/profile" className='link'>Profile</Link>
        </div>
        <Link onClick={handleLogOut} to="/" className='link'>
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav className='nav'>
      <Link to="/home" className='link'>Home</Link>
      <div className='nav-left'>
      <Link to="/SignUp" className='link'>Register</Link>
      <Link to="/signin" className='link'>Sign In</Link>
      </div>
    </nav>
  )
  return <header>{user ? userOptions : publicOptions}</header>
}

export default Nav
