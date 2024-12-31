import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate, Link } from 'react-router-dom'

const SignIn = ({ setUser }) => {

  let navigate = useNavigate()

  let initialState = { email: '', password: ''}

  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
setFormValues(initialState)
setUser(payload)
navigate('/home')
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <div className='title-of-SignIn'>
          <h2>IF YOU HAVE AN ACCOUNT</h2>
          <p>Sign In</p>
        </div>
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          
          <button disabled={!formValues.email || !formValues.password}>
            Sign In
          </button>
        </form>
        <p>A new Member to the Family??</p>
        <p>
          Go Ahead and <Link to="/SignUp">Sign Up</Link> 
        </p>
      </div>
    </div>
  )
}

export default SignIn
