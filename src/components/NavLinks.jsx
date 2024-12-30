import { Link } from 'react-router-dom'


const NavLinks = ({user}) => {

    if (user) {
        <div>
            <Link to="/Services">Graphic designer</Link>
            <Link to="/Services">Digital Marketing</Link>
            <Link to="/Services">Translation & copywriting</Link>
            <Link to="/Services">Consultation</Link>
        </div>

    }


    return (
    <div>

    </div>
    )
}

export default NavLinks