import { Link } from "react-router-dom"

const Profile = ({props, user}) => {


return (
<div>
    <p><strong>Name:</strong>{props.user}</p>
    <p><strong>Bio:</strong>{props.Bio}</p>


<div class="profile-container">
    <h1 id="h1-profile-user">User Profile</h1>
    <img
    src= {user.profilePicture || '/images/default-profile.jpeg' } 
    class="profile-picture"
    width="90"
    height="90"
    style="border-radius: 50%"
/>
</div>




<div className="profile-btn-Fl">
    {user.Freelancer && (
    <>
        <Link to='/'><button>Sign Out</button></Link>
        <Link to='/ServiceForm'><button>Add a Service</button></Link>
    </>
    )}
</div>

<div className="profile-btn-em">
    {user.Employer && (
    <>
        <Link to='/'><button>Sign Out</button></Link>
        <Link to='/MyOrders'><button>View My Orders</button></Link>
    </>
    )}
    </div>
    </div>
    )
}

export default Profile