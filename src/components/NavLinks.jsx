import { Link } from 'react-router-dom'

const NavLinks = () => {
  return (
    <nav className="navbar">
      <ul>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </ul>
    </nav>
  )
}

export default NavLinks
