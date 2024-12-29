import { useNavigate } from 'react-router-dom'
import Welcome from '../assets/welcome.svg'
import '../Cover.css'

const Cover = () => {
  let navigate = useNavigate()

  return (
    <div className='cover'>
    <div className="home-container col">
      <section className="welcome-signin">
        <button id='freelancer-button' onClick={() => navigate('/signin')}>
          A Freelancer?
        </button>
        <button id='employer-button' onClick={() => navigate('/signin')}>
          An Employer?
        </button>
      </section>
      
    </div>
    </div>
  )
}

export default Cover
