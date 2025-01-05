import { useNavigate } from 'react-router-dom'

const Cover = () => {
  let navigate = useNavigate()

  return (
    <div className='cover'>
    <div className="home-container col">
        <button id='freelancer-button' onClick={() => navigate('/signin')}>
          A Freelancer?
        </button>
        <button id='employer-button' onClick={() => navigate('/signin')}>
          An Employer?
        </button>
      
    </div>
    </div>
  )
}

export default Cover
