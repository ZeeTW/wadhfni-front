import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const ViewCategories = () => {
  const { genreId } = useParams()
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()
}

export default ViewCategories
