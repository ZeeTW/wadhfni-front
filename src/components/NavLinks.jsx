import { Link } from 'react-router-dom'


const NavLinks = ({ user }) => {


    return (
        <>
        {user && (
        <header className='header-link'>
            <div>   
            <Link to="/Services">Graphic designer</Link>
            <Link to="/Services">Digital Marketing</Link>
            <Link to="/Services">Translation & copywriting</Link>
            <Link to="/Services">Consultation</Link>
            </div>
        </header>
        
        )}
    </>
    )
}

export default NavLinks
