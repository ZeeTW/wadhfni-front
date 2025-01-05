import { useState } from 'react'
import { SignUpUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Call the SignUpUser function from services
      let res = await SignUpUser({
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
        location: formValues.location,
        role: formValues.role
      })
      console.log(res)

      setFormValues({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        location: '',
        role: ''
      })

      navigate('/signin')
    } catch (error) {
      console.error('Signup error:', error)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-header">
            <h2>Sign Up</h2>
          </div>

          <div className="form-columns">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-input"
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Your Name"
                value={formValues.name}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-input"
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={formValues.email}
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

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="form-input"
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                required
              />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                className="form-input"
                onChange={handleChange}
                type="text"
                name="location"
                value={formValues.location}
                required
              />
            </div>

            <div className="form-group">
              <label>Choose your role:</label>
              <select
                className="form-input"
                name="role"
                onChange={handleChange}
                value={formValues.role}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="freelancer">Freelancer</option>
                <option value="employer">Employer</option>
              </select>
            </div>
          </div>

          <button
            className="auth-button"
            disabled={
              !formValues.email ||
              !formValues.password ||
              formValues.confirmPassword !== formValues.password
            }
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
