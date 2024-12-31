import { Link } from 'react-router-dom'

const Nav = ({ handleLogOut, user }) => {
  let userOptions
  if(user){
    userOptions=(
      <nav>
        <h3>Welcome {user.name}</h3>
        <Link to='/About'>About</Link>
        <Link onClick = {handleLogOut} to='/'>Sign Out</Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/register'>Register</Link>
      <Link to='/signin'>Sign In</Link>
    </nav>
  )
  return (
    
    
    <header>
      {user ? userOptions:publicOptions}
    </header>
  )
}

export default Nav
