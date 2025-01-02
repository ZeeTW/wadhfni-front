import { Link } from 'react-router-dom'

<<<<<<< HEAD
const NavLinks = ({ user }) => {
  return (
    <div>
      {' '}
      {user && (
        <>
          {' '}
          <Link to="/Services">Graphic designer</Link>{' '}
          <Link to="/Services">Digital Marketing</Link>
          <Link to="/Services">Translation & copywriting</Link>{' '}
          <Link to="/Services">Consultation</Link>
        </>
      )}
    </div>
=======
const NavLinks = () => {
  return (
    <nav className="navbar">
      <ul>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </ul>
    </nav>
>>>>>>> a6f360fee998e0f8ede2b2229f088245992a79f4
  )
}

export default NavLinks
