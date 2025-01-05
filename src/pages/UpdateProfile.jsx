import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

// const UpdateProfile = ({user,setUser}) => {
//   const navigate = useNavigate()

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     location: '',
//     role: ''
//   })
//   const 
// }

const UpdateProfile = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    location: '',
    role: ''
  })

  const navigate = useNavigate()
  

  useEffect(()=>{
    const profile = async () => {
      try {
        const token = localStorage.getItem('token')

        const response = await axios.get ('http://localhost:3001/profile', {
          headers: {
            Authorization : `Bearer ${token}`
          }
        })
        setForm(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    profile()
  }, [])

  const handleChange = (e) => {
    const {name, value} = e.target 
    setForm({...form, [name]:value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const token = localStorage.getItem ('token')
      const response = await axios.put('http://localhost:3001/profile', form,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      navigate('/profile')
    } catch (error) {
      console.log(error)
    }
  }
  return(
<div>
  <h1>Update Profile</h1>
  <form onSubmit={handleSubmit}>
    <div>
      <label>Name:</label>
      <input type="text" name='name' value={form.name} onChange={handleChange}/>
    </div>
    <div>
      <label>Email:</label>
      <input type="email" name='email' value={form.email} onChange={handleChange}/>
    </div>
    <div>
      <label>Location:</label>
      <input type="text" name='location' value={form.location} onChange={handleChange}/>
    </div>
    <div>
      <label>Role:</label>
      <select name="role" id="role" value={form.role}
      onChange={handleChange}>
        <option value="freelancer">Freelancer</option>
        <option value="employer">Employer</option>
      </select>
    </div>

    <button type='submit'>Update</button>
  </form>
</div>
  )
}
export default UpdateProfile