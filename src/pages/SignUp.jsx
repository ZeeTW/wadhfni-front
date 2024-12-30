import { useState } from 'react'
import { SignUpUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Call the SignUpUser function from services
      await SignUpUser({
        name: formValues.name,
        email: formValues.email,
        password: formValues.password
      })

      // Reset the form values after successful signup
      setFormValues({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

      // Redirect to the sign-in page after registration
      navigate('/signin')
    } catch (error) {
      console.error('Signup error:', error)
      // Add any error handling here, e.g., set error state
    }
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="title-of-SignUp">
            <h2>WELCOME NEW MEMBER!</h2>
            <p>Sign Up</p>
          </div>

          <div className="input-wrapper">
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Your Name"
              value={formValues.name}
              required
            />
          </div>
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
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            disabled={
              !formValues.email ||
              formValues.password !== formValues.confirmPassword
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
