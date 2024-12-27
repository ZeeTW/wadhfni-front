import { Link } from 'react-router-dom'

const Header = ({ user, handleLogOut }) => {
let userOptions
if (user) {
    userOptions = (
    <nav>
        <Link to="/ViewCategore">ViewCategories</Link>
        <Link onClick={handleLogOut} to="/">
        Sign Out
        </Link>
    </nav>
    )
}

return (
a
)
}

export default Header
