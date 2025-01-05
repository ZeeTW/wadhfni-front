import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate, Link } from 'react-router-dom'

const SignIn = ({ setUser }) => {
  let navigate = useNavigate()
  let initialState = { name: '', password: '' }

  const [formValues, setFormValues] = useState({ name: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Call the SignInUser function from services to log in
      const payload = await SignInUser(formValues)

      setFormValues(initialState)

      setUser(payload)

      // Store the token in localStorage
      setTimeout(() => {
        const token = localStorage.getItem('token')
        if (token) {
          navigate('/home') // Proceed to home page
        } else {
          console.error('Token not found in localStorage!')
        }
      }, 100)

      // Redirect to home page after successful login
      navigate('/home')
    } catch (error) {
      console.error('SignIn error:', error)
      // Handle error (show error message)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h2>Sign In</h2>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-input"
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="your name"
              value={formValues.name}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-input"
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <button disabled={!formValues.password} className="auth-button">Sign In</button>
        </form>
        <p className="auth-link">
          Go Ahead and <Link to="/SignUp">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
